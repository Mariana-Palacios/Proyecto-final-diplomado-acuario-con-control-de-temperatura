import base64
from email.mime.text import MIMEText
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from requests import HTTPError
import os


SCOPES = [
        "https://www.googleapis.com/auth/gmail.send"
    ]

current_dir = os.getcwd()
flow = InstalledAppFlow.from_client_secrets_file(f'{current_dir}/credentials.json', SCOPES)
creds = flow.run_local_server(port=0)

service = build('gmail', 'v1', credentials=creds)
message = MIMEText('This is the body of the email')
message['to'] = 'mpalaciosm2000@gmail.com'
message['subject'] = 'TermoFish'
create_message = {'raw': base64.urlsafe_b64encode(message.as_bytes()).decode()}

try:
    message = (service.users().messages().send(userId="me", body=create_message).execute())
    print(F'sent message to {message} Message Id: {message["id"]}')
except HTTPError as error:
    print(F'An error occurred: {error}')
    message = None