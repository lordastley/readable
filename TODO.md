# TO DO
Things that need fixin' and / or doin'.

## Script
### Config
* Finish updating links on configuration page to point to local copies of FAQ and About.
* Make configuration page parse GET variables via JavaScript, for completely static, easy to host anywhere-ability.
* Consolidate script configuration (base URLs, etc) into one location.
* Add embed configuration page.
* Update embedded HTML for embed in bulk-[timestamp].js. 
    * Retain link to original source, add author's name & link to cc license to comply with cc-by-nc-sa license.
* Add color picker for custom colors? 
* Perhaps add Google Font API support to dynamically query available fonts in setup page / allow any valid Google Font in custom font box.
    * Improve "freeform" font field with some sort of dynamically populated autocomplete.

### Styling
* Fix multiple insertions of identical Google Font stylesheet links when applying Readable to a page multiple times.
* Combine multiple Google Font stylesheet requests into a single one, to reduce network calls.
* Italicize `<figcaption>`, `<label>`(?), `<cite>`(?)  to differentiate from main content. 

### Content finding
* Dealing with image captions is a pain, and is erratic. Make better?
* Re-work content qualifier to: 
    * weight `<article>` more heavily (or at all?)
    * Investigate other HTML 5 semantic tags; more sites are using them now (and the qualifier's from 2011 [and doesn't include said tags])
    * look inside tags for content, as some sites use multiple layers of markup for content (eg: `<article><div><p><p> etc.`)
    * Stop including pull quotes (easier said than done)
        * `<div>`
        * `<q>` (Polygon, The Verge)
        * `<aside>` (The Atlantic)
        * `<blockquote><p>` (Engadget, although these actually look OK)
        * `<table>` (Aljazeera)
    * Use `instapaper_body` class as a heuristic for content, since some sites use it to point out the main content to instapaper.
* Auto-paginate?

### Misc.
* log.js is a stub, and does not actually do anything. Looks like it is used for tracking / stats parsed from server logs. Perhaps remove calls to it / make calls optional.


## Broken Sites
### Fixed for now in target.js w/ custom selector
* polygon.com (Features category)
    * Sometimes only grabs 2nd section of content, misses rest.
    * `<label>` used to mirror section headers, shows up before the `<h2>` in parsed content
* theverge.com (Longform/Features category)
    * Often misses first sections of content, grabbing 2nd / 3rd only.
    * Sometimes includes "Follow on Twitter" section.
* reddit self-posts
    * If a self-post is short, qualifier will grab lengthiest comment instead.

### Not fixed    
* america.aljazeera
    * Doesn't always grab entire article - asides/related blocks trigger this
