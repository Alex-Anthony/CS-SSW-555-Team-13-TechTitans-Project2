#!/usr/bin/env python
# coding: utf-8

# # EEG DataLoader

# The dimensions of the training set are as follows: 4,500 samples, 64 channels, and a time length of 795. This corresponds to 5 categories in y_train.
# 
# The dimensions of the testing set are as follows: 750 samples, 64 channels, and a time length of 795. This corresponds to 5 categories in y_test.
# 
# You can download it from this Google Drive link: [https://drive.google.com/drive/folders/1ykR-mn4d4KfFeeNrfR6UdtebsNRY8PU2?usp=sharing].
# Please download the data and place it in your data_path at "./data."

# In[1]:


import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset


# In[2]:


data_path = 'data/'


# In[5]:


train_data = np.load(data_path + 'train_data.npy')
test_data = np.load(data_path + 'test_data.npy')
train_label = np.load(data_path + 'train_label.npy')
test_label = np.load(data_path + 'test_label.npy')

#To convert the data into PyTorch tensors
x_train_tensor = torch.Tensor(train_data)
y_train_tensor = torch.LongTensor(train_label)
x_test_tensor = torch.Tensor(test_data)
y_test_tensor = torch.LongTensor(test_label)


# In[6]:


device = torch.device("cuda" if torch.cuda.is_available() else "cpu") #Setting GPU on your computer


# In[7]:


train_dataset = TensorDataset(x_train_tensor.to(device), y_train_tensor.to(device)) # input data to Tensor dataloader
train_loader = DataLoader(train_dataset, batch_size=64, drop_last=True, shuffle=True) #  Batch size refers to the number of data sample
test_dataset = TensorDataset(x_test_tensor.to(device), y_test_tensor.to(device))
test_loader = DataLoader(test_dataset, batch_size=64,  drop_last=True,shuffle=False)


# # Build simple Deep learning model

# In[8]:


class EEGAutoencoderClassifier(nn.Module):
    def __init__(self, num_classes):
        super(EEGAutoencoderClassifier, self).__init__()
        self.encoder = nn.Sequential(
            nn.Linear(64 * 795, 256), # Input dimention is 64 channel * 795 time point, and use 256 units for first NN layer
            nn.ReLU(), # Use ReLu function for NN training
            nn.Linear(256, 128), # 256 NN units to 128 units
            nn.ReLU(),
            nn.Linear(128, 64),#  128 NN units to 64 units
            nn.ReLU()
        )
        self.classifier = nn.Sequential(
            nn.Linear(64, num_classes), # num_classes is 5 (hello,” “help me,” “stop,” “thank you,” and “yes”)
            nn.LogSoftmax(dim=1)  # Use LogSoftmax for multi-class classification
        )

    def forward(self, x):
        x = x.view(x.size(0), -1)
        x = self.encoder(x)

        # import pdb;pdb.set_trace()
        x = self.classifier(x)
        return x


# In[9]:


num_classes = 5 # setting final output class
model = EEGAutoencoderClassifier(num_classes).to(device)
criterion = nn.NLLLoss() # Use NLLLoss function to optimize
optimizer = optim.Adam(model.parameters(), lr=0.0001) # Setting parameters learning rate = 0.001


# In[10]:


num_epochs = 30 # setting training epochs (Number of training iterations)
for epoch in range(num_epochs):
    model.train()
    for data, labels in train_loader:
        optimizer.zero_grad()
        outputs = model(data)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

    print(f'Epoch {epoch + 1}/{num_epochs}, Loss: {loss.item()}')


# In[38]:


model.eval() # Evaluate your model
correct = 0
total = 0
inputs = []
outcomes = []
with torch.no_grad():
    for data, labels in test_loader:
        outputs = model(data)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()
        outcomes+=predicted
        inputs += labels

accuracy = correct / total
print(f'Test Accuracy: {accuracy * 100:.2f}%')
#print(outcomes)


# In[39]:


def output_interpret(out):
    i = out.item()
    if i == 0:
        return "hello"
    if i == 1:
        return "help me"
    if i == 2:
        return "stop"
    if i == 3:
        return "thank you"
    if i == 4:
        return "yes"
                
    return "fail"


# In[69]:


def data_and_predictions():
    pred = list(map(output_interpret,outcomes))
    data = list(map(output_interpret,inputs))
    result = []
    
    for i in range(0,len(pred)):
        result = result + [(data[i] , pred[i])]
    
    return result

#print(data_and_predictions())


# In[ ]:




