# MySQL Dump Token

## What is a MySQL Database Dump Token

This token is a sequence of SQL commands that trigger upon being imported or otherwise executed on a MySQL server. These commands can be optionally obfuscated and/or embedded into a fake SQL dump file with synthetic data.


## Creating the token

Create a token by choosing "MySQL Dump" from the drop down list.

Enter your email address or webhook to send alerts to and leave a reasonable comment to remind yourself where you will deploy the token.

You can either copy the generated SQL (encoded or not) into an existing MySQL dump file, or download a randomly-generated one with these commands already embedded.

Leave this token file somewhere with other backups and if an attacker comes across it and imports it to see what it contains you'll be alerted!


