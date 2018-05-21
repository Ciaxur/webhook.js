// MODULE INIT
var request = require('request'); // Simple HTTP Requests


class Webhook {
    // Constructors
    constructor(url, username, message, tts = false, avatar = null) {
        // VARS
        var data;
        var options;

        this.setupRequest(url, username, message, tts, avatar);
    }

    // Methods
    setupRequest(url, username, message, tts = false, avatar = null) {
        // Setup data Object
        this.data = {
            username: username,
            content: message,
            avatar_url: avatar,
            tts: tts
        }

        // Setup options Object
        this.options = {
            method: 'POST',
            body: this.data,
            json: true,
            url: url
        };
    }

    initRequest(callback_func) {
        request(null, this.options, (err, res, body) => {
            if (err) {
                console.error('Webhook.js - Error');
                console.error(err);
            } else {
                console.log("Webhook.js - Post Successful!");

                // Call callback_func on Success
                if (callback_func)
                    callback_func();
            }
        });
    }
}

// MODULE EXPORTS
module.exports.Webhook = Webhook;