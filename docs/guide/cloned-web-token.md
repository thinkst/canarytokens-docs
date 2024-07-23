# Cloned Website Canarytoken

## What is a Cloned Website Canarytoken

This Canarytoken is placed within the JavaScript of your websites and notifies you if someone clones your site and hosts it on another domain. (This is often used for targeted Phishing attacks.)

## Creating a Cloned Website Canarytoken

Create a Canarytoken by choosing "JS Cloned Website" from the Canarytokens list.

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken. Then, supply the domain that you want to protect (this is the domain where the site is deployed that you will insert your tokenized javascript into).

You'll get javascript similar to:

```javascript
if (document.domain != "thinkst.com") {
    var l = location.href;
    var r = document.referrer;
    var m = new Image();
    m.src = "http://canarytokens.com/"+
            "<TOKEN>.jpg?l="+
            encodeURI(l) + "&amp;r=" + encodeURI(r);
}
```

Copy the javascript (optionally run through an [obfuscator](https://www.google.com/search?q=JavaScript+Obfuscator)) onto the pages of the website deployed at the specified domain.
