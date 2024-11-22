# Windows Fake File System

## What is a 

Have you ever wanted to create a fake list of sensitive files and get an alert if one of those files is opened or copied?

This simple Canarytoken allows you to set up a fake directory, with context specific file names and extensions.

This Canarytoken uses the built in Windows Projected File System, to create and monitor a path.

This is done with a PowerShell script behind the scenes.


## Creating a Windows Fake File System Canarytoken

Head on over to [canarytokens.org](https://canarytokens.org/generate) and select `Windows Fake File System`:

![Uploading image.png…]()


Enter the Path for your folder, email address, or webhook address along with a reminder that will be easy to understand.

Then click Create:

[Screen Shot]

Download the .reg file to a Windows system.

[Screen Shot]

In an admin command shell, import the downloaded registry file by running the reg import command twice. The first time to insert registry keys to monitor 64-bit process executions and second time for 32-bit:

```
Ensure You Run This As Administrator  
Ensure you allow PowerShell Scripts. 

When you are ready to remove this token. As Administrator, simply run.

tokenfilename.ps1 -Remove

```

## How to use this Canarytoken

Once this token is installed. It will create and start a Scheduled Task spawn the Windows Fake File System Provider.

You can browse to this folder and list files.  This will not trigger an alert. 

If an attacker open or copies a file, then you will get an alert that lets you know the process and file that was accessed. 

