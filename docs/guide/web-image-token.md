# Web Image Canarytoken

## What is a Web Image Canarytoken

This Canarytoken works much like the default HTTP Canarytoken, but allows you to bind the Canarytoken to an image of your choosing. i.e. upload an image to your server. The server will serve this image to people, and will notify you when it does.

## Creating the Canarytoken

Create a Canarytoken by choosing "Web Image" from the Canarytokens list.

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken.

This Canarytoken is now a valid link to the image you uploaded.

## How to use this Canarytoken

A trick is to embed this image in an admin page for example. An attacker accessing the page will also load the image, sending you your notification that the page has been accessed.

**Bonus**
If your site actually is used for phishing attacks, you will be notified for every user who loads the “malicious page" - This is great news, since it will often help with targeted Incident Response.
