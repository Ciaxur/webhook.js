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
        this.data = {
            username: username,
            content: message,
            avatar_url: avatar,
            tts: tts
        }

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
            } else
                console.log("Webhook.js - Post Successful!");
        });
    }
}

// MODULE EXPORTS
module.exports.Webhook = Webhook;