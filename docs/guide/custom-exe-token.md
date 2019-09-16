# Custom EXE Token

## What is a Custom EXE Token

This token works by signing an EXE or a DLL with a certificate containing a Canarytoken. When the EXE is run, or the DLL is loaded, an alert is fired.

## Creating the token

Create a token by choosing "Custom exe" from the drop down list.

Leave a reasonable comment to remind yourself where you will deploy the token. Then, select the EXE or the DLL to be signed.

The file can now be downloaded. Remember, this token is triggered whenever the binary file is executed. For EXEs, this means direct execution and for DLLs, it means they were loaded.

## What to tokenize

When choosing which files to token, decide on a few binaries commonly used by attackers, and token these.
