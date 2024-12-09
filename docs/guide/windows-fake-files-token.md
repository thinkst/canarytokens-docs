# Windows Fake File System

## What is a Fake File System

Have you ever wanted to create a fake list of sensitive files and receive an alert if one of them is opened or copied?

This simple Canarytoken allows you to set up a fake directory, with context-specific file names and extensions.

This Canarytoken uses the built-in Windows Projected File System, to create and monitor a path.

This is done with a PowerShell script behind the scenes.


## Creating a Windows Fake File System Canarytoken

Head on over to [canarytokens.org](https://canarytokens.org/generate) and select `Windows Fake File System`:

![image](https://github.com/user-attachments/assets/e5e85422-aff6-4b19-aec8-55034c5f5a9d)


Enter the Path for your folder, email address, or webhook address along with a reminder that will be easy to understand.

Then click Create:

<img width="707" alt="image" src="https://github.com/user-attachments/assets/8f595680-33e6-4957-be02-879193b6905c">


Download the .ps1 file to a Windows system. You need to execute this as an Administrator. This installs the Windows Projected File System and creates the scheduled task.



## How to use this Canarytoken

Once this token is installed, it will create and start a Scheduled Task to spawn the Windows Fake File System Provider.

You can browse to this folder and list files.  This will not trigger an alert. 

If an attacker opens or copies a file, then you will get an alert that lets you know the process and file that was accessed. 

If you would like to remove the task, simply run the PowerShell script again with `-Remove`. This will stop the process managing the folder and remove any artifacts created.


