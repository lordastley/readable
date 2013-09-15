readable
========
Fork/backup of http://readable.tastefulwords.com/ cc-by-nc-sa-3.0

All absolute URLs are now protocol-agnostic.

Absolute URLs $R.path and $R.linksPath in target.js need to be updated to point to the server the script and config page are hosted, respectively.


TODO
====
* Add configuration page.
* Make configuration page standalone.
    * Either reverse engineer based on output from original, or ask original author for sauce.
    * Fix "update style" url parsing for quoted parameters. (Currently wrapped in quote(Thing) - existing parser does not change this to "Thing")
* Consolidate script configuration into one location.
* Update embedded HTML in bulk-[timestamp].js. (Retain link to original source/author to comply with cc-by license.)
* log.js is a stub, and does not actually do anything. Perhaps remove calls to it.
* Remove hit/fetch on non-existant browser base CSS file, when selected.
