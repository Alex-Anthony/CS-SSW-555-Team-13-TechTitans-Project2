import unittest
import customtkinter
import v1interface

class TestGUI(unittest.TestCase):
    def test_main_window_geometry(self):
        window = customtkinter.CTk()
        window.geometry('160x160+192+192')
        self.assertEqual(window.geometry(), '160x160+192+192')

    def test_label_text(self):
        window = customtkinter.CTk()
        label = customtkinter.CTkLabel(window, text="TechTitans BCI")
        self.assertEqual(label.cget('text'), "TechTitans BCI")

    #def test_button_command(self):
        #window = customtkinter.CTk()
        ##self.assertEqual(start_button.cget('command'), self.dummy_command)

   # def dummy_command(self):
       # pass
if __name__ == '__main__':
    unittest.main()


