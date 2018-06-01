# **`Webhook Class`** Documentation

Information about the Webhook class and what data is required for initiating `requests`.

---

## **`POST`** Requests

Setting up a Webhook POST Request:

```javascript
// Import Exported from Modules
const { Webhook } = require('app.js');

// Creating the Webhook class
let hook = new Webhook(url, username, message, tts, avatar);

// Setting up a Request
hook.setupRequest(url, username, message, tts, avatar);

// Initiating Request (returns a Promise)
hook.initRequest()
    .then(res => console.log("Action on Success Goes Here..."))
    .catch(err => console.log("Action on Failure Goes Here..."));
```

| Parameters            | Description                                          |
|  :-------------:      |:-------------:                                       |
| `url` (*string*)      | The [Webhook Link](https://support.discordapp.com/hc/en-us/articles/228383668) for a Channel     |
| `username` (*string*) | The Webhook Name (*Your Choice*)                     |
| `message` (*string*)  | The message displayed by the Webhook                 |
| `tts` (*bool*)        | Text-To-Speach                                       |
| `avatar` (*string*)   | Webhook Avatar URL                                   |

---

## **`Webhook Class`** Methods

| Method                | Requires        | Returns         |
|  :-------------:      | :-------------: | :-------------: |
| `setupRequest`        |  WebhookURL, Username, Message, TextToSpeach, AvatarURL | Nothing |
| `initRequest`         |  Nothing        | **``Promise``** |
