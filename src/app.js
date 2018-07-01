// MODULE INIT
const request = require('request'); // Simple HTTP Requests

/**
 * Main Webhook Class
 * 
 * Creates a Webhook and Initiates a POST Request
 *      Returns a Promise with Errors and Responses
 */
class Webhook {
    /** Constructs Main Webhook 
     * @param {String} url Webhook URL to POST to
     * @param {String} username Username displayed
     * @param {String} message Message to be Posted
     * @param {Boolean} tts Text to Speach (Optional)
     * @param {String} avatar Avatar Image URL (Optional)
     */
    constructor(url, username, message, tts = false, avatar = null) {
        // Initiate Class Variables
        this.data = null;
        this.options = null;

        this.setupRequest(url, username, message, tts, avatar);
    }

    // METHODS
    /** Method that sets request data
     * @param {String} url Webhook URL to POST to
     * @param {String} username Username displayed
     * @param {String} message Message to be Posted
     * @param {Boolean} tts Text to Speach (Optional)
     * @param {String} avatar Avatar Image URL (Optional)
     */
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

    /** Initiates request from aquired data
     * @returns A Promise with the response or error
     */
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

// Module Export
module.exports = {
    Webhook
};