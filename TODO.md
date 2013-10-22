TO DO
======
Things that need fixin' and / or doin'.

Script
------
* HTML qualifier is not as good as it could be. Often misses chunks of articles.
* Dealing with image captions is a pain, and is erratic. Make better?
* Fix multiple insertions of identical Google Font stylesheet links when applying Readable to a page multiple times.
* Combine multiple Google Font stylesheet requests into a single one, to reduce network calls.

* Finish updating links on configuration page to point to local copies of FAQ and About.
* Add embed configuration page.
* Make configuration page parse GET variables via JavaScript, for completely static, easy to host anywhere-ability.
* Consolidate script configuration (base URLs, etc) into one location.
* Update embedded HTML for embed in bulk-[timestamp].js. 
    * Retain link to original source, add author's name & link to cc license to comply with cc-by-nc-sa license.
* log.js is a stub, and does not actually do anything. Looks like it is used for tracking / stats parsed from server logs. Perhaps remove calls to it.
* Perhaps add Google Font API support to dynamically query available fonts in setup page / allow any valid Google Font in custom font box.
* Italicize `<figcaption>`, `<label>`(?), `<cite>`(?)  to differentiate from main content. 
* Perhaps remove content in `<aside>` tags. The Atlantic uses it for pullquotes.
* Ibid `<q>` tags - Polygon, The Verge use them for pullquotes.
* General HTML 5 tag updates.


Broken Sites
------------
* polygon.com (Features category)
    * Sometimes only grabs 2nd section of content, misses rest.
    * <label> used to mirror section headers, shows up before the <h2>
* theverge.com (Longform/Features category)
    * Often misses first sections of content, grabbing 2nd / 3rd only.
    * Sometimes includes "Follow on Twitter" section.
