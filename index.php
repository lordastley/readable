<?php
/***********************************************************
 * Quick n' dirty URL parser for the config page.
 * lordastley 9/13/13
 **********************************************************/

// url where target.js can be found. placed here for simpler configuration.
$baseURL = "//example.com/readable/";


// Yo dawg, I heard you like arrays so I put arrays in yo' arrays
// so you can dereference while you dereference.

// script parameters 
$params = array(
    'text_font' => array(
        'custom' => TRUE,
        'values' => array(
            '"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif', //Palatino / Book Antigua / Georgia
            '"Times New Roman", Times, serif', //Times New Roman / Times
            'Verdana, Geneva, sans-serif', //Verdana / Geneva
            'Helvetica, "Helvetica Neuve", Arial, Tahoma, sans-serif', //Helvetica / Arial / Tahoma
        //    '-sep1', // invalid
            '"Crimson Text"', //Crimson Text
            '"Droid Serif"', //Droid Serif
            'Tinos', //Tinos
            'Neuton', //Neuton
            'Vollkorn', //Vollkorn
            'Cardo', //Cardo
            'Bentham', //Bentham
        //    '-sep2', //invalid
            'Cantarell', //Cantarell
            '"Droid Sans"', //Droid Sans
            'Molengo', //Molengo
            'Allerta', //Allerta
            'Ubuntu', //Ubuntu
        //    '-sep3', //invalid
            'Inconsolata', //Inconsolata
            '"Droid Sans Mono"', //Droid Sans Mono
        //    '-sep-custom', //invalid
        //    'custom', //» custom
        ),
    ),

    'text_font_monospace' => array(
        'custom' => TRUE,
        'values' => array(
            '"Courier New", Courier, monospace', //Courier New / Courier
            '"Lucida Console", "Andale Mono", Monaco, monospace', //Lucida Console / Andale Mono / Monaco
        //    '-sep1', //
            'Inconsolata', //Inconsolata
            '"Droid Sans Mono"', //Droid Sans Mono
            '"Cousine"', //Cousine
            '"Anonymous Pro"', //Anonymous Pro
        //    '-sep-custom', //
        //    'custom', //» custom
        ),
    ),

    'text_font_header' => array(
        'custom' => TRUE,
        'values' => array(
            '', //General Font
        //    '-sep1', //
            '"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif', //Palatino / Book Antigua / Georgia
            '"Times New Roman", Times, serif', //Times New Roman / Times
            'Verdana, Geneva, sans-serif', //Verdana / Geneva
            'Helvetica, "Helvetica Neuve", Arial, Tahoma, sans-serif', //Helvetica / Arial / Tahoma
        //    '-sep2', //
            '"Crimson Text"', //Crimson Text
            '"Droid Serif"', //Droid Serif
            'Tinos', //Tinos
            'Neuton', //Neuton
            'Vollkorn', //Vollkorn
            'Cardo', //Cardo
            'Bentham', //Bentham
        //    '-sep3', //
            'Cantarell', //Cantarell
            '"Droid Sans"', //Droid Sans
            'Molengo', //Molengo
            'Allerta', //Allerta
            'Ubuntu', //Ubuntu
        //    '-sep4', //
            'Inconsolata', //Inconsolata
            '"Droid Sans Mono"', //Droid Sans Mono
        //    '-sep-custom', //
        //    'custom', //» custom
        ),
    ),

    'text_size' => array(
        'custom' => TRUE,
        'values' => array(
            '12px', //12 pixels
        //    '-sep1', //
            '14px', //14 pixels
            '16px', //16 pixels
            '18px', //18 pixels
        //    '-sep2', //
            '20px', //20 pixels
            '22px', //22 pixels
            '24px', //24 pixels
        //    '-sep3', //
            '26px', //26 pixels
            '28px', //28 pixels
            '30px', //30 pixels
        //    '-sep-custom', //
        //    'custom', //» custom
        ),
    ),    

    'text_line_height' => array(
        'custom' => TRUE,
        'values' => array(
            '1', //1
        //    '-sep1', //
            '1.25', //1.25
            '1.5', //1.5
            '1.625', //1.625
        //    '-sep2', //
            '1.75', //1.75
            '2', //2
        //    '-sep-custom', //
        //    'custom', //» custom
        ),
    ),    

    'box_width' => array(
        'custom' => TRUE,
        'values' => array(
            '25em', //45 chars
            '30em', //55 chars
            '35em', //65 chars
            '40em', //75 chars
            '45em', //85 chars
            '50em', //95 chars
        //    '-sep', //
            '60%', //60% of window
            '70%', //70% of window
            '80%', //80% of window
        //    '-sep-custom', //
        //    'custom', //» custom
        ),
    ),    

    'color_background' => array(    
        'custom' => TRUE,
        'values' => array(
            '#FFFFFF', //White
            '#FDFDFD', //Off White
        //    '-sep1', //
            '#999999', //Grey
            '#EDEBEB', //Off Grey
            '#F0F0F0', //Light Grey
            '#F5F5F5', //Lighter Grey
        //    '-sep2', //
            '#F4F4DD', //Off Yellow
            '#FFFFF7', //Light Yellow
            '#F9F8F3', //Lighter Yellow
            '#E5DED6', //Light Brown
            '#D5E7C2', //Light Green
            '#FBF5E6', //Olive
        //    '-sep3', //
            '#343A3A', //Dark Grey
            '#2D2D2D', //Darker Grey
            '#2C2D32', //Light Black
            '#000000', //Black
        //    '-sep-custom', //
        //    'custom', //» custom
        ),
    ),    

    'color_text' => array(
        'custom' => TRUE,
        'values' => array(
            '#000000', //Black
            '#171717', //Near Black
            '#282828', //Light Black
        //    '-sep1', //
            '#BBBBBB', //Grey
            '#2D2D2D', //Dark Grey
            '#D6D6D6', //Light Grey
            '#F0F0F0', //Lighter Grey
        //    '-sep2', //
            '#FFFFFF', //White
            '#FDFDFD', //Off White
        //    '-sep-custom', //
        //    'custom', //» custom
        ),
    ),

    'color_links' => array(
        'custom' => TRUE,
        'values' => array(
            '#99CCFF', //Light Blue
            '#EE4545', //Light Red
        //    '-sep1', //
            '#0000FF', //Bright Blue
            '#FFDD22', //Bright Yellow
            '#009900', //Bright Green
        //    '-sep-custom', //
        //    'custom', //» custom
        ),
    ),

    'text_align' => array(
        'custom' => FALSE,
        'values' => array(
            'normal', //No
            'justified', //Yes
        ),
    ),

    'base' => array(
        'custom' => FALSE,
        'values' => array(
            'blueprint', //Default
            '', //Browser Default
            'web_readability', //Better Web Readability
        ),
    ),

    'custom_css' => array(
        'custom' => TRUE,
        'values' => array(
            '', //No
        //    'custom', //Yes
        ),
    ),
);


// GFonts
$googleFontsArray =
array(
'Arvo',
'Bentham',
'Cardo',
'Copse',
'Corben',
'Crimson Text',
'Droid Serif',
'Goudy Bookletter 1911',
'Gruppo',
'IM Fell',
'Josefin Slab',
'Kreon',
'Meddon',
'Merriweather',
'Neuton',
'OFL Sorts Mill Goudy TT',
'Old Standard TT',
'Philosopher',
'PT Serif',
'Radley',
'Tinos',
'Vollkorn',

'Allerta',
'Anton',
'Arimo',
'Bevan',
'Buda',
'Cabin',
'Cantarell',
'Coda',
'Cuprum',
'Droid Sans',
'Geo',
'Josefin Sans',
'Lato',
'Lekton',
'Molengo',
'Nobile',
'Orbitron',
'PT Sans',
'Puritan',
'Raleway',
'Syncopate',
'Ubuntu',
'Yanone Kaffeesatz',

'Anonymous Pro',
'Cousine',
'Droid Sans Mono',
'Inconsolata'
);
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />	
	<title>Readable</title>
	<link rel="stylesheet" href="./index/style-1303844138.css" type="text/css" />
        <link rel="stylesheet" type="text/css" href="./index/index-1303844137.css" />
	<link rel="icon" href="./favicon.ico"/>


</head>
<body>
	<div id="page_index">
		<div id="container">
			<div id="page">
				
		</div>	</div></div>





<div class="slate_container" id="landing_slate">
	<table class="slate" cellspacing="0" cellpadding="0" border="0"><tr><td id="landing_slate_td">
		<div id="landing_slate_text">
			<h1 style="margin-top:1em;">This is <strong>Readable</strong>.</h1>
			<div id="landing_paragraphs">
				<p><strong>Readable</strong> is an application that helps you read more of the web. It reformats text &mdash; on any website &mdash; according to your exact specifications.</p>
                                <p><a href="http://readable.tastefulwords.com">Readable</a> is originally by Gabriel Coarna, and is licensed under the <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike</a> license. Modifications to Readable made by <a href="https://github.com/lordastley/readable">lordastley</a>.</p>
			</div>
			
			<p style="margin-bottom: 1em;" class="headerFont" id="landing_action_button"><strong>&darr;</strong> <a title="Show setup page." href="#">Show Setup</a></p>
						
			<noscript>
				<style type="text/css">
					#landing_gallery_nrs { display: none; }
					#landing_action_button { display: none; }
				</style>
				<br/><br/>
				<h2 style="color: #990000;">Now wait just one second</h2>
				<p>It appears you have <strong>JavaScript</strong> turned off, or are using a browser that doesn't support it.</p>
				<p>Readable requires JavaScript, and there's no way around it; please turn it on, or use a better browser.</p>
				<p>Unfortunately, if you're using the <a href="http://noscript.net/"><strong>NoScript</strong></a> extension, you're going to have to "Temporarily Allow" scripts on each page where you want to use Readable.</p>
			</noscript>
		</div>
	</td></tr></table>
</div>


<div class="slate_container " id="setup_slate">
	<div class="slate">
		<div id="top_boxes">
			<div class="top_box_container" id="style_top_box">
				<div class="top_box">
					<h1><em><strong class="bodyFont">1.</strong> Choose Style</em></h1>
					
					<table id="options_table" cellspacing="0" cellpadding="0" border="0">
						<tr>
							<td class="one">
			<div class="option_box" id="option_box_text_font">
				<label class="headerFont">Font Family</label>
				<div class="selectContainer">
					<select id="select_text_font"><option value="&quot;Palatino Linotype&quot;, Palatino, &quot;Book Antigua&quot;, Georgia, serif">Palatino / Book Antigua / Georgia</option><option value="&quot;Times New Roman&quot;, Times, serif">Times New Roman / Times</option><option value="Verdana, Geneva, sans-serif">Verdana / Geneva</option><option value="Helvetica, &quot;Helvetica Neuve&quot;, Arial, Tahoma, sans-serif">Helvetica / Arial / Tahoma</option><option value="-sep1"></option><option value="&quot;Crimson Text&quot;">Crimson Text</option><option value="&quot;Droid Serif&quot;">Droid Serif</option><option value="Tinos">Tinos</option><option value="Neuton">Neuton</option><option value="Vollkorn">Vollkorn</option><option value="Cardo">Cardo</option><option value="Bentham">Bentham</option><option value="-sep2"></option><option value="Cantarell">Cantarell</option><option value="&quot;Droid Sans&quot;">Droid Sans</option><option value="Molengo">Molengo</option><option value="Allerta">Allerta</option><option value="Ubuntu">Ubuntu</option><option value="-sep3"></option><option value="Inconsolata">Inconsolata</option><option value="&quot;Droid Sans Mono&quot;">Droid Sans Mono</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="two">
			<div class="option_box" id="option_box_text_size">
				<label class="headerFont">Size</label>
				<div class="selectContainer">
					<select id="select_text_size"><option value="12px">12 pixels</option><option value="-sep1"></option><option value="14px">14 pixels</option><option value="16px">16 pixels</option><option value="18px">18 pixels</option><option value="-sep2"></option><option value="20px">20 pixels</option><option value="22px">22 pixels</option><option value="24px">24 pixels</option><option value="-sep3"></option><option value="26px">26 pixels</option><option value="28px">28 pixels</option><option value="30px">30 pixels</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="tre">
			<div class="option_box" id="option_box_color_background">
				<label class="headerFont">Back Color</label>
				<div class="selectContainer">
					<select id="select_color_background"><option value="#FFFFFF">White</option><option value="#FDFDFD">Off White</option><option value="-sep1"></option><option value="#999999">Grey</option><option value="#EDEBEB">Off Grey</option><option value="#F0F0F0">Light Grey</option><option value="#F5F5F5">Lighter Grey</option><option value="-sep2"></option><option value="#F4F4DD">Off Yellow</option><option value="#FFFFF7">Light Yellow</option><option value="#F9F8F3">Lighter Yellow</option><option value="#E5DED6">Light Brown</option><option value="#D5E7C2">Light Green</option><option value="#FBF5E6">Olive</option><option value="-sep3"></option><option value="#343A3A">Dark Grey</option><option value="#2D2D2D">Darker Grey</option><option value="#2C2D32">Light Black</option><option value="#000000">Black</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="fur">
			<div class="option_box" id="option_box_text_align">
				<label class="headerFont">Justified</label>
				<div class="selectContainer">
					<select id="select_text_align"><option value="normal">No</option><option value="justified">Yes</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
														<td class="fve"><div id="option_box_style_themes"><a class="fancy headerFont" href="#explain-style-themes" title="Some predefined Styles."><strong>Style <span style="color:#0000FF">*</span></strong> Themes</a></div></td>
						</tr>
						<tr>
							<td class="one">
			<div class="option_box" id="option_box_text_font_header">
				<label class="headerFont">Headers</label>
				<div class="selectContainer">
					<select id="select_text_font_header"><option value="">General Font</option><option value="-sep1"></option><option value="&quot;Palatino Linotype&quot;, Palatino, &quot;Book Antigua&quot;, Georgia, serif">Palatino / Book Antigua / Georgia</option><option value="&quot;Times New Roman&quot;, Times, serif">Times New Roman / Times</option><option value="Verdana, Geneva, sans-serif">Verdana / Geneva</option><option value="Helvetica, &quot;Helvetica Neuve&quot;, Arial, Tahoma, sans-serif">Helvetica / Arial / Tahoma</option><option value="-sep2"></option><option value="&quot;Crimson Text&quot;">Crimson Text</option><option value="&quot;Droid Serif&quot;">Droid Serif</option><option value="Tinos">Tinos</option><option value="Neuton">Neuton</option><option value="Vollkorn">Vollkorn</option><option value="Cardo">Cardo</option><option value="Bentham">Bentham</option><option value="-sep3"></option><option value="Cantarell">Cantarell</option><option value="&quot;Droid Sans&quot;">Droid Sans</option><option value="Molengo">Molengo</option><option value="Allerta">Allerta</option><option value="Ubuntu">Ubuntu</option><option value="-sep4"></option><option value="Inconsolata">Inconsolata</option><option value="&quot;Droid Sans Mono&quot;">Droid Sans Mono</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="two">
			<div class="option_box" id="option_box_text_line_height">
				<label class="headerFont">Leading</label>
				<div class="selectContainer">
					<select id="select_text_line_height"><option value="1">1</option><option value="-sep1"></option><option value="1.25">1.25</option><option value="1.5">1.5</option><option value="1.625">1.625</option><option value="-sep2"></option><option value="1.75">1.75</option><option value="2">2</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="tre">
			<div class="option_box" id="option_box_color_text">
				<label class="headerFont">Fore Color</label>
				<div class="selectContainer">
					<select id="select_color_text"><option value="#000000">Black</option><option value="#171717">Near Black</option><option value="#282828">Light Black</option><option value="-sep1"></option><option value="#BBBBBB">Grey</option><option value="#2D2D2D">Dark Grey</option><option value="#D6D6D6">Light Grey</option><option value="#F0F0F0">Lighter Grey</option><option value="-sep2"></option><option value="#FFFFFF">White</option><option value="#FDFDFD">Off White</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="fur">
			<div class="option_box" id="option_box_base">
				<label class="headerFont">Base</label>
				<div class="selectContainer">
					<select id="select_base"><option value="blueprint">Default</option><option value="">Browser Default</option><option value="web_readability">Better Web Readability</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
														<td class="fve"><div><a class="fancy headerFont" href="#explain-color-themes" title="Some predefined Colors."><strong>Color</strong> Themes</a></div></td>
						</tr>
						<tr class="last">
							<td class="one">
			<div class="option_box" id="option_box_text_font_monospace">
				<label class="headerFont">Mono-space</label>
				<div class="selectContainer">
					<select id="select_text_font_monospace"><option value="&quot;Courier New&quot;, Courier, monospace">Courier New / Courier</option><option value="&quot;Lucida Console&quot;, &quot;Andale Mono&quot;, Monaco, monospace">Lucida Console / Andale Mono / Monaco</option><option value="-sep1"></option><option value="Inconsolata">Inconsolata</option><option value="&quot;Droid Sans Mono&quot;">Droid Sans Mono</option><option value="&quot;Cousine&quot;">Cousine</option><option value="&quot;Anonymous Pro&quot;">Anonymous Pro</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="two">
			<div class="option_box" id="option_box_box_width">
				<label class="headerFont">Lines Of</label>
				<div class="selectContainer">
					<select id="select_box_width"><option value="25em">45 chars</option><option value="30em">55 chars</option><option value="35em">65 chars</option><option value="40em">75 chars</option><option value="45em">85 chars</option><option value="50em">95 chars</option><option value="-sep"></option><option value="60%">60% of window</option><option value="70%">70% of window</option><option value="80%">80% of window</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="tre">
			<div class="option_box" id="option_box_color_links">
				<label class="headerFont">Link Color</label>
				<div class="selectContainer">
					<select id="select_color_links"><option value="#99CCFF">Light Blue</option><option value="#EE4545">Light Red</option><option value="-sep1"></option><option value="#0000FF">Bright Blue</option><option value="#FFDD22">Bright Yellow</option><option value="#009900">Bright Green</option><option value="-sep-custom"></option><option class="custom" value="custom">&raquo; custom</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
							<td class="fur">
			<div class="option_box" id="option_box_custom_css">
				<label class="headerFont">More CSS</label>
				<div class="selectContainer">
					<select id="select_custom_css"><option value="">No</option><option value="custom">Yes</option></select>
					<a href="#">&raquo;</a>
				</div>
			</div>
		</td>
														<td class="fve"><div><a class="fancy headerFont" href="#explain-options" title="Explainations for available options."><strong>Explain</strong> Options</a></div></td>
						</tr>
					</table>
					 
				</div>
			</div>
			
			<div class="top_box_container" id="bookmarklet_top_box">
				<div class="top_box">
											<h1><em><strong class="bodyFont">3.</strong> Bookmarklet</em></h1>
						<div id="bookmarklet_top_box_arrow"><strong>&crarr;</strong></div>
						<div id="bookmarklet_container"><a id="bookmarklet" href=""><div>Readable</div></a></div>
						<p>Just above: the <a class="fancy" href="#explain-bookmarklet" title="Explain 'bookmarklet'.">bookmarklet</a>. You need to put it in your browser's <a class="fancy" href="#explain-bookmarks-toolbar" title="Explain 'Bookmarks Toolbar'.">Bookmarks Toolbar</a>; do that by either dragging it there, or by using the right-click menu.</p>
									</div>
			</div>
			
			<div class="top_box_container" id="links_top_box">
				<div class="top_box">
					<h1><em>Links</em></h1>
											<p><a class="fancy" href="#explain-how-to-install" title="How to install Readable.">How to <strong>Install</strong></a></p>
						<p><a class="fancy" href="#explain-how-to-use" title="How to use Readable.">How to <strong>Use</strong></a></p>
										<br/>
					<p><a href="./faq">F.A.Q.</a></p>
					<p><a href="./about-and-contact">About &amp; Contact</a></p>
				</div>
			</div>
			
			<div style="clear: both;"></div>
			<a id="back_to_landing_slate" href="#" title="Show the landing page again.">&uarr;</a>
		</div>

		<div id="frame_container">
			<h1><em><strong class="bodyFont">2.</strong> Preview <span class="bodyFont">Keep tinkering until this looks good to you.</span></em></h1>
			<div id="frame"><iframe src="./index/frame/" frameBorder="0" allowTransparency="true"></iframe></div>
		</div>
	</div>
</div>

<div id="helpers">

	<div id="custom_box">
		<textarea id="custom_box_input" class="text"></textarea>
		<input type="button" id="custom_box_button" class="button headerFont" value="Apply"/>
		<div id="custom_box_help">
		</div>
	</div>


	<div class="explain" id="explain-bookmarklet">
		<p>A <strong>bookmarklet</strong> is almost like a regular old bookmark. But, instead of it storing a URL, it stores <strong>code</strong> &mdash; most often, JavaScript code.</p>
		<p>When you click a bookmark, you get taken to the URL; when you click a bookmarklet, that piece of code is executed.</p>
		<p>So, basically, bookmarklets allow programmers to encapsulate code &mdash; possibly very complicated code, like Readable &mdash; into nice little buttons, to which you then have one click access to.</p>
	</div>

	<div class="explain" id="explain-bookmarks-toolbar">
		<p>The <strong>Bookmarks Toolbar</strong> is something that every browser has. It's purpose is to store bookmarks you access very frequently.</p>
		<p>Now, because <strong>bookmarklets</strong> are basically just bookmarks, they fit right in. As a matter of fact, many people only use the Bookmarks Toolbar to store various bookmarklets &mdash; while storing their actual bookmarks in the hidden away Bookmarks Menu, or a folder on the Bookmarks Toolbar.</p>
		<p>In case your Bookmarks Toolbar isn't visible, here's how to make it show up:</p>
		<dl>
			<dt>Mozilla's Firefox</dt>
				<dd>Menu &raquo; View &raquo; Toolbars &raquo; Bookmarks Toolbar</dd>
				
			<dt>Google's Chrome</dt>
				<dd>Menu &raquo; Tools &raquo; Always show bookmarks bar</dd>
				
			<dt>Apple's Safari</dt>
				<dd>Menu &raquo; View &raquo; Show Bookmarks Bar</dd>
				
			<dt>Microsoft's Internet Explorer</dt>
				<dd>Menu &raquo; Tools &raquo; Toolbars &raquo; Favorites Bar</dd>
				
			<dt>Opera</dt>
				<dd>Menu &raquo; View &raquo; Toolbars &raquo; Bookmarks Toolbar</dd>
		</dl>
	</div>

	<div class="explain" id="explain-ios">
		<p>You're on a iPhone, iPod, or iPad. Unfortunately, that means that you can't just drag-and-drop the bookmarklet to your Bookmarks Toolbar &mdash; because you don't have one.</p>
		<p>Instead, you have to manually copy the code above, and then add it as a Bookmark.</p>
	</div>
	
	
	<div class="explain" id="explain-how-to-install">
		<p>Tinker with the selects under <strong>Choose Style</strong>, on the left: for every option, you can either select a predefined value, or insert your own custom value. The <strong>Preview</strong> pane will update accordingly.</p>
		<p>When you've settled on a style, put the the <strong>bookmarklet</strong> in your browser's <strong>Bookmarks Toolbar</strong>; do that by either dragging it there, or by using the right-click menu &mdash; just like you would for a regular bookmark.</p>
		<p>That's it. Make sure you read "<strong>How To Use</strong>" as well, and you're set to go. <strong>Happy reading.</strong></p>
	</div>

	<div class="explain" id="explain-how-to-use">
		<p>Whenever you're on an <strong>article page</strong>, no matter the website, just click the <strong>Readable</strong> bookmarklet; a reformatted version of the article will appear on top of the original page.</p>
		<p>"What's an article page?", you ask; good question. An <strong>article page</strong> is any page that contains one large block of text &mdash; like, for example, all newspaper articles. Readable is only designed to automatically process these kinds of pages.</p>
		<p>On any other type of page, you can still take advantage of Readable, but in <strong>manual mode</strong>: simply <strong>select the text</strong> you would like Readable to display, and <strong>then click</strong> the bookmarklet.</p>
		<p>When you're done reading, <strong>double-click the background</strong> to dismiss the Readable overlay.</p>
	</div>

	<div class="explain" id="explain-how-to-set-up-embed">
		<p>Tinker with the selects under <strong>Choose Style</strong>, on the left: for every option, you can either select a predefined value, or insert your own custom value. The <strong>Preview</strong> pane will update accordingly.</p>
		<p>That's it. Make sure you read "<strong>How To Install</strong>" as well, and you're set to go.</p>
	</div>

	<div class="explain" id="explain-how-to-install-embed">
		<p>Copy the JavaScript link, which si just plain old HTML code, to your website's pages &mdash; preferably, only to <strong>article pages</strong>.</p>
		<p>"What's an article page?", you ask; good question. An <strong>article page</strong> is any page that contains one large block of text &mdash; like, for example, all newspaper articles. Readable is only designed to automatically process these kinds of pages.</p>
		<p>Also, please note that you can modify the link: you can change its caption, or you can wrap it around an image.</p>
	</div>
	
	<div class="explain" id="explain-embed-parsing">
		<p>You can modify the way Readable parses your page, by adding special <strong>CSS Classes</strong> to HTML elements on the page.</p>
		<br/><dl>
			<dt>readable__delete</dt>
				<dd>Add this class to an element that Readable keeps after parsing, but that you would want it not to keep.</dd>
				
			<dt>readable__keep</dt>
				<dd>Add this class to an element that Readable deletes while parsing, but that you would want it to keep &mdash; the target element needs to be inside what Readable detects as the main content element on the page.</dd>
				
			<dt>readable__add_before</dt>
				<dd>Add this class to any element that you would like appended before Readable's output &mdash; the target element needs to be outside what Readable detects as the main content element on the page.</dd>

			<dt>readable__add_after</dt>
				<dd>Add this class to any element that you would like appended after Readable's output &mdash; the target element needs to be outside what Readable detects as the main content element on the page.</dd>
		</dl>
	</div>
	
	<div class="explain" id="explain-options">
		<dl>
			<dt>Font Family</dt>
				<dd>The font that gets applied to the entire text.</dd>
				
			<dt>Headers</dt>
				<dd>The font applied to Header elements.</dd>
				
			<dt>Mono-space</dt>
				<dd>The font applied to Computer Code elements.</dd>

				
			<dt>Size</dt>
				<dd>The font size that gets applied to the entire text.</dd>
				
			<dt>Leading</dt>
				<dd>The height of each line of text, relative to the Font Size.</dd>
				
			<dt>Lines Of</dt>
				<dd>The width of each line of text, before it is wrapped.</dd>

				
			<dt>Back Color</dt>
				<dd>The background color.</dd>
				
			<dt>Fore Color</dt>
				<dd>The foreground color &mdash; the text color.</dd>
				
			<dt>Link Color</dt>
				<dd>The color used for links.</dd>

				
			<dt>Justified</dt>
				<dd>Should the text be displayed as justified?</dd>
				
			<dt>Base</dt>
				<dd>The base style for the page; also known as a CSS Reset.</dd>
				
			<dt>More CSS</dt>
				<dd>Specify your own, custom, CSS.</dd>
				
				
					</dl>
	</div>
	
	<div class="explain" id="explain-style-themes">
		<p>A few predefined styles themes you can choose from. <strong>Click</strong> to activate. If you'd like to design a style for Readable, <a href="http://readable.tastefulwords.com/about-and-contact/">get in touch</a>.</p>
		<br/><dl>
					<dt><a href="#" onclick="return window.readableSetup.style_theme_linked_clicked('default');">Default</a></dt>
				<dd>Readable's default theme</dd>
					<dt><a href="#" onclick="return window.readableSetup.style_theme_linked_clicked('dark');">Dark</a></dt>
				<dd>An inverted theme</dd>
					<dt><a href="#" onclick="return window.readableSetup.style_theme_linked_clicked('smaller_lighter');">Smaller and Lighter</a></dt>
				<dd>Smaller font size and lighter colors</dd>
					<dt><a href="#" onclick="return window.readableSetup.style_theme_linked_clicked('smaller_crisper');">Smaller and Crisper</a></dt>
				<dd>Smaller font size and crisper text</dd>
					<dt><a href="#" onclick="return window.readableSetup.style_theme_linked_clicked('bigger_smoother');">Bigger and Smoother</a></dt>
				<dd>BIgger font-size and smoother text</dd>
					<dt><a href="#" onclick="return window.readableSetup.style_theme_linked_clicked('web_readability');">Better Web Readability</a></dt>
				<dd>Designed by <a href="http://www.vcarrer.com/">Vladimir Carrer</a>.</a></dd>
				</dl>
	</div>
	
	<div class="explain" id="explain-color-themes">
		<p>A few predefined color themes you can choose from. <strong>Click</strong> to activate. If you'd like to design a color for Readable, <a href="http://readable.tastefulwords.com/about-and-contact/">get in touch</a>.</p>
		<br/><dl>
					<dt><a href="#" onclick="return window.readableSetup.color_theme_linked_clicked('light_grey');">Light Grey</a></dt>
				<dd>Light Grey, Light Black, and Bright Blue</dd>
					<dt><a href="#" onclick="return window.readableSetup.color_theme_linked_clicked('dark_grey');">Dark Grey</a></dt>
				<dd>Dark Grey, Off White, and Light Blue</dd>
					<dt><a href="#" onclick="return window.readableSetup.color_theme_linked_clicked('off_white');">Off White</a></dt>
				<dd>Off White, Black, and Bright Blue</dd>
					<dt><a href="#" onclick="return window.readableSetup.color_theme_linked_clicked('light_brown');">Light Brown</a></dt>
				<dd>Light Brown, Light Black, Light Red</dd>
					<dt><a href="#" onclick="return window.readableSetup.color_theme_linked_clicked('light_green');">Light Green</a></dt>
				<dd>Light Green, Light Black, Light Red</dd>
					<dt><a href="#" onclick="return window.readableSetup.color_theme_linked_clicked('olive');">Olive</a></dt>
				<dd>Olive, Black, and Bright Blue<br/>Designed by <a href="http://www.filterjoe.com/">Joe Golton</a>.</dd>
					<dt><a href="#" onclick="return window.readableSetup.color_theme_linked_clicked('web_readability');">Web Readability</a></dt>
				<dd>Lightish Yellow, Almost Black and Light Blue<br/>Designed by <a href="http://www.vcarrer.com/">Vladimir Carrer</a>.</a></dd>
				</dl>
	</div>


	<div class="customHelp" id="custom_help_text_font">
		<p>One or more Font Families, in quotes &mdash; separated by commas, if more. The first Font Family that is available on your computer will be used. You can also use most of the Font Families available in <a href="http://www.google.com/webfonts/">Google's Font Directory</a>.</p>
		<ul>
			<li>"Microsoft Sans Serif"</li>
			<li>"Calibri", "Constantia"</li>
			<li>"Cardo"</li>
		</ul>
	</div>

	<div class="customHelp" id="custom_help_text_font_monospace">
		<p>One or more Font Families, in quotes &mdash; separated by commas, if more. The first Font Family that's available will be used. You can also use most of the Font Families available in <a href="http://www.google.com/webfonts/">Google's Font Directory</a>.</p>
		<ul>
			<li>"Consolas"</li>
			<li>"DejaVu Sans Mono", "Inconsolata"</li>
		</ul>
	</div>

	<div class="customHelp" id="custom_help_text_font_header">
		<p>One or more Font Families, in quotes &mdash; separated by commas, if more. The first Font Family that's available will be used. You can also use most of the Font Families available in <a href="http://www.google.com/webfonts/">Google's Font Directory</a>.</p>
		<ul>
			<li>"Microsoft Sans Serif"</li>
			<li>"Calibri", "Constantia"</li>
		</ul>
	</div>
	
	<div class="customHelp" id="custom_help_text_size">
		<p>Pixels, Points, or Percentage.</p>
		<ul>
			<li>16px</li>
			<li>12pt</li>
			<li>150%</li>
		</ul>
	</div>
	
	<div class="customHelp" id="custom_help_text_line_height">
		<p>Number (multiplication factor), Pixels, Points, or Percentage.</p>
		<ul>
			<li>1.5</li>
			<li>24px</li>
			<li>18pt</li>
			<li>150%</li>
		</ul>
	</div>
	
	<div class="customHelp" id="custom_help_box_width">
		<p>EMs (1em = current font size), Pixels, or Percentage.</p>
		<ul>
			<li>30em</li>
			<li>480px</li>
			<li>60%</li>
		</ul>
	</div>

	<div class="customHelp" id="custom_help_color_background">
		<p>Hexadecimal or RGB color.</p>
		<ul>
			<li>#F0F0F0</li>
			<li>rgb(240, 240, 240)</li>
		</ul>
	</div>

	<div class="customHelp" id="custom_help_color_text">
		<p>Hexadecimal or RGB color.</p>
		<ul>
			<li>#222222</li>
			<li>rgb(34, 34, 34)</li>
		</ul>
	</div>

	<div class="customHelp" id="custom_help_color_links">
		<p>Hexadecimal or RGB color.</p>
		<ul>
			<li>#000088</li>
			<li>rgb(0, 0, 136)</li>
		</ul>
	</div>
	
	<div class="customHelp" id="custom_help_custom_css">
		<p>Enter any custom CSS that you would like applied to the page.</p>
		<dl>
			<dt>Make the background 10% transparent.</dt>
				<dd>#background { opacity:0.9; filter:alpha(opacity=90); }</dd>
			
			<dt>Indent every paragraph.</dt>
				<dd>p { text-indent: 1em; }</dd>
				
			<dt>Make links bold.</dt>
				<dd>a { font-weight: bold; }</dd>
		</dl>
	</div>

	<div class="customHelp" id="custom_help_embedded_logo">
		<p>Enter the absolute URL to a small logo image that you would like displayed at the top of the Readable overlay.</p>
	</div>

	<div class="customHelp" id="custom_help_embedded_script">
		<p>Enter the absolute URL to a custom JavaScript file that you would like executed after Readable loads.</p>
	</div>
	
</div>

<script type="text/javascript">
	window.$readable =
	{
		'bookmarkletClicked': function ()
		{
			alert('Go try out Readable on an article page.');
			window.$readable.bookmarkletTimer = false;
		}
	};

	window.readableSetup =
	{
		'baseURLStatic': <?php echo "'$baseURL'";?>,
		'baseCSSPostfix': '.css',

		'codeType': 'bookmarklet',
		
		'selected': {},
		'customed': {},
		
		'style_themes': {},
		'color_themes': {}
	};

	//	embedded options
	window.readableSetup.customed['embedded_logo'] = '';
	window.readableSetup.selected['embedded_logo'] = '';
	window.readableSetup.customed['embedded_script'] = '';
	window.readableSetup.selected['embedded_script'] = '';
	
	
			window.readableSetup.style_themes['default'] = function ()
		{
												window.readableSetup.customed['text_font'] = '';
					window.readableSetup.selected['text_font'] = '"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif';
					$('#select_text_font').val('"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif');
					
																window.readableSetup.customed['text_font_monospace'] = '';
					window.readableSetup.selected['text_font_monospace'] = '"Courier New", Courier, monospace';
					$('#select_text_font_monospace').val('"Courier New", Courier, monospace');
					
																window.readableSetup.customed['text_font_header'] = '';
					window.readableSetup.selected['text_font_header'] = '"Times New Roman", Times, serif';
					$('#select_text_font_header').val('"Times New Roman", Times, serif');
					
																window.readableSetup.customed['text_size'] = '';
					window.readableSetup.selected['text_size'] = '18px';
					$('#select_text_size').val('18px');
					
																window.readableSetup.customed['text_line_height'] = '';
					window.readableSetup.selected['text_line_height'] = '1.5';
					$('#select_text_line_height').val('1.5');
					
																window.readableSetup.customed['box_width'] = '';
					window.readableSetup.selected['box_width'] = '30em';
					$('#select_box_width').val('30em');
					
																window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#F5F5F5';
					$('#select_color_background').val('#F5F5F5');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#282828';
					$('#select_color_text').val('#282828');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#0000FF';
					$('#select_color_links').val('#0000FF');
					
																window.readableSetup.customed['text_align'] = '';
					window.readableSetup.selected['text_align'] = 'normal';
					$('#select_text_align').val('normal');
					
																window.readableSetup.customed['base'] = '';
					window.readableSetup.selected['base'] = 'blueprint';
					$('#select_base').val('blueprint');
					
																window.readableSetup.customed['custom_css'] = '';
					window.readableSetup.selected['custom_css'] = '';
					$('#select_custom_css').val('');
					
									};
			window.readableSetup.style_themes['dark'] = function ()
		{
												window.readableSetup.customed['text_font'] = '';
					window.readableSetup.selected['text_font'] = 'Tinos';
					$('#select_text_font').val('Tinos');
					
																window.readableSetup.customed['text_font_monospace'] = '';
					window.readableSetup.selected['text_font_monospace'] = '"Courier New", Courier, monospace';
					$('#select_text_font_monospace').val('"Courier New", Courier, monospace');
					
																window.readableSetup.customed['text_font_header'] = '';
					window.readableSetup.selected['text_font_header'] = '"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif';
					$('#select_text_font_header').val('"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif');
					
																window.readableSetup.customed['text_size'] = '';
					window.readableSetup.selected['text_size'] = '18px';
					$('#select_text_size').val('18px');
					
																window.readableSetup.customed['text_line_height'] = '';
					window.readableSetup.selected['text_line_height'] = '1.5';
					$('#select_text_line_height').val('1.5');
					
																window.readableSetup.customed['box_width'] = '';
					window.readableSetup.selected['box_width'] = '30em';
					$('#select_box_width').val('30em');
					
																window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#343A3A';
					$('#select_color_background').val('#343A3A');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#FDFDFD';
					$('#select_color_text').val('#FDFDFD');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#99CCFF';
					$('#select_color_links').val('#99CCFF');
					
																window.readableSetup.customed['text_align'] = '';
					window.readableSetup.selected['text_align'] = 'normal';
					$('#select_text_align').val('normal');
					
																window.readableSetup.customed['base'] = '';
					window.readableSetup.selected['base'] = 'blueprint';
					$('#select_base').val('blueprint');
					
																window.readableSetup.customed['custom_css'] = '';
					window.readableSetup.selected['custom_css'] = '';
					$('#select_custom_css').val('');
					
									};
			window.readableSetup.style_themes['smaller_lighter'] = function ()
		{
												window.readableSetup.customed['text_font'] = '';
					window.readableSetup.selected['text_font'] = 'Verdana, Geneva, sans-serif';
					$('#select_text_font').val('Verdana, Geneva, sans-serif');
					
																window.readableSetup.customed['text_font_monospace'] = '';
					window.readableSetup.selected['text_font_monospace'] = '"Courier New", Courier, monospace';
					$('#select_text_font_monospace').val('"Courier New", Courier, monospace');
					
																window.readableSetup.customed['text_font_header'] = '';
					window.readableSetup.selected['text_font_header'] = '"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif';
					$('#select_text_font_header').val('"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif');
					
																window.readableSetup.customed['text_size'] = '';
					window.readableSetup.selected['text_size'] = '16px';
					$('#select_text_size').val('16px');
					
																window.readableSetup.customed['text_line_height'] = '';
					window.readableSetup.selected['text_line_height'] = '1.5';
					$('#select_text_line_height').val('1.5');
					
																window.readableSetup.customed['box_width'] = '';
					window.readableSetup.selected['box_width'] = '35em';
					$('#select_box_width').val('35em');
					
																window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#FDFDFD';
					$('#select_color_background').val('#FDFDFD');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#000000';
					$('#select_color_text').val('#000000');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#0000FF';
					$('#select_color_links').val('#0000FF');
					
																window.readableSetup.customed['text_align'] = '';
					window.readableSetup.selected['text_align'] = 'normal';
					$('#select_text_align').val('normal');
					
																window.readableSetup.customed['base'] = '';
					window.readableSetup.selected['base'] = 'blueprint';
					$('#select_base').val('blueprint');
					
																window.readableSetup.customed['custom_css'] = '';
					window.readableSetup.selected['custom_css'] = '';
					$('#select_custom_css').val('');
					
									};
			window.readableSetup.style_themes['smaller_crisper'] = function ()
		{
												window.readableSetup.customed['text_font'] = '';
					window.readableSetup.selected['text_font'] = '"Droid Sans"';
					$('#select_text_font').val('"Droid Sans"');
					
																window.readableSetup.customed['text_font_monospace'] = '';
					window.readableSetup.selected['text_font_monospace'] = '"Courier New", Courier, monospace';
					$('#select_text_font_monospace').val('"Courier New", Courier, monospace');
					
																window.readableSetup.customed['text_font_header'] = '';
					window.readableSetup.selected['text_font_header'] = '"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif';
					$('#select_text_font_header').val('"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif');
					
																window.readableSetup.customed['text_size'] = '';
					window.readableSetup.selected['text_size'] = '16px';
					$('#select_text_size').val('16px');
					
																window.readableSetup.customed['text_line_height'] = '';
					window.readableSetup.selected['text_line_height'] = '1.5';
					$('#select_text_line_height').val('1.5');
					
																window.readableSetup.customed['box_width'] = '';
					window.readableSetup.selected['box_width'] = '30em';
					$('#select_box_width').val('30em');
					
																window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#FBF5E6';
					$('#select_color_background').val('#FBF5E6');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#000000';
					$('#select_color_text').val('#000000');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#0000FF';
					$('#select_color_links').val('#0000FF');
					
																window.readableSetup.customed['text_align'] = '';
					window.readableSetup.selected['text_align'] = 'normal';
					$('#select_text_align').val('normal');
					
																window.readableSetup.customed['base'] = '';
					window.readableSetup.selected['base'] = 'blueprint';
					$('#select_base').val('blueprint');
					
																window.readableSetup.customed['custom_css'] = '';
					window.readableSetup.selected['custom_css'] = '';
					$('#select_custom_css').val('');
					
									};
			window.readableSetup.style_themes['bigger_smoother'] = function ()
		{
												window.readableSetup.customed['text_font'] = '';
					window.readableSetup.selected['text_font'] = 'Vollkorn';
					$('#select_text_font').val('Vollkorn');
					
																window.readableSetup.customed['text_font_monospace'] = '';
					window.readableSetup.selected['text_font_monospace'] = '"Courier New", Courier, monospace';
					$('#select_text_font_monospace').val('"Courier New", Courier, monospace');
					
																window.readableSetup.customed['text_font_header'] = '';
					window.readableSetup.selected['text_font_header'] = '"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif';
					$('#select_text_font_header').val('"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif');
					
																window.readableSetup.customed['text_size'] = '';
					window.readableSetup.selected['text_size'] = '20px';
					$('#select_text_size').val('20px');
					
																window.readableSetup.customed['text_line_height'] = '';
					window.readableSetup.selected['text_line_height'] = '1.5';
					$('#select_text_line_height').val('1.5');
					
																window.readableSetup.customed['box_width'] = '';
					window.readableSetup.selected['box_width'] = '30em';
					$('#select_box_width').val('30em');
					
																window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#E5DED6';
					$('#select_color_background').val('#E5DED6');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#282828';
					$('#select_color_text').val('#282828');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#EE4545';
					$('#select_color_links').val('#EE4545');
					
																window.readableSetup.customed['text_align'] = '';
					window.readableSetup.selected['text_align'] = 'normal';
					$('#select_text_align').val('normal');
					
																window.readableSetup.customed['base'] = '';
					window.readableSetup.selected['base'] = 'blueprint';
					$('#select_base').val('blueprint');
					
																window.readableSetup.customed['custom_css'] = '';
					window.readableSetup.selected['custom_css'] = '';
					$('#select_custom_css').val('');
					
									};
			window.readableSetup.style_themes['web_readability'] = function ()
		{
												window.readableSetup.selected['text_font'] = 'custom';
					$('#select_text_font').val('custom');
					window.readableSetup.customed['text_font'] = '"Lucida Grande", "Lucida Sans Unicode", sans-serif';
					$('#option_box_text_font').addClass('custom');

					
																window.readableSetup.customed['text_font_monospace'] = '';
					window.readableSetup.selected['text_font_monospace'] = '"Courier New", Courier, monospace';
					$('#select_text_font_monospace').val('"Courier New", Courier, monospace');
					
																window.readableSetup.customed['text_font_header'] = '';
					window.readableSetup.selected['text_font_header'] = '"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif';
					$('#select_text_font_header').val('"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif');
					
																window.readableSetup.customed['text_size'] = '';
					window.readableSetup.selected['text_size'] = '16px';
					$('#select_text_size').val('16px');
					
																window.readableSetup.customed['text_line_height'] = '';
					window.readableSetup.selected['text_line_height'] = '1.625';
					$('#select_text_line_height').val('1.625');
					
																window.readableSetup.customed['box_width'] = '';
					window.readableSetup.selected['box_width'] = '30em';
					$('#select_box_width').val('30em');
					
																window.readableSetup.selected['color_background'] = 'custom';
					$('#select_color_background').val('custom');
					window.readableSetup.customed['color_background'] = '#FFFEF0';
					$('#option_box_color_background').addClass('custom');

					
																window.readableSetup.selected['color_text'] = 'custom';
					$('#select_color_text').val('custom');
					window.readableSetup.customed['color_text'] = '#111111';
					$('#option_box_color_text').addClass('custom');

					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#EE4545';
					$('#select_color_links').val('#EE4545');
					
																window.readableSetup.customed['text_align'] = '';
					window.readableSetup.selected['text_align'] = 'normal';
					$('#select_text_align').val('normal');
					
																window.readableSetup.customed['base'] = '';
					window.readableSetup.selected['base'] = 'web_readability';
					$('#select_base').val('web_readability');
					
																window.readableSetup.selected['custom_css'] = 'custom';
					$('#select_custom_css').val('custom');
					window.readableSetup.customed['custom_css'] = 'h1, h2, h3, h4, h5, h6 { color #333333; }';
					$('#option_box_custom_css').addClass('custom');

					
									};
		
			window.readableSetup.color_themes['light_grey'] = function ()
		{
												window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#F5F5F5';
					$('#select_color_background').val('#F5F5F5');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#282828';
					$('#select_color_text').val('#282828');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#0000FF';
					$('#select_color_links').val('#0000FF');
					
									};
			window.readableSetup.color_themes['dark_grey'] = function ()
		{
												window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#343A3A';
					$('#select_color_background').val('#343A3A');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#FDFDFD';
					$('#select_color_text').val('#FDFDFD');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#99CCFF';
					$('#select_color_links').val('#99CCFF');
					
									};
			window.readableSetup.color_themes['off_white'] = function ()
		{
												window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#FDFDFD';
					$('#select_color_background').val('#FDFDFD');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#000000';
					$('#select_color_text').val('#000000');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#0000FF';
					$('#select_color_links').val('#0000FF');
					
									};
			window.readableSetup.color_themes['light_brown'] = function ()
		{
												window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#E5DED6';
					$('#select_color_background').val('#E5DED6');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#282828';
					$('#select_color_text').val('#282828');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#EE4545';
					$('#select_color_links').val('#EE4545');
					
									};
			window.readableSetup.color_themes['light_green'] = function ()
		{
												window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#D5E7C2';
					$('#select_color_background').val('#D5E7C2');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#282828';
					$('#select_color_text').val('#282828');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#EE4545';
					$('#select_color_links').val('#EE4545');
					
									};
			window.readableSetup.color_themes['olive'] = function ()
		{
												window.readableSetup.customed['color_background'] = '';
					window.readableSetup.selected['color_background'] = '#FBF5E6';
					$('#select_color_background').val('#FBF5E6');
					
																window.readableSetup.customed['color_text'] = '';
					window.readableSetup.selected['color_text'] = '#000000';
					$('#select_color_text').val('#000000');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#009900';
					$('#select_color_links').val('#009900');
					
									};
			window.readableSetup.color_themes['web_readability'] = function ()
		{
												window.readableSetup.selected['color_background'] = 'custom';
					$('#select_color_background').val('custom');
					window.readableSetup.customed['color_background'] = '#FFFEF0';
					$('#option_box_color_background').addClass('custom');
					
																window.readableSetup.selected['color_text'] = 'custom';
					$('#select_color_text').val('custom');
					window.readableSetup.customed['color_text'] = '#111111';
					$('#option_box_color_text').addClass('custom');
					
																window.readableSetup.customed['color_links'] = '';
					window.readableSetup.selected['color_links'] = '#EE4545';
					$('#select_color_links').val('#EE4545');
					
									};
		





<?php
// PARSING!

// check GET vars; are they valid script params? are they custom values?

if (array_key_exists('change', $_GET)) {

// custom values "set" function starts here
echo <<<SCR_ST
window.readableSetup.style_themes.changing_styles = function ()
{

SCR_ST;

    foreach($_GET as $idx => $value){
        if (array_key_exists($idx, $params)){ // check to make sure the GET params are valid things for the script.

            // change quote(thing) to "thing"
            $value = preg_replace('#quote\(([^)]*)\)#', '"$1"', $value);
            
            if(in_array($value, $params[$idx]['values'])){
                echo "window.readableSetup.customed['$idx'] = '';\n";
                echo "window.readableSetup.selected['$idx'] = '$value';\n";
                echo "$('#select_$idx').val('$value');\n";
                
            }
            elseif($params[$idx]['custom']){ // not in the UI, and custom values are OK
                echo "window.readableSetup.customed['$idx'] = '$value';\n";
                echo "window.readableSetup.selected['$idx'] = 'custom';\n";
                echo "$('#select_$idx').val('custom');\n";
                echo "$('#option_box_$idx').addClass('custom');\n";

            }
            else{ //not in the UI & custom values NOT OK    //default value is go!
                switch ($idx) {
                    case 'text_align':
                        $value = 'normal';
                        break;

                    case 'base':
                        $value = 'blueprint';
                        break;

                    default:
                        // oh god, how did you even get here?
                        // well, not much we can do about this.
                        // hope a blank value is OK
                        $value = '';
                        break;
                }
                // I should probably put this check on top. Meh.
                echo "window.readableSetup.customed['$idx'] = '';\n";
                echo "window.readableSetup.selected['$idx'] = '$value';\n";
                echo "$('#select_$idx').val('$value');\n";
            }
            echo "\n\n"; //for readability [rimshot!]
        }
    }

echo <<<SCR_END
};
SCR_END;
// custom values "set" function ends here
}


/* Further crap to do:
 
 * Put presets in here, then write 'em out.
 * Add all Google Fonts to list of GFonts, even if they're dumb.

 */

?>


	</script>


	<script type="text/javascript" src="./index/_load_bookmarklet-1304958109.js"></script>

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script type="text/javascript" src="./fancybox/jquery.fancybox-1.3.4.pack-1303844144.js"></script>
<script type="text/javascript" src="./index/index-1303844137.js"></script>
<link rel="stylesheet" type="text/css" href="./fancybox/jquery.fancybox-1.3.4-1303844144.css" />

<?php

if (array_key_exists('change', $_GET) or array_key_exists('setup', $_GET)) {

echo <<<SETUP
	<style type="text/css">
		#setup_slate { top: 0%; }
	</style>
SETUP;
}
?>


<script type="text/javascript">
	$(function ()
	{
		if (window.location.hash.match(/^#explain-/)); else { return; }
		if ($(''+window.location.hash).length > 0); else { return; }
		
					$('#setup_slate').css({top:'0%'});
				
		$.fancybox({
			'type': 'inline',
			'href': window.location.hash
		});
	});
</script>			</div>
		</div>	</div>	
	</body>
</html>
