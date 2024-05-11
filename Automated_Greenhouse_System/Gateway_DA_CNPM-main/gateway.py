from adafruit_api import Adafruit_API
import time
from threading import Thread
USERNAME = 'hoang349'
KEY = 'aio_VHae55dKzFRfNTHmEdy6I7K0RLsU'

feed_id_list = ['led','pumper']

client = Adafruit_API(USERNAME, KEY, feed_id_list)
client.connect()

while(True):
    client.read_serial()
    time.sleep(1)