# importing the module
import pywhatkit

# using Exception Handling to avoid unprecedented errors
try:
    # sending message to reciever
    # using pywhatkit
    pywhatkit.sendwhatmsg("+917987245525","Hello from Python PyWhatKit😜🤣",17, 9)
    print("Successfully Sent!")
except:

    # handling exception
    # and printing error message
    print("An Unexpected Error!")
