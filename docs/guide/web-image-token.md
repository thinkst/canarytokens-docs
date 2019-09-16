# Web Image Token

## What is a Web Image Token

This token works much like the default HTTP token, but allows you to bind the token to an image of your choosing. i.e. upload an image to your server. The server will serve this image to people, and will notify you when it does.

## Creating the token

Create a token by choosing "Custom Image Web bug" from the drop down list.

Leave a reasonable comment to remind yourself where you will deploy the token.

This token is now a valid link to the image you uploaded.

## How to use this token

A trick is to embed this image in an admin page for example. An attacker accessing the page will also load the image, sending you your notification that the page has been accessed.

**Bonus**
If your site actually is used for phishing attacks, you will be notified for every user who loads the “malicious page" - This is great news, since it will often help with targeted Incident Response.
