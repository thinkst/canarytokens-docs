# Azure Login Certificate Canarytoken

## What is the Azure Login Certificate Canarytoken

The Azure Login Certificate Canarytoken provides you with a valid config and login certificate. Leave them in private code repositories, leave them on a developer's machine. An attacker who stumbles on them will believe they are the keys to your Azure cloud infrastructure. If they are used to login to Azure at any point, you will be alerted.

The great thing is that you don't need Azure in your environment to use this token, and there’s no way for an attacker to use it without setting off an alert.

## Creating an Azure Login Certificate Canarytoken

Create a token by choosing "Azure Login Certificate Canarytoken" from the list.

Pick a plausible Azure ID certificate name, like `Code_Sign_Server_3.pem`.

Leave a comment to remind yourself where/which tenant you will deploy the token.

If it's ever used, we'll notify you.
