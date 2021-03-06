# Task List

**Program future fixes and updates:**

## Version 1.1.2 (*Upcoming*)
- [ ] Reorganize Class
    - [ ] More meaningful Function Names
    - [ ] Better Class Name
    - [ ] Seperate Child Classes for Specific Webhooks
    - [ ] Modify main **`Webhook`** Class to be an *Abstract* Class Type

## Version 1.1.1
- [x] Translate Entire Github Repo to **`TypeScript`**
    - [x] Add Directories for Compiled Outputs called **`out`**
    - [x] Exclude all Files in the **`out`** directory as it is ONLY for compilation purposes
    - [x] Adapt **`TSLint`** Config

## Version 1.1
- [x] Add more **`Jest`** Tests
    - [x] Failure Tests
- [x] Add **`Jest`** for project testing
- [x] Re-Organize project directory
- [x] Convert to **`Promise`** based requests
- [x] Add Better Class Initiation Feature
    - Remove the exported **`CreateHook`** method
    - Export the **`Webhook`** Class (*variable = new Webhook(`args`)*)
- [x] Improve the [Webhook Documentation](WebhookClass.md)
    - [x] Add **`Method`** Details
- [x] Add Detailed Description Comments
- [x] Data Error Handle
    - [x] Invalid URL Handling
- [x] Add webhook.js to **`npm`**

---

## Version 1.0.5
- [x] Add to GitHub
- [x] Organize Filing System
- [x] Patch Webhook Bug
    - *Error occurs when initiating request*
