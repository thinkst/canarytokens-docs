# CSS Cloned Website Token

## What is a CSS Cloned Website Token

This Canarytoken is placed within either the CSS of your site, or inside a 3rd party site, where you may not be able to add JavaScript and notifies you if someone clones your site and hosts it on another domain. (This is often used for targeted or Adversary in The Middle (Reverse Proxy) Phishing attacks.

## Creating a CSS Cloned Website Token

Create a token by choosing "CSS Cloned Website" from the drop down list.

Leave a reasonable comment to remind yourself where you will deploy the token. Then, supply the domain that you want to protect (this is the domain where the site is deployed that you will insert your tokenized css into).

You'll get CSS Snippet similar to:

```

body {
    background: url('https://dakg4cmpuclai.cloudfront.net/<TOKEN>/ZXhhbXBsZS5jb20%3D/img.gif') !important;
}

```

Upon your site making the request, our CloudFront Function will validate the Referring HTTP header to ensure it is expected. You get an alert if the domain doesn't match the expected domain used during the creation of the token.

Ideas For Use:

Only the url() portion is required, you can change the selector and add opacity: 0 if you want to style an invisible element.

