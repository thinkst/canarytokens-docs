# SVN Canarytoken

## What is an SVN Canarytoken

This Canarytoken alerts whenever anyone attempts to clone an SVN repository.

## Creating the Canarytoken

Create a Canarytoken by choosing "SVN" from the Canarytokens list.

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken.

Run the command to Canarytoken a repository of your choosing. Don't forget to

```bash
svn commit
```

after you've added the Canarytoken.

## What to tokenize

A few ideas for use include: Canarytoken a dummy SVN repo to detect when attackers are enumerating repos; or an old repo which shouldn't be touched any longer.
