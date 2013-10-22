readable
========
Fork of http://readable.tastefulwords.com/ by Gabriel Coarna, licensed [cc-by-nc-sa-3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/).

Changes
-------
* All absolute URLs are now protocol-agnostic.
* Absolute URLs $R.path and $R.linksPath in target.js need to be updated to point to the server the script and config page are hosted, respectively.
* Bookmarklet configuration page has been cloned and modified to remove example images and add license information. It also defaults to showing the "configuration overlay".
* Configuration page GET parsing now works for the "change style" link at bottom of Readable overlay; PHP is required on the server for this to work.
* Using the "Browser Default" base style no longer tries to fetch a non-existant stylesheet.
* Added attribution and license info to displayed footer when invoked via bookmarklet.
* "Report bug" link now points to github issue tracker.

Configuration
-------------
target.js and index.php contain "base URL" variables. Update these to point to where you have placed Readable.

If you are capable of serving the files via http and https, use `"//"` as the protocol; Otherwise, use `"http://"`.

The default `"//example.com/readable"` assumes that you've placed a copy of this project in `/readable` on your server `example.com`, and that you can serve files securely.

It is possible to separate the configuration page from the assets. In target.js the assets (.css, .js, etc) will be accessed via `$R.path`, the configuration page via `$R.linksPath`. In index.php, `$baseURL` should be the same as `$R.path` in target.js. 

