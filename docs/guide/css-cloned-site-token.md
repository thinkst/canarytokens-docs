# CSS Cloned Website Canarytoken

## What is a CSS Cloned Website Canarytoken

This Canarytoken is placed within either the CSS of your site, or inside a 3rd party site, where you may not be able to add JavaScript and notifies you if someone clones your site and hosts it on another domain. This can alert on targeted or Adversary-in-the-Middle (AitM) phishing attacks.

## Creating a CSS Cloned Website Canarytoken

Create a Canarytoken by choosing "CSS Cloned Website" from the Canarytokens list.

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken. Then, supply the domain that you want to protect (this is the domain where the site is deployed that you will insert your tokenized css into).

You'll get a CSS Snippet similar to:

```
body {
    background: url('https://dakg4cmpuclai.cloudfront.net/<TOKEN>/<URLENCODEDSTRING>/img.gif') !important;
}
```

Upon a client making the request, our CloudFront infrastructure will validate the HTTP Referer header to ensure it is expected. You get an alert if the domain doesn't match the expected domain used during the creation of the Canarytoken.

Ideas for use:

 - Only the `url()` portion is required, you can change the selector and add `opacity: 0` or `display: hidden` if you want to style an invisible element.
 - Use this CSS to style 3rd party authentication pages, such as a [LogTo](https://logto.io) page, or an [AWS Cognito login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-ui-customization.html)
