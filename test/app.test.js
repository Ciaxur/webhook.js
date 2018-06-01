// Import required modules
const {
    Webhook
} = require("../src/app");

// INIT VARS
const WEBHOOK_URL = process.env.webhook_url; // Obtain URL from Enviroment Varibales
let avatarURL = "https://goo.gl/GJdcRq"; // Avatar Shortened URL


test("Webhook Initiate Request", () => {
    let hook1 = new Webhook(WEBHOOK_URL, "WEBHOOK BOT", "This is a Jest Test", false, avatarURL);
    expect.assertions(1);

    return hook1.initRequest()
        .then(res => expect(res).toEqual("Success!"));
});