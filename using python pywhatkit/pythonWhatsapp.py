#first install pywhatkit by --> pip install pywhatkit
# importing the module
import pywhatkit

# using Exception Handling to avoid unprecedented errors
try:
    # sending message to reciever using pywhatkit

    # pywhatkit.sendwhatmsg("write phone number with country code on which you wish to send message","write your message here--> Hello from Python PyWhatKit😜🤣",write here time in hour and minute-->hour, minute)
    # for example
    pywhatkit.sendwhatmsg("+9179********","Hello from Python PyWhatKit😜🤣",17, 9)
    print("Successfully Sent!")
except:

    # handling exception
    # and printing error message
    print("An Unexpected Error!")
