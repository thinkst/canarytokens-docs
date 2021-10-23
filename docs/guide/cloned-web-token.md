# Cloned Website Token

## What is a Cloned Website Token

This Canarytoken is placed within the JavaScript of your websites and notifies you if someone clones your site and hosts it on another domain. (This is often used for targeted Phishing attacks.)

## Creating a Cloned Website token

Create a token by choosing "Cloned Website" from the drop down list.

Leave a reasonable comment to remind yourself where you will deploy the token. Then, supply the domain that you want to protect (this is the domain where the site is deployed that you will insert your tokenized javascript into).

You'll get javascript similar to:

```javscript
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
