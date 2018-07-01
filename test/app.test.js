// Import required modules
const {
    Webhook
} = require("../src/app");

// INIT VARS
const CUSTOM_URL = "";                                          // Used if Testing Locally
const WEBHOOK_URL = process.env.webhook_url || CUSTOM_URL;      // Obtain URL from Enviroment Varibales
let avatarURL = "https://goo.gl/GJdcRq";                        // Avatar Shortened URL


/**
 * Webhook Request Testing
 * After Initiating a Request to a valid Webhook URL, request should return
 *      a sucessful result.
 * 
 * 
 * Will Cause a JEST Error if ran using NODE.js because of the "expect.assertions"
 *      This is for the use of Travis CI
 */
test("Webhook Initiate Request", () => {
    let hook = new Webhook(WEBHOOK_URL, "WEBHOOK BOT", "This is a Jest Test", false, avatarURL);

    // ONLY IN TRAVIS CI
    if (!CUSTOM_URL) {
        expect.assertions(1);
    }
    

    return hook.initRequest()
        .then(res => expect(res).toEqual("Webhook POST Request Success!"));
});


/**
 * Webhook No URL Error
 * If there was no URL specified, error should occur on Request Initiation
 * Retruns a Promise Error "Request Initiate Failed! Error: No URL"
 */
test("Webhook No URL Error", () => {
    let hook = new Webhook();       // No URL Given

    return hook.initRequest()
        .catch(err => expect(err).toEqual("Request Initiate Failed! Error: No URL"));
});


/**
 * Webhook No Username Error
 * If there no Username was sepecified, error shoudl occur on Request Initiation
 * Returns a Promise Error "Request Initiate Failed! Error: No Username"
 */
test("Webhook No Username Error", () => {
    let hook = new Webhook(WEBHOOK_URL);       // No Username Given

    return hook.initRequest()
        .catch(err => expect(err).toEqual("Request Initiate Failed! Error: No Username"));
});


/**
 * Webhook No Username Error
 * If there no Username was sepecified, error should occur on Request Initiation
 * Returns a Promise Error "Request Initiate Failed! Error: Empty Message"
 */
test("Webhook No Message Error", () => {
    let hook = new Webhook(WEBHOOK_URL, "WEBHOOK BOT");       // No Username Given

    return hook.initRequest()
        .catch(err => expect(err).toEqual("Request Initiate Failed! Error: Empty Message"));
});


/**
 * Request Fail Error
 * If there is a URL Request Error, an Error Object should be returned
 */
test("Request Error", () => {
    let hook = new Webhook("someErrorURL", "Valid User", "Valid Message");

    return hook.initRequest()
        .catch(err => expect(err instanceof Error).toEqual(true));
});