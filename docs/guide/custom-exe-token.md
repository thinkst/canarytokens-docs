# Custom EXE Canarytoken

## What is a Custom EXE Canarytoken

This Canarytoken works by signing an EXE or a DLL with a certificate containing a Canarytoken. When the EXE is run, or the DLL is loaded, an alert is fired.

## Creating the Canarytoken

Create a Canarytoken by choosing "Custom exe / binary" from the Canarytokens list.

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken. Then, select the EXE or the DLL to be signed.

The file can now be downloaded. Remember, this Canarytoken is triggered whenever the binary file is executed. For EXEs, this means direct execution and for DLLs, it means they were loaded.

## What to tokenize

When choosing which files to Canarytoken, decide on a few binaries commonly used by attackers, and Canarytoken these.
