# Windows Directory Token

## What is a Windows Directory Token

This token allows you to get a notification when someone browses to a “token’d" directory on a Windows server or machine.

## Creating the token

Create a token, by choosing “Windows Directory Browsing" from the drop down list.

Leave a reasonable comment to remind you where you will deploy the token and then download the generated file.

This offers you a download of a desktop.ini file (inside of a zip file). Simply create a folder on a Windows machine of your choice, and place the desktop.ini file in it. If an attacker browses that directory, you will get your console alert.

(WinZIP and WinRAR both maintain directory structures and honour desktop.ini – you can download a Zip file with the desktop.ini already packaged after you generate your token, and you'll get notified if someone opens (expands) the Zip file.)

## How this works

Dropping a desktop.ini file in a folder allows Explorer to set a custom icon for a file. Since this icon can reside on a remote server (via a UNC path), using DNS we can effectively make use of a token as our icon file.
