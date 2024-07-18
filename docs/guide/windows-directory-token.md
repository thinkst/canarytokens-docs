# Windows Directory Canarytoken

## What is a Windows Directory Canarytoken

This Canarytoken allows you to get a notification when someone browses to a “Canarytoken’d" directory on a Windows server or machine.

## Creating the Canarytoken

Create a Canarytoken, by choosing “Windows Directory Browsing" from the Canarytokens list.

Leave a reasonable comment to remind you where you will deploy the Canarytoken and then download the generated file.

This offers you a download of a desktop.ini file (inside of a zip file). Simply create a folder on a Windows machine of your choice, and place the desktop.ini file in it. If an attacker browses that directory, you will get your console alert.

(WinZIP and WinRAR both maintain directory structures and honour desktop.ini – you can download a Zip file with the desktop.ini already packaged after you generate your Canarytoken, and you'll get notified if someone opens (expands) the Zip file.)

## How this works

Dropping a desktop.ini file in a folder allows Explorer to set a custom icon for a file. Since this icon can reside on a remote server (via a UNC path), using DNS we can effectively make use of a Canarytoken as our icon file.
