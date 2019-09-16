# Adobe PDF Token

## What is an Adobe PDF token

This Canarytoken is a PDF document that will notify you when it has been opened (by reasonably compliant PDF readers). The token works by forcing the PDF reader to do a DNS lookup on a unique address (so we can safely tie the resolution to the opening of the Document).

>**Note**: DNS tokens are great to get a beacon out from a heavily filtered network, but lack the granularity of some other tokens. In this case, the best you can hope for is to be aware that the document was opened, and have a rough idea of the source.
