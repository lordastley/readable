readable
========
Fork/backup of http://readable.tastefulwords.com/ by Gabriel Coarna, licensed [cc-by-nc-sa-3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/).

Changes
-------
* All absolute URLs are now protocol-agnostic.
* Absolute URLs $R.path and $R.linksPath in target.js need to be updated to point to the server the script and config page are hosted, respectively.
* Bookmarklet configuration page has been cloned and modified to remove example images and add license information. It also defaults to showing the "configuration overlay".
* Configuration page GET parsing now works for the "change style" link at bottom of Readable overlay; PHP is required on the server for this to work.

Configuration
-------------
target.js and index.php contain "base URL" variables. Update these to point to where you have placed Readable.

If you are capable of serving the files via http and https, use "//" as the protocol; Otherwise, use "http://".

The default "//example.com/readable" assumes that you've placed a copy of this project in /readable on your server, and that you can serve files securely.

It is possible to separate the configuration page from the assets. In target.js the assets (.css, .js, etc) will be accessed via $R.path, the configuration page via $R.linksPath. In index.php, $baseURL should be the same as $R.path in target.js. 

TODO
----
* Finish updating links on configuration page to point to local copies of FAQ and About.
* Add embed configuration page.
* Make configuration page parse GET variables via JavaScript, for completely static, easy to host anywhere-ability.
* Consolidate script configuration (base URLs, etc) into one location.
* Update embedded HTML in bulk-[timestamp].js. 
    * Retain link to original source, add author's name & link to cc license to comply with cc-by-nc-sa license.
    * Update problem report link to point to github issues tracker.
* log.js is a stub, and does not actually do anything. Looks like it is used for tracking / stats parsed from server logs. Perhaps remove calls to it.
* Remove hit/fetch on non-existant browser base CSS file, when selected.
* Combine multiple Google Font stylesheet requests into a single one, to reduce network calls.
* Perhaps add Google Font API suport to dynamically query available fonts in setup page / allow any valid Google Font in custom font box.
