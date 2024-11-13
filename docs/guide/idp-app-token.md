# Fake IdP SAML App Canarytoken

## What is an IdP SAML2 App Canarytoken

This Canarytoken works by being installed on your Identity Provider SSO dashboard disguised as a normal app. When the app is opened, the Canarytoken sends an alert with the identity of the user whose dashboard it was used from. It can optionally redirect to a specified URL.

## Creating the Canarytoken

Create a Canarytoken by choosing "IdP App" from the Canarytokens list.

If you want the app to redirect to a specific URL, enter it in the "Redirect URL" box

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken (e.g. "Fake Salesforce app on Okta").

Tap the Create Canarytoken" button. For a realistic impersonation, select the app you want to impersonate from the dropdown and download an icon to use on your dashboard. You can do this again in future from the token's management page.

In your Identity Provider admin interface create a new SAML2 app, give it the name and icon of your choice, and use the SAML SSO login URL and entity ID provided to configure your token. The app can now be assigned to your users. We recommend training folks about which apps are tokened.
