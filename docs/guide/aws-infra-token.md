# AWS Infrastructure Canarytoken

## What is the AWS Infrastructure Canarytoken

The AWS Infrastructure Canarytoken allows you to add multiple decoy resources inside your AWS account. Currently, the types of resources supported are: Dynamo DB Tables, S3 Buckets, Secrets Manager Secrets, SSM Parameters and SQS Queues. When an attacker interacts with any of these decoys, you'll be alerted.

During the setup of the AWS Infrastructure Canarytoken a generated list of suggested resource names will be provided to you, these are based off of the names of the resources currently inside your AWS account. At the end of the setup, you'll be given a terraform module snippet which you can paste into your existing terraform configuration (or a new project). Run `terraform init` followed by `terraform apply`and the decoy resources will be added to your AWS account. 

If you would like to read more about the AWS Infrastructure Canarytoken, check out our [blog post](https://blog.thinkst.com/2025/09/introducing-the-aws-infrastructure-canarytoken.html).



## Creating an AWS Infrastructure Canarytoken

Create a Canarytoken by choosing "AWS Infrastructure Canarytoken" from the list.

Enter the AWS Account ID and AWS region where you would like the decoys to be created. You can have one AWS Infrastructure Canarytoken per account per region. 

The setup wizard will then guide you through the rest of the steps. You'll be able to edit the decoys again — even after they've been created in your AWS account. You simply have to redownload the terraform module with `terraform init --upgrade`.

Once you're decoys have been added to your account and anyone interacts with them, you'll be notified.
