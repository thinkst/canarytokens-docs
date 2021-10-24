# SQL Server Token

## What is a SQL Server Token

This token alerts whenever an UPDATE/SELECT/DELETE or INSERT is performed on a specified SQL Server table.

## Creating the token

Create a token by choosing "SQL Server" from the drop down list.

Leave a reasonable comment to remind yourself where you will deploy the token.

Download the SQL script and run it against the SQL Server database of your choice.

>**Note:** Since DNS is used as the underlying transport, the Source IP will be that of a DNS server, not the DB server.
