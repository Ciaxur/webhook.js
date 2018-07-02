/**
 * Required Modules
 * 
 * request Module - Used for Simple HTTP Requests
 */
import * as request from 'request';


/** Main Webhook Class
 * 
 * Creates a Webhook and Initiates a POST Request
 *      Returns a Promise with Errors and Responses
 */
export class Webhook {
    /** Private Variables */
    private data: DiscordData;
    private options: ReqOptions;


    /** Constructs Main Webhook 
     * @param url Webhook URL to POST to
     * @param username Username displayed
     * @param message Message to be Posted
     * @param tts Text to Speach (Optional)
     * @param avatar Avatar Image URL (Optional)
     */
    constructor(url: string, username: string, message: string, avatar?: string, tts?: boolean) {
        // Initiate Class Variables
        this.setupRequest(url, username, message, avatar, tts);
    }

    /** Method that sets request data
     * @param url Webhook URL to POST to
     * @param username Username displayed
     * @param message Message to be Posted
     * @param tts Text to Speach (Optional)
     * @param avatar Avatar Image URL (Optional)
     */
    public setupRequest(url: string, username: string, message: string, avatar?: string, tts?: boolean) {
        // Setup data Object        
        this.data = {
            username,
            content: message,
            avatar_url: avatar,
            tts
        };

        // Setup options Object
        this.options = {
            method: 'POST',
            body: this.data,
            json: true,
            url
        };
    }

    /** Initiates request from aquired data
     * @returns A Promise with the response or error
     */
    public initRequest() {
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

                if (res.statusCode === 204) {
                    return resolve("Webhook POST Request Success!"); // Webhook Posted!
                } else {
                    return reject("Webhook POST Failed! \nMessage:" + res.statusMessage); // Webhook Failed!
                }
            });
        });
    }
}
