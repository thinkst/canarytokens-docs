# MCP Configuration Canarytoken

## What is an MCP Canarytoken

This Canarytoken provides you with a JSON configuration for an MCP server. An attacker who stumbles on them will believe they provide agentic access to cloud infrastructure or other sensitive tools. You will be alerted either on an MCP client connection, or when the client calls an offered tool, depending on the token's configuration.

## Creating the Canarytoken

Create a Canarytoken by choosing "MCP configuration" from the Canarytokens list.

Choose how you'd like the token to alert, either on an MCP client connecting to the server, or only when an MCP tool has been called.

Leave a reasonable comment to remind yourself where you will deploy the Canarytoken.

The JSON configuration that is displayed can be copied or downloaded into a file named `mcp.json`. These files are commonly found in
 code repositories in sub-directories that contain toolchain configurations. Common examples would be `.claude/`, or `.cursor/`. VSCode will look for a file named `.mcp.json` (note the prepended '.') in the root of a workspace.



