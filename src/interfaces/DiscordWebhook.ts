/** Discord Data Package 
 * @param username The Username of the Webhook Displayed
 * @param content The Message sent to the Webhook
 * @param avatar_url The URL for the Webhook's Avatar Picture
 * @param tts Text to Speach
 */
interface DiscordData {
    username: string;
    content: string;
    avatar_url: string;
    tts: boolean;
}

/** Request Options
 * @param method Request Method (POST | GET | MODIFY | DELETE)
 * @param body The Body of the Request Package
 * @param json JSON Option
 * @param url Request URL
 */
interface ReqOptions {
    method: string;
    body: {};
    json: boolean;
    url: string;
}