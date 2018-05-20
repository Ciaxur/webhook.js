// Require the webhoo.js Module
const app = require('../app.js').Webhook;

// Required Parameters
let url = '';
let avatar = 'https://cdn3.iconfinder.com/data/icons/customer-support-7/32/40_robot_bot_customer_help_support_automatic_reply-512.png';
let username = 'Webhook BOT';
let msg = 'Hi I am your Webhook BOT!';

// Initiate a Webhook Object
let Web = new app(url, username, msg, false, avatar);
Web.initRequest();