# Azure Entra ID login token

## What is the Azure Entra ID login token

This Canarytoken is installed into the Company Branding portion of your Azure tenant's Entra ID (formerly Azure AD) settings. This is then loaded by
clients via CSS when they log into the tenant. If the referring hostname is not a Microsoft domain, then it will alert on a potential Adversary-in-the-Middle (AitM) phishing attack.

## Creating an Entra ID login token

Create a token by choosing "Azure Entra ID login" from the dropdown list.

Leave a reasonable comment to remind yourself where/which tenant you will deploy the token.

Upon a client making the request, our CloudFront infrastructure will validate the HTTP Referer header to ensure it is expected. You get an alert if the domain doesn't match one of those that Microsoft uses for login handling.

Then select either the automated installer, which will open a new tab and redirect you to login to your tenant with administrator privileges
to grant temporary permissions to our automatic installer. Or follow the manual steps to upload the CSS file generated to your tenant. Microsoft
provides [more detailed instructions](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-customize-branding#how-to-navigate-the-company-branding-process) on installing the custom branding.

