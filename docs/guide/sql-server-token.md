# SQL Server Canarytoken

## What is a SQL Server Canarytoken

This Canarytoken alerts whenever an UPDATE/SELECT/DELETE or INSERT is performed on a specified SQL Server table.

## Creating the Canarytoken

Create a Canarytoken by choosing "SQL Server" from the Canarytokens list.

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken.

Download the SQL script and run it against the SQL Server database of your choice.

>**Note:** Since DNS is used as the underlying transport, the Source IP will be that of a DNS server, not the DB server.
