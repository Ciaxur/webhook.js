# **`Webhook Class`** Documentation

Information about the Webhook class and what data is required for initiating `requests`.

---

## **`POST`** Requests

Setting up a Webhook POST Request:

```typescript
// Import Exported from Modules (Webhook.ts Location)
import { Webhook } from './Webhook.ts'

// Creating the Webhook class
const hook = new Webhook(url, username, message, avatar, tts);

// Setting up a Request
hook.setupRequest(url, username, message, avatar, tts);

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
| `avatar` (*string*)   | Webhook Avatar URL                                   |
| `tts` (*boolean*)        | Text-To-Speach                                    |

---

## **`Webhook Class`** Methods

| Method                | Requires        | Returns         |
|  :-------------:      | :-------------: | :-------------: |
| `setupRequest`        |  WebhookURL, Username, Message, AvatarURL, TextToSpeach | Nothing |
| `initRequest`         |  Nothing        | **``Promise``** |
