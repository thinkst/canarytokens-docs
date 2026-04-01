# Alerts

## Email

When creating a Canarytoken you'll need to provide an email address so we can let you know when it's been triggered along with other alert details.

## Webhooks

Then there's also an option to add a Webhook Notification, where we'll also post all of the above details to the URL that's provided when a Canarytoken is tripped.

If the URL matches the URL format used for either Slack, Microsoft Teams, Discord or Google Chat webhooks, the payload will be formatted appropriately before being posted. 

### Slack

You'll need to create a Slack App, enable Incoming Webhooks and select a channel to post to in order to get a Slack webhook URL.

An example of a correctly formatted URL is given below:

`https://hooks.slack.com/services/xxx/xxx/xxx`

### Microsoft Teams

The Workflows app in Teams must be used to create a flow with the _When a Teams webhook request is received_ step, which will generate a webhook URL, you can then add another step to select which channel to post to.

An example of a correctly formatted URL is given below:

`https://defaultxxx.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/xxx/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xxx`

### Discord

Open the channel settings and hit **Integrations → Create Webhook** to generate a webhook URL.

An example of a correctly formatted URL is given below:

`https://discord.com/api/webhooks/xxx/xxx`

### Google Chat

Head to the the Chat space’s **Apps & integrations → Add webhooks** settings to generate a webhook URL.

An example of a correctly formatted URL is given below:

`https://chat.googleapis.com/v1/spaces/AAAxxx/messages?key=xxx&token=xxx`


