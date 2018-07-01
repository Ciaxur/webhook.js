// MODULE INIT
const request = require('request'); // Simple HTTP Requests


class Webhook {
    // CONSTRUCTORS
    constructor(url, username, message, tts = false, avatar = null) {
        // Initiate Class Variables
        this.data = null;
        this.options = null;

        this.setupRequest(url, username, message, tts, avatar);
    }

    // METHODS
    // Method that sets request data
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

    // Method that initiates request from aquired data
    // Returns a Promise with the response or error
    initRequest() {
        return new Promise((resolve, reject) => {
            // Verify Valid Data
            if (!this.options.url) {
                return reject("Request Initiate Failed! Error: No URL"); // No URL
            } else if (!this.data.username) {
                return reject("Request Initiate Failed! Error: No Username"); // No Username
            } else if (!this.data.content) {
                return reject("Request Initiate Failed! Error: Empty Message"); // No Message
            }

            // Initiate Request
            request(null, this.options, (err, res) => {
                if (err) {
                    return reject(new Error("Request Failed! Error: " + err)); // Request Failure
                }

                if (res.statusCode == 204) {
                    return resolve("Webhook POST Request Success!"); // Webhook Posted!
                } else {
                    return reject("Webhook POST Failed! \nMessage:" + res.statusMessage); // Webhook Failed!
                }
            });
        });
    }
}

// MODULE EXPORTS
module.exports = {
    Webhook
};