import unittest
import numpy as np
import torch
from torch.utils.data import DataLoader, TensorDataset
from BCI_EEG_Classification import EEGAutoencoderClassifier  # Ensure this matches the actual file and class name

class TestBCIEEGClassification(unittest.TestCase):
    def setUp(self):
        # Generate synthetic data for testing
        self.train_data = np.random.rand(100, 64, 795)
        self.test_data = np.random.rand(20, 64, 795)
        self.train_label = np.random.randint(0, 5, 100)
        self.test_label = np.random.randint(0, 5, 20)

        # Convert to tensors
        self.x_train_tensor = torch.Tensor(self.train_data)
        self.y_train_tensor = torch.LongTensor(self.train_label)
        self.x_test_tensor = torch.Tensor(self.test_data)
        self.y_test_tensor = torch.LongTensor(self.test_label)

        # Create model instance from the EEGAutoencoderClassifier class
        self.model = EEGAutoencoderClassifier(5)

    def test_data_shapes(self):
        # Check the shape of the data
        self.assertEqual(self.train_data.shape, (100, 64, 795))
        self.assertEqual(self.test_data.shape, (20, 64, 795))

    def test_tensor_conversion(self):
        # Check types after conversion to tensor
        self.assertIsInstance(self.x_train_tensor, torch.Tensor)
        self.assertIsInstance(self.y_train_tensor, torch.LongTensor)

    def test_model_output(self):
        # Test if the model's forward method can handle an input
        output = self.model(self.x_train_tensor[0:1])
        self.assertEqual(output.shape, torch.Size([1, 5]))

    def test_accuracy_calculation(self):
        # Mock-up a simple accuracy calculation
        outputs = torch.tensor([[0.1, 0.1, 0.1, 0.1, 0.6]])
        labels = torch.tensor([4])
        _, predicted = torch.max(outputs, 1)
        accuracy = (predicted == labels).sum().item() / labels.size(0)
        self.assertEqual(accuracy, 1.0)

if __name__ == '__main__':
    unittest.main()
