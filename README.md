# webhook.js

[![Travis Build Status](https://travis-ci.org/Ciaxur/webhook.js.svg?branch=master)](https://travis-ci.org/Ciaxur/webhook.js)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Ciaxur/webhook.js/master/LICENSE)

**A simple JavaScript module used for POST requests to a Discord channel.**

The Module Dependencies used:
- `request` - A simplified HTTP client.

---

## How To Use

In order to run **webhook.js**, you will need to have `npm` and `node` installed. These are instructions on how to obtain and get application ready:

```bash
# Clone this repository
git clone https://github.com/Ciaxur/webhook.js
# Install dependencies
npm install
# Build the App
npm build
```

Note: As of the current version of this module, you will need to hard-code in multiple variables for the Webhook to post.

### `npm` Commands

Simple npm commands to run the application easier:

```bash
# Install Required Modules
npm install

# Build src Files
npm run build

# Testing (Using Jest)
npm test
```

### `Webhook` Class

Javascript class mini-documentation:

```javascript
// Webhook Class Initation Requirements
const webhook = new Webhook(url, username, msg, avatar_url, ttl);

// Initiating the Webhook Request
webhook.initRequest();
```

More information about the `Webhook Class` can be found in the [Documentation](docs/WebhookClass.md) file.

More information about the `JSON Form` for excecuting can be found in [Discord's Webhook Documentation](https://discordapp.com/developers/docs/resources/webhook#execute-webhook).

---

## Contribution

If you are willing to contribute to the project, please make sure to check out the available links below.

- [How to Contribute](CONTRIBUTING.md)
- [Task List](docs/TaskList.md)

---

## License

Licensed under the [MIT License](LICENSE.md).
