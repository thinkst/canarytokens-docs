# SVN Token

## What is an SVN Token

This token alerts whenever anyone attempts to clone an SVN repository.

## Creating the token

Create a token by choosing "SVN" from the drop down list.

Leave a reasonable comment to remind yourself where you will deploy the token.

Run the command to token a repository of your choosing. Don't forget to

```bash
svn commit
```

after you've added the token.

## What to tokenize

A few ideas for use include: token a dummy SVN repo to detect when attackers are enumerating repos; or an old repo which shouldn't be touched any longer.
