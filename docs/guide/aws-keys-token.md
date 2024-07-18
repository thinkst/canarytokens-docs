# AWS API Keys Canarytoken

## What is an AWS API Keys Canarytoken

This Canarytoken provides you with a set of AWS API keys. Leave them in private code repositories, leave them on a developers machine. An attacker who stumbles on them will believe they are the keys to your cloud infrastructure. If they are used via the AWS API at any point, you will be alerted.

## Creating the Canarytoken

Create a Canarytoken by choosing "AWS Keys" from the Canarytokens list.

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken.

The AWS credentials that are displayed can be copied into a file named credentials or keys (as per AWS custom). The two provided keys must be kept together for an attacker to use the AWS API.

The file downloaded contains the AWS API credentials linked to your Canarytoken. The file is formatted such that it looks like a legitimate AWS credentials file.

>**Note:** These alerts first pass through Amazon's logging infrastructure which may introduce a delay of between 2 and 30 minutes before the alert comes through.
