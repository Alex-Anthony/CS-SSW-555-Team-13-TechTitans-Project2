import unittest
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
from BCI_EEG_Classification import train_data, test_data, train_label, test_label  
from BCI_EEG_Classification import x_train_tensor, y_train_tensor, x_test_tensor, y_test_tensor 
class TestDataLoading(unittest.TestCase):
    def test_data_shapes(self):
        # Test if the data arrays are not empty and have the expected dimensions
        self.assertTrue(train_data.shape[0] > 0, "Train data should not be empty")
        self.assertTrue(test_data.shape[0] > 0, "Test data should not be empty")
        self.assertTrue(train_label.shape[0] > 0, "Train labels should not be empty")
        self.assertTrue(test_label.shape[0] > 0, "Test labels should not be empty")

    def test_tensor_types(self):
        # Test if the numpy arrays are correctly converted to PyTorch tensors
        self.assertIsInstance(x_train_tensor, torch.Tensor, "x_train_tensor should be a PyTorch Tensor")
        self.assertIsInstance(y_train_tensor, torch.Tensor, "y_train_tensor should be a PyTorch Tensor")
        self.assertIsInstance(x_test_tensor, torch.Tensor, "x_test_tensor should be a PyTorch Tensor")
        self.assertIsInstance(y_test_tensor, torch.Tensor, "y_test_tensor should be a PyTorch Tensor")

if __name__ == '__main__':
    unittest.main()

    ######################################################################################
    # This file will not run without data see BCI_EEG_Classification for more information
    ######################################################################################