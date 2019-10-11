import os
from twilio.rest import Client

account_sid="AC9e861a59211e6b8351f9cb5290a5ad61"
auth_token="07adb73ce400c9f94d5e7439b892b496"

client=Client(account_sid,auth_token)

call=client.calls.create(
	to="+917352419929",
	from_="+18634171604",
	url="http://demo.twilio.com/docs/voice.xml"
)

print(call.sid)
