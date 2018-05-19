// MODULE INIT
var request = require('request'); // Simple HTTP Requests

class Webhook {
    // METHODS
    constructor(url, username, message, tts = false, avatar = null) {
        // VARS
        var data;
        var options;

        this.setupRequest(url, username, message, tts, avatar);
    }

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
        request(this.options, null, (err, res, body) => {
            if (err) {
                console.error('Webhook.js - Error');
                console.error(err);
            } else
                console.log("Webhook.js - Post Successful!");
        });
    }
}

exports.CreateHook = function(url, username, message, tts = false, avatar = null) {
    return new Webhook(url, username, message, tts, avatar);
}



// DEBUG
// var url = ''; // Discord Channel URL
// var avatar = 'https://cdn3.iconfinder.com/data/icons/customer-support-7/32/40_robot_bot_customer_help_support_automatic_reply-512.png';
// var username = 'Webhook BOT';
// var msg = 'Hi I am your Webhook BOT!';

// var web = new Webhook(url, username, msg, false, avatar);
// web.initRequest();