# Sensitive Command Token

## What is a Sensitive Command token

Have you ever wanted a quick alert if an unexpected Windows process runs on a host?

This simple Canarytoken allows you to set up a quick alert when you want to know any time a specific command is executed.

This token creates a registry key and sends an alert to you in near real-time that the command of interest had been executed.


## Creating a Sensitive Command token

Head on over to [canarytokens.org](https://canarytokens.org/generate) and select `Sensitive command token`:

<img width="683" alt="image" src="https://user-images.githubusercontent.com/110428675/188695846-f0941a65-acc2-4693-8c5b-0e8e2a3d9c06.png">

Enter your email address, or webhook address along with a reminder that will be easy to understand, as well as the name of the program you want to alert on.

then click Create:

<img width="623" alt="image" src="https://user-images.githubusercontent.com/110428675/188696025-b866f09a-29bd-48e8-b4fc-628f7e8ccb2c.png">


Download the .reg file and an install it on a Windows 10 or Windows 11 system. 

<img width="656" alt="image" src="https://user-images.githubusercontent.com/110428675/188696150-1159b2cd-2e10-469f-8099-bfeebb74ce38.png">


You can do this from an Administrative Command Shell.

`reg import <filepath\filename.reg>`

## How to use this token 

Once installed (with admin permissions) you'll get an alert whenever someone (or someone's code) runs your sensitive process. It will automatically provide the command used, computer the command ran on, and the user invoking the command.

Ideas for use:

Ideal candidates are executables often used by attackers but seldom used by regular users (e.g., whoami.exe, net.exe, wmic.exe, etc.).

You can use this for attacker tools that are not present on your system (e.g., mimikatz.exe), and if they are ever downloaded and run you'll get an alert!

Use a network management tool to deploy across your organization.

The alert will display the username and the hostname the command was executed on.

