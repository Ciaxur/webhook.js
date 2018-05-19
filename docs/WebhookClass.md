# Webhook `Class` Documentation

Information about the Webhook class and what data is required for initiating `requests`.

---

## **`POST`** Requests

### **`CreateHook`** Method

```javascript
// Creating the Webhook class
let webhook = CreateHook(url, username, message, tts, avatar);
```

| Parameters            | Description                                          |
|  :-------------:      |:-------------:                                       |
| `url` (*string*)      | The [Webhook Link](https://support.discordapp.com/hc/en-us/articles/228383668) for a Channel     |
| `username` (*string*) | The Webhook Name (*Your Choice*)                     |
| `message` (*string*)  | The message displayed by the Webhook                 |
| `tts` (*bool*)        | Text-To-Speach                                       |
| `avatar` (*string*)   | Webhook Avatar URL                                   |