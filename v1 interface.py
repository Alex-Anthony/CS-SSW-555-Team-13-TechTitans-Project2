import tkinter as tk
import customtkinter
from tkinter import Toplevel, Label
customtkinter.set_appearance_mode("system")
customtkinter.CTk


# Initialize main window
#window = tk.Tk()
#window.geometry('800x600')  # Set window size for visibility
window = customtkinter.CTk()
window.geometry('800x600')  # Set window size for visibility
label = customtkinter.CTkLabel(window, text="TechTitans BCI", font = ("Arial", 24))
label.pack(pady=12, padx=10)
# Function to show the main screen
def show_main_screen():
    start_button.pack(pady=250)
    taskbar_button.pack(anchor='nw')
    taskbar_button.configure(text="Taskbar", command=toggle_taskbar)
    about_team_button.pack_forget()
    about_project_button.pack_forget()
    if 'avatar_label' in globals():
        avatar_label.pack_forget()

def toggle_taskbar():
    if taskbar_button.cget('text') == "Taskbar":
        # Show taskbar items and hide start button
        start_button.pack_forget()
        about_team_button.pack()
        about_project_button.pack()
        taskbar_button.configure(text="Back", command=show_main_screen)
    else:
        # Back button functionality
        show_main_screen()

def show_avatar():
    # Hide everything from the main window
    start_button.pack_forget()
    taskbar_button.pack_forget()
    about_team_button.pack_forget()
    about_project_button.pack_forget()
    # Create an avatar label or any other widget as needed
    global avatar_label
    avatar_label = customtkinter.CTkLabel(window, text="Avatar Here", font=("Arial", 24))
    avatar_label.pack(pady=200)
    # Show back button
    back_button.pack(anchor='nw')

def on_enter(e, text):
    info_label.configure(text=text)
    info_label.pack()

def on_leave(e):
    info_label.pack_forget()

# Taskbar button
taskbar_button = customtkinter.CTkButton(window, text="Taskbar", command=toggle_taskbar)
taskbar_button.pack(anchor='nw')

# Start button
start_button = customtkinter.CTkButton(window, text="Start", command=show_avatar)
start_button.pack(pady=250)

# Taskbar options (initially hidden)
about_team_button = customtkinter.CTkButton(window, text="About the Team")
about_team_button.pack_forget()

about_project_button = customtkinter.CTkButton(window, text="About the Project")
about_project_button.pack_forget()

# Info label for hover effect
info_label = customtkinter.CTkLabel(window, text="", font=("Arial", 16))
info_label.pack_forget()

# Back button (hidden initially)
back_button = customtkinter.CTkButton(window, text="Back", command=show_main_screen)
back_button.pack_forget()

# Bind hover events
about_team_button.bind("<Enter>", lambda e: on_enter(e, "Information about the Team..."))
about_team_button.bind("<Leave>", on_leave)

about_project_button.bind("<Enter>", lambda e: on_enter(e, "Information about the Project..."))
about_project_button.bind("<Leave>", on_leave)

# Start the GUI loop
window.mainloop()