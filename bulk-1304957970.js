$(
	function () {
		(function ($R) {
	
	
/* secondary-init stuff */
/* ==================== */

	//	debug
	if ($R.debug); else { $R.debug = false; }
	
	//	ios
	$R.iOS = ($R.win.navigator.userAgent.match(/like Mac OS X/i) != null);
	
	
/* debug stuff */
/* =========== */
	
	if ($R.debug)
	{
		//	vars
		//	====

			$R.debugOutputsFixed = {
				'GetTarget': 			0,
				'ProcessHTML': 			0,
				'GetContent':			0,
				'PreviousSiblings':		0,
				'TitleSource':			''
			};
			$R.debugOutputs = [];
			$R.debugTimers = [];
	
	
		//	log
		//	===
	
			$R.initializeWriteLogFunction = function ()
			{
				switch (true)
				{
					case (!(!($R.win.console && $R.win.console.log))):
						$R.writeLog = function (msg) { $R.win.console.log(msg); };
						break;
						
					case (!(!($R.win.opera && $R.win.opera.postError))):
						$R.writeLog = function (msg) { $R.win.opera.postError(msg); };
						break;
						
					default:
						$R.writeLog = function (msg) {};
						break;
				}
			};
			$R.initializeWriteLogFunction();
		
			$R.log = function () {
				for (var i=0, il=arguments.length; i<il ; i++) {
					$R.writeLog(arguments[i]);
				}
			};

			
		//	timers
		//	======
			
			$R.debugTimerStart = function (timerName) {
				$R.debugTimers.push({
					'name': timerName,
					'start': (new Date()).getTime()
				});
			};
			
			$R.debugTimerEnd = function () {
				var 
					_t = $R.debugTimers.pop(),
					_time = ((new Date()).getTime() - _t.start)
				;
				
				$R.log('TIMER / '+_t.name+': ' + _time);
				return _time;
			};
			
		
		//	output
		//	======
		
			//	will be shown in Show function
		
			$R.debugOutput = function () {
				for (var i=0, il=arguments.length; i<il ; i++) {
					$R.debugOutputs.push(arguments[i]);
				}
			};
			
			$R.printDebugOutput = function ()
			{
				if ($R.debug && !$R.custom); else { return; }

				//	vars
				_$debugFixed = $('#debugOutputFixed');
				_$debugVariable = $('#debugOutputVariable');
				
				//	fixed
				_$debugFixed.html('');
				for (var _k in $R.debugOutputsFixed) { _$debugFixed.append('<p>'+_k+': <strong>'+$R.debugOutputsFixed[_k]+'</strong></p>'); }
					
				//	variable
				_$debugVariable.html('');
				for (var i=0, _i=$R.debugOutputs.length; i<_i; i++) { _$debugVariable.append('<p>'+$R.debugOutputs[i]+'</p>'); }
				
				//	end. clear.
				$R.debugOutputs = [];
				$R.debugOutputsFixed = {};
			};
	}
	else
	{
		//	makes it faster
		//	when not debugging
		
		$R.writeLog 		= function () { return false; };
		$R.log 				= function () { return false; };
		
		$R.debugTimerStart 	= function () { return false; };
		$R.debugTimerEnd 	= function () { return false; };
		
		$R.debugOutput 		= function () { return false; };
		$R.printDebugOutput = function () { return false; };
	}
	
	
/* more css, outside frame */
/* ======================= */
	
	var 
		_document = $R.win.document,
		_html = _document.getElementsByTagName('html')[0],
		_html_identifier = (_html.id && _html.id > '' && _html.id.match(/^[a-z]/i) != null ? '#'+_html.id : 'html'),
		_body = _document.getElementsByTagName('body')[0],
		_body_identifier = (_body.id && _body.id > '' && _body.id.match(/^[a-z]/i) != null ? '#'+_body.id : 'body'),
		_coverElement = document.createElement('div'),
		_cssElement = _document.createElement('style'),
		_cssText = ''
		+	_html_identifier + '.readableVisible, '
		+	'html > ' + _body_identifier + '.readableVisible, '
		+	_body_identifier + '.readableVisible '
		+	'{ '
		+		'margin: 0 !important; padding: 0 !important; border: 0 !important; '
		+		'overflow: hidden !important; overflow-x: hidden !important; overflow-y: hidden !important; '
		+		'position: static !important; '
		+	'} '
		
		+	_html_identifier + '.readableBeforeVisible, '
		+	'html > ' + _body_identifier + '.readableBeforeVisible, '
		+	_body_identifier + '.readableBeforeVisible '
		+	'{ '
		+		'position: static !important; '
		+	'} '
		
		+	_html_identifier + '.readableVisible object, '
		+	_html_identifier + '.readableVisible embed, '
		+	_html_identifier + '.readableVisible iframe, '
		+	'html > ' + _body_identifier + '.readableVisible object, '
		+	'html > ' + _body_identifier + '.readableVisible embed, '
		+	'html > ' + _body_identifier + '.readableVisible iframe, '
		+	_body_identifier + '.readableVisible object, '
		+	_body_identifier + '.readableVisible embed, '
		+	_body_identifier + '.readableVisible iframe '
		+ 	'{ '
		+		'display: none !important; '
		+	'} '
		
		+	_html_identifier + '.readableVisible #readable_app_iframe, '
		+	'html > ' + _body_identifier + '.readableVisible #readable_app_iframe, '
		+	_body_identifier + '.readableVisible #readable_app_iframe, '
		+	'#readable_app_iframe '
		+ 	'{ '
		+		'display: block !important; '
		+		'overflow: auto !important; '
		+	'} '
	;

	/* css */
	_cssElement.setAttribute('id', 'readableCSS2');
	_cssElement.setAttribute('type', 'text/css');
	if (_cssElement.styleSheet) {_cssElement.styleSheet.cssText = _cssText; }
		else { _cssElement.appendChild(_document.createTextNode(_cssText)); }
	_body.appendChild(_cssElement);

	/* cover */
	_coverElement.setAttribute('id', 'readable_app_cover');
	_coverElement.setAttribute('style', 'display: none');
	_body.appendChild(_coverElement);

	
/* cache vars */
/* ========== */

	$R.$iframeDocument = $(document);
	$R.$document = $(_document);
	$R.$iframe = $R.$document.find('#readable_app_iframe');
	$R.$cover = $R.$document.find('#readable_app_cover');
	$R.visible = false;
	
	
/* check for rtl */
/* ============= */

	$R.rtl = false;
	if ($R.$document.find("div[dir='rtl'], table[dir='rtl'], td[dir='rtl']").length > 0)
		{ $('html').addClass('couldBeRTL'); }
	
	$R.makeRTL = function ()
	{
		$R.rtl = true;
		$('html')
			.attr('dir', 'rtl')
			.addClass('couldBeRTL')
			.addClass('rtl');
	};
	
	$R.makeNotRTL = function ()
	{
		$R.rtl = false;
		$('html')
			.attr('dir', '')
			.removeClass('rtl');
	};
	
	$R.$document.find('html, body').each(function (_i, _e)
	{
		switch (true) {
			case ($(_e).attr('dir') == 'rtl'):
			case ($(_e).css('direction') == 'rtl'):

			case ($(_e).attr('lang') == 'he'):
			case ($(_e).attr('lang') == 'he-il'):
			case ($(_e).attr('lang') == 'ar'):
			case ($(_e).attr('lang') == 'ur'):

				$R.makeRTL();
				return false;
		}
	});

			
/* more html, inside frame */
/* ======================= */
	
	$('#bodyContent').html(''
		+	'<div id="box">'
		+		'<div id="box_inner">'
		
		+			(($R.debug && !($R.custom)) ? 
					'<div id="debugOutputFixed"></div><div id="debugOutputVariable"></div>' : '')
		
		+			'<div id="embedded_logo">'
		+				($R.embedded && $R.embeddedOptions['logo'] > '' ?
						'<img src="'+$R.embeddedOptions['logo']+'" alt=""/>' :
						'<a href="#">'+$R.win.location.host+'</a>')
		+			'</div>'
		+			'<div id="rtl_box"><strong>Right to left?</strong><a href="#" id="rtl_box_on">Yes.</a><a id="rtl_box_off" href="#">No.</a></div>'
		+			'<div id="text"></div>'
		+			'<div id="menu">'
		+				'<a id="menu_close" href="#" title="You can also double-click the background, or single-click the left edge of the screen.">Close</a>'
		+				'<a id="menu_print" href="#" title="Only prints the text in Readable\'s overlay.">Print</a>'
		+				'<a id="menu_settings" target="_blank" title="Takes you to Readable\'s setup page, where you can alter your current style.">Change Style</a>'
		+				'<a id="menu_problem" target="_blank" title="Encountered a problem? Tell me about it.">Report Bug</a>'
		+			'</div>'
		
		+			($R.embedded ? '' : 
					'<div id="my_news"><a href="https://github.com/lordastley/readable">readable</a> is based on <a target="_blank" href="http://readable.tastefulwords.com/"><strong>Readable</strong></a> by Gabriel Coarna, and is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">cc-by-nc-sa 3.0</a>.</div>')

		+			'<div id="embedded_powered_by">Powered by <a target="_blank" href="http://readable.tastefulwords.com/?get"><strong>Readable</strong></a>.<br/>'+'Get <a target="_blank" href="http://readable.tastefulwords.com/?get">this view</a> on any website.</div>'
		+		'</div>'
		+	'</div>'
		+	'<div id="background"></div>'
		+	'<a id="fitts" href="#" title="Click to close Readable."></a>'
		+	'<div id="floating">'
		+		'<a href="#" id="floating_scroll_back" title="Just Clicked on an internal link? Scroll back to where you were."><strong>&larr;</strong> scroll back</a>'
		+		'<a href="#" id="floating_close" title="You can also double-click the background, single-click the left edge of the screen, or use the Close menu item.">close</a>'
		+		'<a href="#" id="floating_menu" title="Go to Readable\'s Menu, at the bottom of the overlay.">&darr;</a>'
		+	'</div>'
	);
	
	//	text var; it has now been created
	$R.$iframeText = $('#text');
	
	
/* setup ux */
/* ======== */

	$('#fitts').click(function(){ $R.hide(); return false; });
	$('#background').dblclick(function(){ $R.hide(); return false; });
	$('#embedded_logo').find('a, img').click(function(){ $R.hide(); return false; });

	$('#floating_menu').click(function(){ $(window).scrollTop($R.$iframeText.height()); return false; });
	$('#floating_close').click(function(){ $R.hide(); return false; });
	$('#floating_scroll_back').click(function(){ $(window).scrollTop($R.scrollPosition); $R.scrollPosition=0; $('#bottom_scroll_back').hide(); return false; });
	
	$('#menu_close').click(function(){ $R.hide(); return false; });
	$('#menu_print').click(function(){ window.print(); return false; });
	$('#menu_problem').attr('href', 'https://github.com/lordastley/readable/issues/');
	
	$('#rtl_box_on').click(function(){ $R.makeRTL(); return false; });
	$('#rtl_box_off').click(function(){ $R.makeNotRTL(); return false; });
	
	//	scroll-back
	$R.scrollPosition = 0;
	$R.goToNamedAnchor = function (_anchor)
	{
		var _$e = $("[id='"+_anchor+"'], [name='"+_anchor+"']");
		if (_$e.length > 0); else { return; }
		
		$R.scrollPosition = $(window).scrollTop();
		$('#bottom_scroll_back').show();
		
		$(window).scrollTop(_$e.offset().top);
	};

	
/* options */
/* ======= */

	
	$R.setOptions = function ()
	{
		var 
			_resetOptions = false, 
			_resetBase = false,
			_applyOptions = {}
		;

		//	if null, set default
		if ($R.options); else {	$R.options = $R._defaultOptions; }
		
		//	create applyOptions
		for (var _option in $R._defaultOptions)
		{
			switch (true)
			{
				case (!(_option in $R.options)):
				case ($R.options[_option].match(/[<>]/gi)):
					_applyOptions[_option] = $R._defaultOptions[_option];
					break;
					
				default:
					_applyOptions[_option] = $R.options[_option].replace(/quote\(([^\)]*?)\)/gi, '"$1"');
					break;
			}
		}
			
		if ($R.currentOptions)
		{
			_resetOptions = false;
			for (var _option in _applyOptions) {
				if (_applyOptions[_option] != $R.currentOptions[_option]) {
					_resetOptions = true; break;
				}
			}
			
			_resetBase = (_applyOptions['base'] != $R.currentOptions['base']);
		}
		else
		{
			_resetOptions = true;
			_resetBase = true;
		}
		
		if (_resetBase)
		{
			//	remove
			$('#baseCSS').remove();
			
			//	append
                        if (_applyOptions['base']){
			    $('head').append('<link id="baseCSS" rel="stylesheet" href="'+$R.path+'base-'+_applyOptions['base']+'-'+$R.compileTime+'.css'+'" type="text/css" />');
                        }
		}
		
		if (_resetOptions)
		{
			//	remove
			$('#optionsCSS').remove();
			
			//	google fonts
			var 
				_check_google_font = function (_match, _font)
				{
					if (_font in $R.googleFontsIndex); else { return; }
					
					var _font_key = _font.replace(/\s/gi, '+');
					$('head').append('<link href="//fonts.googleapis.com/css?family='+_font_key+'" rel="stylesheet" type="text/css" />');
				},
				_double_check_font = function (fontVariable)
				{
					_applyOptions[fontVariable].replace(/"([^",]+)"/gi, _check_google_font);
					_applyOptions[fontVariable].replace(/([^",\s]+)/gi, _check_google_font);				
				}
			;

			//	check fonts
			_double_check_font('text_font');
			_double_check_font('text_font_header');
			_double_check_font('text_font_monospace');
			
			_applyOptions['custom_css'].replace(/font-family: "([^",]+)"/gi, _check_google_font);
			_applyOptions['custom_css'].replace(/font-family: ([^",\s]+)/gi, _check_google_font);
			
			//	custom css
			//	use options in the custom_css
			_applyOptions['custom_css'] = _applyOptions['custom_css'].replace(/\[=custom_css\]/gi, '');
			_applyOptions['custom_css'] = _applyOptions['custom_css'].replace(
				/\[=([a-z_]+?)\]/gi,
				function (_match, _key) { return _applyOptions[_key]; }
			);
			
			//	create css
			var _cssText = (''
				+	'#body { '
				+		'font-family: [=text_font]; '
				+		'font-size: [=text_size]; '
				+		'line-height: [=text_line_height]; '
				+		'color: [=color_text]; '
				+		'text-align: '+(_applyOptions['text_align'] == 'justified' ? 'justify' : 'left')+'; '
				+	'} '
				
				+	'#background { background-color: [=color_background]; } '
				+	'#box { width: [=box_width]; background-color: [=color_background]; } '
				
				+	'a { color: [=color_links]; } '
				+	'a:visited { color: [=color_text]; } '

				+	'img { border-color: [=color_text]; } '
				+	'a img { border-color: [=color_links]; } '
				+	'a:visited img { border-color: [=color_text]; } '

				+	'h1 a, h2 a, a h1, a h2 { color: [=color_text]; } '
				+	'h1, h2, h3, h4, h5, h6 { '
				+		(_applyOptions['text_font_header'] == '' ? '' : 
						'font-family: [=text_font_header]; ')
				+	'} '

				+	'pre { background-color: [=color_background]; } '
				+	'pre, code { font-family: [=text_font_monospace]; } '
				+	'hr { border-color: [=color_text]; } '

				
				+	'#floating a { background-color: [=color_text]; color: [=color_background]; } '
				+	'#floating #floating_menu { background-color: transparent; color: [=color_text]; } '
				+	'#fitts:hover { background-color: [=color_text]; } '

				+	'#menu, #rtl_box { background-color: [=color_text]; color: [=color_background]; } '
				+	'#menu a, #rtl_box a { color: [=color_background]; border-color: [=color_background]; } '
                                +       '#my_news a { color: [=color_text]; } '
				
				+	'[=custom_css] '
				
				+	'html.rtl #body { text-align: ' + (_applyOptions['text_align'] == 'justified' ? 'justify' : 'right')+' !important; } '
				+	'h1, h2, h3, h4, h5, h6 { text-align: left; } '
				+	'html.rtl h1, html.rtl h2, html.rtl h3, html.rtl h4, html.rtl h5, html.rtl h6 { text-align: right !important; } '
				
			).replace(
				/\[=([a-z_]+?)\]/gi,
				function (_match, _key) { return _applyOptions[_key]; }
			);
		
			//	append
			var _cssElement = document.createElement('style');
				_cssElement.setAttribute('type', 'text/css');
				_cssElement.setAttribute('id', 'optionsCSS');
				
			if (_cssElement.styleSheet) { _cssElement.styleSheet.cssText = _cssText; }
				else { _cssElement.appendChild(document.createTextNode(_cssText)); }
		
			$('head').append(_cssElement);
			
			//	cover background-color
			$R.$cover.css('background-color', _applyOptions['color_background']);
		}
		
		//	current options, not modified
		$R.currentOptions = $R.options;

		//	change settings
		var changeSettingsURL = ''
			+	$R.linksPath + '?'
			+	'setup'
			+	'&change'
		;
	
		for (var __opt in $R.currentOptions) {
			changeSettingsURL += 
				'&' + __opt + '=' + encodeURIComponent($R.currentOptions[__opt]);
		}
	
		$('#menu_settings').attr('href', changeSettingsURL);
	};

	$R.setRTL = function ()
	{
		//	append
		var _cssElement = document.createElement('style');
			_cssElement.setAttribute('type', 'text/css');
			_cssElement.setAttribute('id', 'rtlCSS');
			
		if (_cssElement.styleSheet) { _cssElement.styleSheet.cssText = _cssText; }
			else { _cssElement.appendChild(document.createTextNode(_cssText)); }
	
		$('head').append(_cssElement);
	};
	
	
	$R._defaultOptions = {
		'text_font': 			'"Palatino Linotype", Palatino, "Book Antigua", Georgia, serif',
		'text_font_monospace':	'"Courier New", Courier, monospace',
		'text_font_header':		'',

		'text_size': 			'18px',
		'text_line_height': 	'1.5',
		'box_width': 			'30em',

		'color_background': 	'#F5F5F5',
		'color_text': 			'#000000',
		'color_links': 			'#0000FF',
		
		'text_align': 			'normal',
		'base': 				'blueprint',
		'custom_css':			''
	};

	
	$R.googleFontsIndex = {};
	$R.googleFontsArray =
	[
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
	];

	for (var i=0, ii=$R.googleFontsArray.length; i<ii; i++) {
		$R.googleFontsIndex[$R.googleFontsArray[i]] = 1;
	}
	

/* content */
/* ======= */

	$R.getContent = function (checkIfHomePage)
	{
		//	homepage?
		if ((checkIfHomePage == undefined) || (checkIfHomePage == true))
		{
			if ($R.win.location.href == ($R.win.location.protocol + '//' + $R.win.location.host + '/'))
			{
				//	write directly into Text
				$R.displayHTML(''
					+	'<h1>Homepage</h1>'
					+	'<p>Readable doesn\'t do well with homepages. It\'s only designed to work on <strong>article pages</strong>.</p>'
					+	'<p>An <strong>article page</strong> is any page that contains one large block of text &mdash; like, for example, all newspaper articles.</p>'
					+	'<br/>'
					+	'<p><a href="#" onclick="window.parent.$readable.getContent(false); return false;">Process the page anyway?</a></p>'
					+	'<br/><br/>'
				);
				return;
			}
		}
		
		//	selection or whole
		switch (true)
		{
			case ($R.getContent__manualSelection()): return;
			case ($R.getContent__findHere()): return;
		}
		
		//	no content found; display body element
		//	======================================

			if ($R.debug) { $R.log('Found nothing. Displaying body element.'); }
			if ($R.debug) { $R.debugOutput('Displaying BODY.'); }

			//	measure and display
			if ($R.debug) { $R.debugTimerStart('get/processTargetHTML'); }

				$R.debugOutputsFixed['TitleSource'] = 'Body';
				var _html = $R.processHTML__getHTMLToProcess([$R.$document.find('body').get(0)]);
					_html = $R.processHTML(_html);
					_html = $R.getContent__findHere__findTitleInHTML(_html, 'second-try');
					_html = ((_html.substr(0, 14) == '<found_title/>') ? _html.substr(14) : _html);
				$R.displayHTML(_html);

			if ($R.debug) { $R.debugOutputsFixed['ProcessHTML'] = $R.debugTimerEnd(); }
	};
	
	
	$R.getContent__manualSelection = function ()
	{
		var 
			_selection = $R.sel.getSelection($R.win),
			_range = $R.sel.getRange(_selection),
			_html = $R.sel.getRangeHTML(_range),
			_text = $R.sel.getRangeText(_range)
		;
		
		if (_html > '' && _text > ''); else
		{
			_html = null;
			_text = null;
			
			$R.$document.find('frame, iframe').each(function (_i, _e)
			{
				if (_e.getAttribute('id') == 'readable_app_iframe') { return; }
				
				try
				{
					var
						__doc = $(_e).contents().get(0),
						__win = $R.sel.getWindowFromDocument(__doc),
						__selection = $R.sel.getSelection(__win),
						__range = $R.sel.getRange(__selection),
						__html = $R.sel.getRangeHTML(__range),
						__text = $R.sel.getRangeText(__range)
					;
						
					if (__html > '' && __text > '')
					{
						_html = __html;
						_text = __text;
						
						// stop the each
						return false;
					}
				}
				catch(e) { }
			});
		}
		
		//	haven't found anything		
		if (_html > '' && _text > ''); else { return false; }

		//	probably selected something by mistake
		if ($R.getContent__nrWords(_text) > 50); else { return false; }
		
		//	got some selected text; show it
		$R.displayHTML($R.processHTML(_html));

		//	return true
		return true;
	};
	
/* functions */	
/* ========= */
	
	$R.sel = {};

	$R.sel.getWindowFromDocument = function (theDocument)
	{
		if (theDocument); else { return null; }
		
		if ('defaultView' in theDocument) {
			arguments.calee = function (theDocument) {
				if (theDocument); else { return null; }
				return theDocument.defaultView;
			};
		}
		else if ('parentWindow' in theDocument) {
			arguments.calee = function (theDocument) {
				if (theDocument); else { return null; }
				return theDocument.parentWindow;
			};
		}
		else {
			arguments.calee = function (theDocument) {
				return null;
			};
		}
		
		return arguments.calee(theDocument);
	};


	$R.sel.getSelection = function (theWindow)
	{
		if (theWindow); else { return null; }
	
		if ('getSelection' in theWindow) {
			arguments.calee = function (theWindow) {
				if (theWindow); else { return null; }
				return theWindow.getSelection();
			};
		}
		else if ('selection' in theWindow.document) {
			arguments.calee = function (theWindow) {
				if (theWindow); else { return null; }
				return theWindow.document.selection;
			};
		}
		else {
			arguments.calee = function (theWindow) {
				return null;
			};
		}
		
		return arguments.calee(theWindow);
	};


	$R.sel.getRange = function (selection)
	{
		if (selection); else { return null; }
	
		if ('getRangeAt' in selection) {
			arguments.calee = function (selection) {
				if (selection); else { return null; }
				if (selection.rangeCount > 0) { return selection.getRangeAt(0); }
				else { return null; }
				//	doesn't work in old versions of safari 
				//	... I don't care
			};
		}
		else if ('createRange' in selection) {
			arguments.calee = function (selection) {
				if (selection); else { return null; }
				return selection.createRange();
			};
		}
		else {
			arguments.calee = function (selection) {
				return null;
			};
		}
		
		return arguments.calee(selection);
	};


	$R.sel.getRangeHTML = function (range)
	{
		if (range); else { return null; }
		
		if ('htmlText' in range) {
			arguments.calee = function (range) {
				if (range); else { return null; }
				return range.htmlText;
			};
		}
		else if ('surroundContents' in range) {
			arguments.calee = function (range) {
				if (range); else { return null; }
				var dummy = range.commonAncestorContainer.ownerDocument.createElement("div");
				dummy.appendChild(range.cloneContents());
				return dummy.innerHTML;
			};
		}
		else {
			arguments.calee = function (range) {
				return null;
			};
		}
		
		return arguments.calee(range);
	};


	$R.sel.getRangeText = function (range)
	{
		if (range); else { return null; }
		
		if ('text' in range) {
			arguments.calee = function (range) {
				if (range); else { return null; }
				return range.text;
			};
		}
		else if ('surroundContents' in range) {
			arguments.calee = function (range) {
				if (range); else { return null; }
				var dummy = range.commonAncestorContainer.ownerDocument.createElement("div");
				dummy.appendChild(range.cloneContents());
				return dummy.textContent;
			};
		}
		else {
			arguments.calee = function (range) {
				return null;
			};
		}
		
		return arguments.calee(range);
	};

	
	$R.getContent__findHere = function ()
	{
		//	clear what we did before -- everything
		//	======================================

			var 
				_readable_attrs =
				[
					'readable_attr_mark_keep',
					'readable_attr_mark_delete',
					'readable_attr_only_content',
					
					'readable_attr_big_image'
				],
				_readable_classes = 
				[
					'readable_class_is_hidden',

					'readable_class_is_paragraph',
					'readable_class_big_image'
				]
			;
			
			$.each(_readable_attrs,	function (_i, _attr) { $R.$document.find('['+_attr+']').removeAttr(''+_attr); });
			$.each(_readable_classes, function (_i, _class) { $R.$document.find('.'+_class).removeClass(''+_class); });
	
	
		//	get target
		//	==========

			if ($R.debug) { $R.debugTimerStart('getTargetElement'); }
			var 
				_html = '',
				
				_custom_target = ($R.custom && ($R.customOptions['selector'] > '') ? $R.$document.find($R.customOptions['selector']) : false),
				_custom_target = (_custom_target.length && (_custom_target.length > 0) ? _custom_target.get(0) : false),
				
				_target = (_custom_target ? _custom_target : $R.getContent__findHere__getTargetElement()),
				_$target = $(_target),
				
				_prevs = [],
				_prev = false,
				_prev_test = function (_x)
				{
					if (_x.nodeType); else { return false; }
					if (_x.nodeType == 1); else { return false; }
					
					switch (true)
					{
						//	is a heading
						case (_x.tagName.match(/^h(1|2|3|4|5|6)$/gi) != null):
						
						//	is paragraph, blockquote
						case (_x.tagName.match(/^p|blockquote$/gi) != null):
						case ($(_x).hasClass('readable_class_is_paragraph')):
						
						//	contains h1
						case (_x.getElementsByTagName('h1').length > 0):
						case (_x.tagName.match(/^header$/i) != null):
						
						//	is/was candidate
						case ($.data(_x, 'readable_candidate_key') > ''):
							return true;
					}

					//	just text
					var _text_computation = $R.getContent__computeTextForElement(_x);
					if (_text_computation._theoretical_paragraphs_3_lines > 2 && _text_computation._links_to_text_ratio < 0.10) { return true; }

					//	nope
					return false;
				}
			;
			if ($R.debug) { $R.debugOutputsFixed['GetTarget'] = $R.debugTimerEnd(); }

			//	if not target, return
			if (_target); else { return false; }

		
		//	mark target
		//	and RTL
		//	=======
		
			//	mark
			_$target.attr('readable_the_target', '1');
		
			//	RTL
			switch (true)
			{
				case (_$target.attr('dir') == 'rtl'):
				case (_$target.css('direction') == 'rtl'):
					$R.makeRTL();
					break;
			}

			
		//	_html
		//	and document title/h1?
		//	======================
		
			if ($R.debug) { $R.debugTimerStart('get/processTargetHTML'); }

				_html = $R.processHTML($R.processHTML__getHTMLToProcess([_target]))
				_html = $R.getContent__findHere__findTitleInHTML(_html, 'first-try');
			
			if ($R.debug) { $R.debugOutputsFixed['ProcessHTML'] = $R.debugTimerEnd(); }

			
		//	if title not found, check previous siblings
		//	if title was found, _html will be prefixed
		//	==========================================
		
			if (_html.substr(0, 14) == '<found_title/>')
			{
				//	title log
				if ($R.debug) { $R.log('Found title in Target.'); }
				if ($R.debug) { $R.debugOutputsFixed['TitleSource'] = 'Target'; }
			}
			else
			{
				//	check previous siblings
				//	=======================
				
					_prev = _target;
					
					while (true)
					{
						//	get
						_prev = _prev.previousSibling;
						if (_prev); else { break; }

						//	test
						if (_prev_test(_prev)); else { continue; }

						//	put
						_prevs.unshift(_prev);
						
						if ($R.debug) { $R.log('Found previous-sibling:', _prev); }
						
						//	break on title
						if ((_prev.tagName.toLowerCase() == 'h1') || (_prev.getElementsByTagName('h1').length > 0)) { break; }
					}
					
					if ($R.debug) { $R.debugOutputsFixed['PreviousSiblings'] = _prevs.length; }
					if ($R.debug) { $R.log('Found '+_prevs.length+' previous siblings.'); }

					//	add _prevs html
					_html = $R.processHTML($R.processHTML__getHTMLToProcess(_prevs)) + _html;
					
					//	check for title again
					_html = $R.getContent__findHere__findTitleInHTML(_html, 'second-try');
				
				//	if not found title, get title from document.title
				//	if title was found, _html will be prefixed
				//	==========================================
				
					if (_html.substr(0, 14) == '<found_title/>')
					{
						//	title log
						if ($R.debug) { $R.log('Found title in Previous Siblings.'); }
						if ($R.debug) { $R.debugOutputsFixed['TitleSource'] = (_prevs.length > 0 ? 'PreviousSecond' : 'Second'); }
					}
					else
					{
						_html = $R.getContent__findHere__addDocumentTitleToHTML(_html);
							
						if (_html.substr(0, 14) == '<found_title/>')
						{
							//	title log
							if ($R.debug) { $R.log('Used Document\'s title.'); }
							if ($R.debug) { $R.debugOutputsFixed['TitleSource'] = 'Document'; }
						}
					}
			}

			if (_html.substr(0, 14) == '<found_title/>')
			{
				//	skip
				_html = _html.substr(14);
			}
			else
			{
				//	no title log
				if ($R.debug) { $R.log('No title at all.'); }
				if ($R.debug) { $R.debugOutputsFixed['TitleSource'] = 'None'; }
			}
			
			
		//	show
		//	====
			
			$R.displayHTML(_html);
			return true;
	};
	
	
	$R.getContent__findHere__findTitleInHTML = function (_html, _rule_set)
	{
		//	rule sets are the possible header matches
		//	when we look for a title in the target html, we only look for h1 -- and maybe h2
		//	when we look for a title in the target html plus the previous children html we look for all tags
	
		var 
			_rule_sets =
			{
				'first-try': ['h1'],
				'second-try': ['h1', 'h2', 'h3', 'h4', 'h5']
			},
			_possibles = _rule_sets[_rule_set],
			_html_until = '',
			_tag_start = -1,
			_found = false
		;

		for (var i=0, _i=_possibles.length; i<_i; i++)
		{
			//	get start
			_tag_start = _html.indexOf('<'+_possibles[i]);
			
			//	valid start?
			if (_tag_start > -1); else { continue; }
			
			//	html until
			_html_until = _html.substr(0, _tag_start);
			_html_until = _html_until.replace(/<([^>]+)>/gi, '');
			_html_until = _html_until.replace(/\s+/gi, ' ');
			
			//	valid?
			if (_html_until.length < 125)
			{
				//	make it into a H1
				_html = _html.replace((new RegExp('<'+_possibles[i]+'[^>]*>([\\s\\S]+?)</'+_possibles[i]+'>', 'i')), '<h1 class="found_title">$1</h1>');
				
				//	break
				_found = true;
				break;
			}
		}

		//	return with prefix (if found)
		return ((_found ? '<found_title/>' : '') + _html);
	};
	
	
	$R.getContent__findHere__addDocumentTitleToHTML = function (_html)
	{
		//	does the document have a title?
		if ($R.$document.get(0).title && $R.$document.get(0).title > ''); else { return _html; }
	
		var
			_doc_title = $R.$document.get(0).title,
			_title_location = -1,
			_html_until_title = '',
			_doc_title_parts = [],
			_doc_title_pregs =
			[
				/( [-][-] |( [-] )|( [>][>] )|( [<][<] )|( [|] )|( [\/] ))/i,
				/(([:] ))/i
			]
		;
	
		//	loop through pregs
		for (var i =0, _i=_doc_title_pregs.length; i<_i; i++)
		{
			//	split
			_doc_title_parts = _doc_title.split(_doc_title_pregs[i]);
			
			//	break if we managed a split
			if (_doc_title_parts.length > 1) { break; }
		}
			
		//	sort title parts
		//	longer goes higher up -- i.e. towards 0
		_doc_title_parts.sort(function (a, b)
		{
			switch (true)
			{
				case (a.length > b.length): return -1;
				case (a.length < b.length): return 1;
				default: return 0;
			}
		});
		
		//	more than one word?
		_doc_title = (_doc_title_parts[0].split(/\s+/i).length > 1 ? _doc_title_parts[0] : _doc_title);
		
		//	return
		return ''
			+ '<found_title/>'
			+ '<h1 class="document_title">'+_doc_title+'</h1>'
			+ _html
		;
	};
	
	
	$R.getContent__findHere__getTargetElement = function ()
	{
		var
			_candidates_dictionary = {},
			_candidates_dictionary_initial_length = 0,
			_candidates_array = [],
			_candidates_array_length = 0
		;
		
		//	DIVs that are actually Ps
		//	=========================
	
			$R.$document.find('div').each(function (_i, _e)
			{
				if (_e.childNodes.length == 1); else { return; }
				if (_e.childNodes[0].nodeType == 3); else { return; }
				
				var _text_computation = $R.getContent__computeTextForElement(_e, false);
				if (_text_computation._theoretical_lines_of_65_characters > 2); else { return; }
				if (_text_computation._theoretical_paragraphs_50_words > 0.75); else { return; }
				
				if ($R.debug) { $R.log('DIV is paragraph:', _e); }
				$(_e).addClass('readable_class_is_paragraph');
			});
		
		
		//	all hidden elements
		//	===================
		
			var _$all_hidden = $R.$document.find('ul, ol, li, dd, table, tr, td, div, h1, h2, h3, h4, h5').filter(':hidden');
			_$all_hidden.each(function (_i, _hidden_child)
			{
				_contained = false;
				
				//	make sure a parent doesn't already contain it
				_$all_hidden.each(function (_i, _hidden_parent)
				{
					if ($.contains(_hidden_parent, _hidden_child))
					{
						_contained = true;
						return false;
					}
				});
				
				//	add to array
				if (_contained); else
				{
					//	delete and add class
					$(_hidden_child).attr('readable_attr_mark_delete', 1).addClass('readable_class_is_hidden');
					if ($R.debug) { $R.log('Hidden element:', _hidden_child); }
				}
			});
		
		
		//	text containing elements
		//	========================
		
			$R.$document.find('p, br+br, div.readable_class_is_paragraph, h2, h3, h4, h5, pre').each(function (_i, _e)
			{
				//	skip hidden elements
				if ($(_e).hasClass('readable_class_is_hidden')) { return; }
			
				//	get parent
				var _parent = $R.getContent__findHere__findPropperParent(_e);
				if (_parent); else { return; }

				//	skip hidden parent
				if ($(_parent).hasClass('readable_class_is_hidden')) { return; }
				
				//	get key
				var _dictionary_key = $.data(_parent, 'readable_candidate_key');
				
				//	add to dictionary
				if (_dictionary_key && _dictionary_key in _candidates_dictionary); else
				{
					//	set key
					_dictionary_key = 'k'+(_candidates_dictionary_initial_length++);
					$.data(_parent, 'readable_candidate_key', _dictionary_key);

					//	add to dictionary
					//	this is the item format
					_candidates_dictionary[_dictionary_key] =
					{
						'_element': 							_parent,
						'_paragraphs': 							0,
						'_computation': 						false,
						'_points': 								0,
						'_points_before_dom_order__3':			0,
						'_points_before_subs_addition__2':		0,
						'_points_before_link_ratio__1':			0
					};
				};
				
				//	increment paragraphs
				_candidates_dictionary[_dictionary_key]['_paragraphs'] += 1;
			});
		
			if ($R.debug)
			{
				//	print candidates
				$R.log('Candidates. Preliminary:');
				$.each(_candidates_dictionary, function (_k, _e) { $R.log(_e); });
			}
			
			
		//	calculate/set element points
		//	and remove some elemeents
		//	=========================

			$.each(_candidates_dictionary, function (_key, _item)
			{
				var
					_element = _item._element,
					_parent = null,
					_points_computation = $R.getContent__computePointsForElement(_element, _item._paragraphs),
					_delete = false
				;
				
				switch (true)
				{
					//	less than 50 words
					case (_points_computation._text_computation._theoretical_paragraphs_3_lines < 1):
						if ($R.debug) { $R.log('Remove candidate. Less than 50 words:', _element); }
						_delete = true;
						break;
					
					//	less than 100 words, and big link ratio
					case ((_points_computation._text_computation._theoretical_paragraphs_3_lines < 2) && (_points_computation._text_computation._links_to_text_ratio >= 0.25)):
						if ($R.debug) { $R.log('Remove candidate. Less than 100 words and link ratio:', _element); }
						_delete = true;
						break;
				}
				
				if (_delete)
				{
					//	delete from dictionary
					delete _candidates_dictionary[_key];
				}
				else
				{
					//	set computation/points
					_candidates_dictionary[_key]['_computation'] = _points_computation;
					_candidates_dictionary[_key]['_points'] = _points_computation._points;
					_candidates_dictionary[_key]['_points_before_link_ratio__1'] = _points_computation._points_before_link_ratio;
					_candidates_dictionary[_key]['_points_before_subs_addition__2'] = _points_computation._points;
				}
			});
		
		
		//	build _candidates_array
		//	=======================
		
			for (var i=0; i<_candidates_dictionary_initial_length; i++)	{
				if (('k'+i) in _candidates_dictionary) {
					_candidates_array.push(_candidates_dictionary['k'+i])
				}
			}
			_candidates_length = _candidates_array.length;
			

		//	do the dom-order
		//	================
		
			$R.log('Candidates before dom-order:', _candidates_length + ' candidates');
			$.each(_candidates_array, function (_i, _e) { $R.log(_e); });
		
			//	loop
			$.each(_candidates_array, function (_i, _item)
			{
				_candidates_array[_i]['_points_before_dom_order__3'] = _candidates_array[_i]._points;
				_candidates_array[_i]['_points'] *= (_candidates_length / (_i + 1));
			});
			
			
		//	do we actually have some elements?
		//	==================================
		
			switch (true)
			{
				case (_candidates_length == 0):
					if ($R.debug) { $R.log('No candidates found.'); }
					if ($R.debug) { $R.debugOutput('No candidates found.'); }
					return false;
					
				case (_candidates_length == 1):
					if ($R.debug) { $R.log('Only one candidate found:', _candidates_array[0]._element); }
					if ($R.debug) { $R.debugOutput('Only one candidate found.'); }
					return _candidates_array[0]._element;
			}
			

		//	subs addition
		//	=============
			
			for (var i=0; i<_candidates_length; i++)
			{
				for (var ii=0; ii<_candidates_length; ii++)
				{
					if ($.contains(_candidates_array[i]._element, _candidates_array[ii]._element))
					{
						//	debug
						if ($R.debug) { $R.log('Subs Addition (parent, child):', _candidates_array[i], _candidates_array[ii]); }
					
						//	add points
						_candidates_array[i]._points += 1
							* (0.66 * _candidates_array[ii]._points)
							* (1 - (2 * _candidates_array[i]._computation._text_computation._links_to_text_ratio))
							* (1 - (2 * _candidates_array[i]._computation._text_computation._links_words_nr_to_words_nr_ratio))
						;
					
						//	only one
						break;
					}
				}
			}

			
		//	sort candidates_copy
		//	bigger goes higher up -- i.e. towards 0
		//	=======================================
		
			_candidates_array.sort(function (a, b)
			{
				switch (true)
				{
					case (a._points > b._points): return -1;
					case (a._points < b._points): return 1;
					default: return 0;
				}
			});

			if ($R.debug)
			{
				//	print candidates
				$R.log('Candidates final:');
				$.each(_candidates_array, function (_i, _e) { $R.log(_e); });
			}
		
		
		//	common parent element
		//	if some of the first N elements have the same parent, maybe that parent is the correct candidate
		//	================================================================================================
		
			if (_candidates_length > 5)
			{
				var
					_first_element = _candidates_array[0]._element,
					_common_parent =  $R.getContent__findHere__findPropperParent(_first_element),
					_common_parent_nr = 0,
					_total_points = _candidates_array[0]._points
				;
				
				//	loop through the elements
				for (var i=1; i<_candidates_length; i++)
				{
					var 
						_element = _candidates_array[i]._element,
						_parent = $R.getContent__findHere__findPropperParent(_element)
					;
					
					switch (true)
					{
						case (_element == _common_parent):
							_common_parent_nr++;
							break;
							
						case (_parent == _common_parent):
							_common_parent_nr++;
							_total_points += _candidates_array[i]._points;
							break;
					}
				}

				//	enough elements with the common parent?
				if ((_common_parent_nr > Math.floor(_candidates_length/2)) || (_common_parent_nr > 4))
				{
					//	get points for this common element
					//	compensate for dom-order
					var 
						_common_parent_points = 1
							* $R.getContent__computePointsForElement(_common_parent, 'calculate')._points
							* _candidates_length
					;	
						
					//	does this element have more points thann all of its children?
					if (_common_parent_points > _total_points)
					{
						if ($R.debug) { $R.log('Candidates common parent:', _common_parent); }
						if ($R.debug) { $R.debugOutput('Found common parent of candidates.'); }
						return _common_parent;
					}
				}
			}
			
			
		//	finally return
		//	==============

			if ($R.debug) { $R.log('First candidate:', _candidates_array[0]._element); }
			return _candidates_array[0]._element;
	};
	
	
	/* compute functions */
	/* ================= */

	$R.getContent__computeTextForElement__getElementValidText = function (_element, _skip_candidates)
	{
		//	global (for recursive) vars
		var 
			_text = '',
			_links = '',
			_links_nr = 0,
			_candidates_nr = 0,
			_hidden_nr = 0,
			
			_current_element = null,
			_$current_element = null,
			_current_write_to = 'text',
			
			_skip_these = '|button|canvas|embed|frame|input|iframe|link|map|marquee|nobr|noframes|noscript|object|script|select|style|textarea|'
		;
		
		//	recursive function
		var _recursive = function (_children)
		{
			for (var i=0, _i=_children.length; i<_i; i++)
			{
				_current_element = _children[i];
				
				if (_current_element.nodeType === 3)
				{
					switch (_current_write_to)
					{
						case 'text':	_text 	+= ' ' + _current_element.nodeValue; break;
						case 'links': 	_links 	+= ' ' + _current_element.nodeValue; break;
					}
				}
				else if (_current_element.nodeType === 1)
				{
					//	skip stuff
					if (_skip_these.indexOf('|'+_current_element.tagName.toLowerCase()+'|') > -1) { continue; }
				
					if (_current_element.tagName.toLowerCase() == 'a')
					{
						//	a link
						_links_nr++;
						
						_current_write_to = 'links';
							_recursive(_current_element.childNodes);
						_current_write_to = 'text';
					}
					else
					{
						//	skip candidates
						if (_skip_candidates && $.data(_current_element, 'readable_candidate_key') > '') { _candidates_nr++; continue; }

						//	skip hidden
						if ($(_current_element).hasClass('readable_class_is_hidden')) { _hidden_nr++; continue; }
					
						//	call self
						_recursive(_current_element.childNodes);
					}
				}
			}
		};

		//	look for reasons not to do it
		switch (true)
		{
			case (!(_element.tagName > '')):
			case ((_skip_these.indexOf('|'+_element.tagName.toLowerCase()+'|') > -1)):
				break;
				
			default:
				//	run it -- if valid element
				_recursive(_element.childNodes);
				break;
		}
		
		//	return
		return {
			'_text': 			_text.replace(/\s+/gi, ' '),
			'_links': 			_links.replace(/\s+/gi, ' '),
			'_links_nr': 		_links_nr,
			'_candidates_nr': 	_candidates_nr
		};
	};
	
	$R.getContent__computeTextForElement = function(_element, _skip_candidates_in_text_computation)
	{
		var
			//	valid text
			_valid_text = 							$R.getContent__computeTextForElement__getElementValidText(_element, _skip_candidates_in_text_computation),
		
			//	text
			_text = 								_valid_text._text,
			_text_length = 							_text.length,
			_text_words_nr = 						$R.getContent__nrWords(_text),
			
			//	links
			_links = 								_valid_text._links,
			_links_nr = 							_valid_text._links_nr,
			_links_length = 						_links.length,
			_links_words_nr = 						$R.getContent__nrWords(_links),

			//	theoretical
			_theoretical_lines_of_65_characters = 	(_text_length / 65),
			_theoretical_paragraphs_3_lines = 		(_theoretical_lines_of_65_characters / 3),
			_theoretical_paragraphs_5_lines = 		(_theoretical_lines_of_65_characters / 5),
			_theoretical_paragraphs_50_words = 		(_text_words_nr / 50),
			_theoretical_paragraphs_80_words = 		(_text_words_nr / 80),

			//	links ratio
			_links_to_text_ratio = 					(_links_length > _text_length ? 1 : (_links_length / _text_length)),
			_links_words_nr_to_words_nr_ratio =		(_links_words_nr > _text_words_nr ? 1 : (_links_words_nr / _text_words_nr))
		;
		
		//$R.log('Valid text:', _element, _valid_text);
		
		return {
			'_text_length': 						_text_length,
			'_text_words_nr': 						_text_words_nr,

			'_links_length':						_links_length,
			'_links_words_nr':						_links_words_nr,
			'_links_nr':							_links_nr,
			
			'_theoretical_lines_of_65_characters':	_theoretical_lines_of_65_characters,
			'_theoretical_paragraphs_3_lines':		_theoretical_paragraphs_3_lines,
			'_theoretical_paragraphs_5_lines':		_theoretical_paragraphs_5_lines,
			'_theoretical_paragraphs_50_words':		_theoretical_paragraphs_50_words,
			'_theoretical_paragraphs_80_words':		_theoretical_paragraphs_80_words,
			
			'_links_to_text_ratio':					_links_to_text_ratio,
			'_links_words_nr_to_words_nr_ratio':	_links_words_nr_to_words_nr_ratio
		};
	};
	
	
	$R.getContent__computePointsForElement = function(_element, _paragraphsInElement)
	{
		if (_paragraphsInElement == 'calculate')
		{
			//	if we don't have it, get it now
			_paragraphsInElement = $(_element).find('p, br+br, pre, div.readable_class_is_paragraph, h2, h3, h4, h5').length;
		}
	
		var
			_text_computation = $R.getContent__computeTextForElement(_element, true),
			
			_points_before_link_ratio = (
				((0
					+ (_paragraphsInElement * 5)										/*  5 */
					+ (_text_computation._theoretical_paragraphs_3_lines * 4)			/*  4 */
					+ ((_text_computation._theoretical_paragraphs_5_lines * 1.5) * 3)	/*  3 */
					+ _text_computation._theoretical_paragraphs_50_words				/*  1 */
					+ ((_text_computation._theoretical_paragraphs_80_words * 1.5))		/*  1 */
				)/14)																	/* 14 */
			),
			
			_points = ((0
				+ (3 * (_points_before_link_ratio * (1 - _text_computation._links_to_text_ratio)))
				+ (1 * (_points_before_link_ratio * (1 - _text_computation._links_words_nr_to_words_nr_ratio)))
			)/4)
		;

		return {
			'_text_computation':					_text_computation,
			'_points':								_points,
			'_points_before_link_ratio':			_points_before_link_ratio
		};
	};


	
	/* helper functions */	
	/* ================ */
	
	$R.getContent__findHere__findPropperParent = function (_e)
	{
		var _p = _e;
			
		while(true)
		{
			_p = _p.parentNode;

			//	no parent node
			if (_p && _p.nodeType == 1); else { return false; }
			
			//	propper parent
			//	only return some element-types
			//	and make sure they have width/height
			//	if (_p.offsetWidth === 0) { continue; }
			//	if (_p.offsetHeight === 0) { continue; }
			if (_p.tagName.match(/^(article|body|div|dd|li|section|td)$/gi) != null); else { continue; }
			//if (_p.tagName.match(/^(article|body|div|ol|section|td|ul)$/gi) != null); else { continue; }
			
			//	return element
			return _p;
		}
	};
	
	$R.getContent__nrWords = function (_text)
	{
		var _words_match = _text.match(/\s+/gi);
		return (1 + (_words_match != null ? (_words_match.length) : 0));
	};

	
	$R.processHTML__getHTMLToProcess = function (_elements)
	{
		var _h = '';
		
		//	mark ...
		//	stuff to keep
		//	stuff to take out
		
		$.each(_elements, function (_i_big, _e_big)
		{
			//	readable__ classes
			$(_e_big).find('.readable__delete').attr('readable_attr_mark_delete', '1');
			$(_e_big).find('.readable__keep').attr('readable_attr_mark_keep', '1');

			//	hidden elements
			//	are already removed in the getContent__findHere__getTargetElement function
			
			//	headings with too much content
			$(_e_big).find('h1, h2, h3, h4, h5').each(function (_i, _e)
			{
				var 
					_text_computation = $R.getContent__computeTextForElement(_e, false),
					_content_it = false
				;
				
				switch (_e.tagName.toLowerCase())
				{
					case 'h1':
						//	not more than 130 characters
						_content_it = (_text_computation._theoretical_lines_of_65_characters > 2);
						break;
						
					case 'h2':
						//	not more than two paragraphs -- (65 * 3 * 2) characters
						_content_it = (_text_computation._theoretical_paragraphs_3_lines > 2);
						break;
						
					case 'h3':
					case 'h4':
					case 'h5':
						//	not more than five paragraphs -- (65 * 3 * 5) characters
						_content_it = (_text_computation._theoretical_paragraphs_3_lines > 5);
						break;
				}
				
				//	content?
				if (_content_it)
				{
					$(_e).attr('readable_attr_only_content', '1');
					if ($R.debug) { $R.log('Remove. Heading with too much content:', _e); }
				}
			});

			
			//	styling with too much content
			$(_e_big).find('b, i, e, strong, em').each(function (_i, _e)
			{
				//	not more than five paragraphs -- (65 * 5 * 5) characters
				if ($R.getContent__computeTextForElement(_e, false)._theoretical_paragraphs_5_lines > 5)
				{
					//	content
					$(_e).attr('readable_attr_only_content', '1');
					if ($R.debug) { $R.log('Remove. Emphasis with too much content:', _e); }
				}
			});

				
			//	big Images
			$(_e_big).find('img').each(function (_i, _e)
			{
				var
					_width = _e.width,
					_width = ((_e.naturalWidth && _e.naturalWidth > _width) ? _e.naturalWidth : _width),
					_width = ((_e.clientWidth && _e.clientWidth > _width) ? _e.clientWidth : _width),
					_width = ((_e.offsetWidth && _e.offsetWidth > _width) ? _e.offsetWidth : _width),
				
					_height = _e.height,
					_height = ((_e.naturalHeight && _e.naturalHeight > _height) ? _e.naturalHeight : _height),
					_height = ((_e.clientHeight && _e.clientHeight > _height) ? _e.clientHeight : _height),
					_height = ((_e.offsetHeight && _e.offsetHeight > _height) ? _e.offsetHeight : _height)
				;
				
				if ((_width * _height) > 10000)
				{
					$(_e).attr('readable_attr_big_image', '1');
					$(_e).addClass('readable_class_big_image');
					if ($R.debug) { $R.log('Mark. Big image:', _e); }
				}
			});
			
			
			//	images in links
			$(_e_big).find('a > img').each(function (_i, _e)
			{
				if ($(_e).attr('readable_attr_big_image') == '1') { return; }
				
				//	remove
				$(_e.parentNode).attr('readable_attr_mark_delete', '1');
				if ($R.debug) { $R.log('Remove. Small image in link:', _e.parentNode); }
			});
			
			
			//	table/ul/ol/div not enough words
			$(_e_big).find('ul, ol, table, div, section, aside, header').each(function (_i, _e)
			{
				//	paragraph div
				if ($(_e).hasClass('readable_class_is_paragraph')) { return; }
				
				//	word count
				var 
					_text_computation = $R.getContent__computeTextForElement(_e, false)
					_big_images = $(_e).find('img.readable_class_big_image').length,
					_headings = $(_e).find('h1, h2, h3, h4, h5, h6').length
				;
				
				switch (true)
				{
					//	probably just an image
					case (_big_images > 0 && _text_computation._text_words_nr < 4):
					
					//	a list with links -- not more than 5
					case (_e.tagName.match(/^ul|ol$/i) != null && _text_computation._links_nr < 6):
					
					//	more than 15 words; low link ratio
					case (_text_computation._text_words_nr > 15 && _text_computation._links_to_text_ratio < 0.25):
					
					//	more than two words; zero links
					case (_text_computation._text_words_nr > 1 && _text_computation._links_nr < 1):
						return;
						break;
				
					case (_text_computation._links_to_text_ratio < 0.5):
						switch (true)
						{
							case (_headings > 0):
							case (_big_images > 1):
							case (_text_computation._theoretical_paragraphs_3_lines > 3):
							case (_text_computation._theoretical_paragraphs_50_words > 3):
								return;
								break;
						}
						break;
				}
				
				$(_e).attr('readable_attr_mark_delete', '1');
				if ($R.debug) { $R.log('Remove. Not enough words:', _e, _text_computation); }
			});
		
		
			//	keep some elements
			$(_e_big).find('pre, code, nobr, video').each(function (_i, _e)
			{
				$(_e).attr('readable_attr_mark_keep', '1');
				if ($R.debug) { $R.log('Mark. Keep:', _e); }
			});
		
		
			//	keep object from certain sites
			$(_e_big).find('object > param[name=\'movie\']').each(function (_i, _e)
			{
				if ($(_e).attr('value').match(/(flickr|vimeo|yahoo|youtube)\.com/))
				{
					$(_e.parentNode).attr('readable_attr_mark_keep', '1');
					if ($R.debug) { $R.log('Mark. Keep:', _e.parentNode); }
				}
			});

			
			//	keep embeds/iframes from certain sites
			$(_e_big).find('embed[src], iframe[src]').each(function (_i, _e)
			{
				if ($(_e).attr('src').match(/(flickr|vimeo|yahoo|youtube)\.com/))
				{
					$(_e).attr('readable_attr_mark_keep', '1');
					if ($R.debug) { $R.log('Mark. Keep:', _e); }
				}
			});

			
			//	get element html
			switch (true)
			{
				case (_e_big.tagName.match(/^h(1|2|3|4|5|6)$/i) != null):
				case (_e_big.tagName.match(/^p|table|ul|ol$/i) != null):
					_h += ''
						+ '<' + _e_big.tagName.toLowerCase() + '>'
						+ $(_e_big).html()
						+ '</' + _e_big.tagName.toLowerCase() + '>'
					;
					break;
					
				default:
					_h += $(_e_big).html();
					break;
			}
		});
		
		return _h;
	};

	$R.processHTML = function (_h)
	{
		//	remove comments
		_h = _h.replace(/<!--[\s\S]*?-->/gi, '');
		
		//	normalize some stuff
		_h = _h.replace(/<\s+/gi, '$1');
		_h = _h.replace(/\s+>/gi, '$1');
		_h = _h.replace(/\s+\/>/gi, '/>');
		_h = _h.replace(/\s*=\s*/gi, '=');
		_h = _h.replace(/(&nbsp;)+/gi, ' ');
		
		//	hold repository
		var
			_hold_repository = {},								// as object
			_hold_repository_length = 0,						// length
			_readable_attr_regex = /<([a-z0-9]+)([^>]+?)readable_attr_(big_image|mark_keep|mark_delete|only_content)="1"([^>]*)>/ig,
			_readable_attr_regex_match = false
		;

		while (true)
		{
			_readable_attr_regex_match = _readable_attr_regex.exec(_h);
			if (_readable_attr_regex_match); else { break; }
			
			var 
				_whole = _readable_attr_regex_match[0],
				_operation = _readable_attr_regex_match[3],
				_tag = _readable_attr_regex_match[1],
				_start_tag_pos = (_readable_attr_regex.lastIndex - _whole.length),
				_end_tag_pos = $R.processHTML__findEndTag(_h, _tag, _start_tag_pos)
			;

			if (_end_tag_pos === false) { continue; }
			var _sub_string = _h.substring(_start_tag_pos, _end_tag_pos);
			
			switch (_operation)
			{
				case 'big_image':
					_hold_repository['i'+_hold_repository_length] = '<div class="readableBigImage">' + _sub_string + '</div>';
					_h = '' 
						+ _h.substr(0, _start_tag_pos)
						+ '[=readable_hold('+_hold_repository_length+')]'
						+ _h.substr(_end_tag_pos)
					;
					_hold_repository_length++;
					break;
					
				case 'mark_keep':
					_hold_repository['i'+_hold_repository_length] = _sub_string;
					_h = '' 
						+ _h.substr(0, _start_tag_pos)
						+ '[=readable_hold('+_hold_repository_length+')]'
						+ _h.substr(_end_tag_pos)
					;
					_hold_repository_length++;
					break;
					
				case 'mark_delete':
					_h = '' 
						+ _h.substr(0, _start_tag_pos)
						+ ' '
						+ _h.substr(_end_tag_pos)
					;
					//	add a space, because we always want to be increasing the lastIndex of the RegEx
					break;
					
				case 'only_content':
					_h = '' 
						+ _h.substr(0, _start_tag_pos)
						+ '<div>' 
						+ 	_sub_string.replace(/^<[^>]+>/i, '').replace(/<\/[^>]+>$/i, '')
						+ '</div>'	
						+ _h.substr(_end_tag_pos)
					;
					break;
			}

			_readable_attr_regex.lastIndex = (_start_tag_pos + 1);
		}
		
		//	remove all elements that can not possibly have any content we're interested in
		//	ordered alphabetically
		//		$a = explode('|', 'embed|frame|iframe|map|marquee|noframes|noscript|object|script|select|style|textarea');
		//		sort($a); echo implode('|', $a); die();
		_h = _h.replace(/<(button|canvas|embed|frame|input|iframe|link|map|marquee|nobr|noframes|noscript|object|script|select|style|textarea)[\s\S]*?<\/\1>/gi, '');
		_h = _h.replace(/<(button|canvas|embed|frame|input|iframe|link|map|marquee|nobr|noframes|noscript|object|script|select|style|textarea)[\s\S]*?>/gi, '');
		
		//	replace bold/italic
		_h = _h.replace(/<span style="font-weight:\s*bold[^>]*>([^>]+?)<\/span>/gi, '<b>$1</b>');
		_h = _h.replace(/<span style="font-style:\s*italic[^>]*>([^>]+?)<\/span>/gi, '<i>$1</i>');

		//	remove all attributes from all elements
		//	except for a few select element-attribut pairs
		var _attribute_preg = /\s*([a-z0-9_-]+)="[^"]*"/gi;
		_h = _h.replace
		(
			/<([a-z0-9_-]+)( [^>]+)>/gi, 
			function (_m, _k, _a)
			{
				var _tag = _k.toLowerCase();
				switch (true)
				{
					case (_tag == 'a'):
						return ''
							+ '<'+_k
							+ ' target="_blank"'
							+ _a.replace(
								_attribute_preg, 
								function (__m, __a) { return (__a.match(/^(href|id|name|title)$/i) ? __m : ''); }
							)
							+ '>';
						
					case (_tag == 'img'):
						return ''
							+ '<'+_k
							+ _a.replace(
								_attribute_preg, 
								function (__m, __a) { return (__a.match(/^(height|id|src|width|title)$/i) ? __m : ''); }
							)
							+ '/>';
					
					case (_tag == 'td'):
					case (_tag == 'th'):
						return ''
							+ '<'+_k
							+ _a.replace(
								_attribute_preg, 
								function (__m, __a) { return (__a.match(/^(colspan|id|rowspan)$/i) ? __m : ''); }
							)
							+ '>';

					default:
						return ''
							+ '<'+_k
							+ _a.replace(
								_attribute_preg, 
								function (__m, __a) { return (__a.match(/^(id)$/i ) ? __m : ''); }
							)
							+ '>';
				}
			}
		);

		//	make BRs out of empty Ps
		_h = _h.replace(/<p>\s*<\/p>/gi, '<br/><br/>');

		//	delete soft BRs -- whatever the fuck those are
		_h = _h.replace(/<br[^>]*?soft[^>]*>/gi, '');
		
		//	normalize BRs, HRs
		_h = _h.replace(/<(br|hr)[^>]*>/gi, '<$1/>');

		//	remove all self closing elements -- except for br and hr
		_h = _h.replace(/<(?!(br|hr|img))([^>]+)\/>/gi, '');

		//	remove tags of some elements -- but leave content
		//	plus elements with underscore in their definition
		_h = _h.replace(/<\/?(body|center|fieldset|font|form|span)([^>]*)>/gi, '');
		_h = _h.replace(/<\/?([a-z]+)(_|:)([a-z]+)([^>]*)>/gi, '');

		//	make Ps out of bits of text with double BRs splattered throughout
		_h = _h.replace(/<br\/>\s*<br\/>/gi, '</p><p>');

		//	remove <br/> after p
		_h = _h.replace(/<\/(div|h\d|ol|p|table|ul)>\s*<br\/>/gi, '</$1>');
		_h = _h.replace(/<br\/>\s*<(div|h\d|ol|p|table|ul)>/gi, '</$1>');

		//	remove <br/> inside p, div
		_h = _h.replace(/<(p|div)>\s*<br\/>\s*<\/\1>/gi, '');
	
		//	remove empty LIs, ULs, OLs, DIVs, and Ps -- in that order
		_h = _h.replace(/<li[^>]*>\s*<\/li>/gi, '');
		_h = _h.replace(/<(ul|ol)[^>]*>\s*<\/\1>/gi, '');
		_h = _h.replace(/<(div|p)[^>]*>\s*<\/\1>/gi, '');
	
		//	put stuff back
		_h = _h.replace
		(
			/\[=readable_hold\(([0-9]+)\)\]/gi,
			function (_match, _key) {
				return (_hold_repository['i'+_key] ? _hold_repository['i'+_key] : '').replace(/<([^>]+?)style="[^">]+"([^>]*)>/i, '<$1$2>');
			}
		);
	
		return _h;
	};

	
	/* helper functions */
	/* ================ */
	
	$R.processHTML__findEndTag = function (_html, _tag, _start_tag_pos)
	{
		//	self closing tags
		switch (_tag)
		{
			case 'img':
			case 'br':
			case 'hr':
			case 'embed':
			
				var _r = />/ig;
					_r.lastIndex = _start_tag_pos;
					_r.exec(_html);
				
				return (_r.lastIndex);
		}

		
		//	count opens and closes
		var
			_r_open = new RegExp('<'+_tag+'[^a-z0-9]', 'ig'),
			_r_close = new RegExp('</'+_tag+'>', 'ig'),
			_r_close_main = new RegExp('</'+_tag+'>', 'ig'),
			_r_match,
			_r_subString
		;
		_r_close_main.lastIndex = _start_tag_pos;
		
		while (true)
		{
			_r_match = _r_close_main.exec(_html);
			if (_r_match); else { return false; }
			
			_r_subString = _html.substring(_start_tag_pos, _r_close_main.lastIndex);
			
			var
				_open_nr = _r_subString.match(_r_open),
				_open_nr = (_open_nr ? _open_nr.length : 0),
				_close_nr = _r_subString.match(_r_close),
				_close_nr = (_close_nr ? _close_nr.length : 0)
			;
			
			if ((_open_nr > 0) && (_open_nr == _close_nr)){
				return (_r_close_main.lastIndex);
			}
		}
	};
	

	$R.displayHTML = function (_processedHTML)
	{
		//	display processed
		$R.$iframeText.html(_processedHTML);

		//	fix named anchor links
		//	======================
		
		var _curr_url = ''
			+ $R.win.location.protocol + '//'
			+ $R.win.location.host
			+ $R.win.location.pathname
		;
		
		$R.$iframeText.find('a[href]').each(function (_i, _e)
		{
			var _href = $(_e).attr('href').replace(_curr_url, '');
			
			//	only anchors
			if (_href.match(/^#/gi)); else { return; }

			//	only anchor name
			_href = _href.substr(1);
			
			//	set full path to href -- if user copies the link, it will be complete
			$(_e).attr('href', _curr_url + '#' + _href);

			//	bind function
			$(_e).click(function(){ $R.goToNamedAnchor(_href); return false; });
		});
	};
	
	
/* show functions */
/* ============== */

	$R.scrolledWindowWhileReadableVisible = function ()
	{
		if ($R.iOS) { return; }
	
		//	if original window is somehow scrolled, while Readable is visible
		//	move the cover and the iframe
		//	this event is binded and unbinded by the show/hide functions
	
		var _win_top = $($R.win).scrollTop()+'px';

		$R.$iframe.css('top', _win_top);
		$R.$cover.css('top', _win_top);
	};

	$R.show = function ()
	{
		//	debug
		$R.printDebugOutput();
	
		//	before visible
		$R.$document
			.find('body, html')
				.addClass('readableBeforeVisible');
	
		//	frame
		$(window).scrollTop(0);

		var 
			_win_height = $($R.win).height(),
			_win_v_scroll = $($R.win).scrollTop()
		;
		
		//	set cover to above scroll
		$R.$cover.show();
		$R.$cover.css('top', (_win_v_scroll-_win_height)+'px');
		
		//	animate cover down
		$R.$cover.animate
		(
			{top:_win_v_scroll+'px'}, 
			'normal',
			function ()
			{
				//	hide scrollbar and objects
				$R.$document
					.find('body, html')
					.add($R.$iframe)
						.addClass('readableVisible');

				//	set min-height
				$('#body').css('min-height', $R.$iframe.height()+'px');
						
				//	show iframe
				$R.$iframe.css('top', $($R.win).scrollTop()+'px');

				//	hide cover
				$R.$cover.hide();
				
				//	bind to scroll
				$($R.win.document).bind('scroll', $R.scrolledWindowWhileReadableVisible);
				
				//	focus
				if (window.focus) { window.focus(); }
		
				//	finished
				$R.visible = true;
			}
		);
	};
	
	$R.hide = function ()
	{
		var 
			_win_height = $($R.win).height(),
			_win_v_scroll = $($R.win).scrollTop()
		;

		//	unbind
		$($R.win.document).unbind('scroll', $R.scrolledWindowWhileReadableVisible);
		
		//	show cover
		$R.$cover.show();
		
		//	hide
		$R.$iframe.css('top', '-100%');

		//	show scrollbars and objects
		$R.$document
			.find('body, html')
			.add($R.$iframe)
				.removeClass('readableVisible');

		$R.$cover.animate
		(
			{top:_win_v_scroll-_win_height+'px'},
			'normal', 
			function ()
			{
				//	hide
				$R.$cover.css('top', '-100%');
				$R.$cover.hide();

				//	before visible
				$R.$document
					.find('body, html')
						.removeClass('readableBeforeVisible');
				
				//	focus
				if ($R.win.focus) { $R.win.focus(); }
				
				//	finished
				$R.visible = false;
			}
		);
	};

/* log */
/* === */

	$R.callLog = function ()
	{
		if ($R.debug) { return; }
		
		var 
			_shortcuts = {
				'text_font': 			'tf',
				'text_font_monospace':	'tfm',
				'text_font_header':		'tfh',

				'text_size': 			'ts',
				'text_line_height': 	'tlh',
				'box_width': 			'bw',

				'color_background': 	'cb',
				'color_text': 			'ct',
				'color_links': 			'cl',
				
				'text_align': 			'ta',
				'base': 				'b',
			},
			_log_options_string = '',
			_custom_css_string = '',
			_log_url = ''
		;

		//	cosntruct options string
		if ($R.options) {
			for (var _option in _shortcuts) {
				_log_options_string += "[[="+_shortcuts[_option]+": "+$R.options[_option]+"]]";
			}
		}

		//	construct url
		_log_url = ''
			+ $R.linksPath+'log.js?'
			+ 'rand=' 		+ encodeURIComponent(Math.random())
			+ '&url=' 		+ encodeURIComponent($R.win.location.href)
			+ '&options=' 	+ encodeURIComponent(_log_options_string)
			+ '&customCSS=' + encodeURIComponent($R.options['custom_css'])
		;
	
		//	wait 2500 seonds
		window.setTimeout
		(
			function ()
			{
				//	create
				var	_script = document.createElement('script');
					_script.setAttribute('src', _log_url);
				
				//	will not actually show up in the document
				//	jQuery does stuff with scripts
				$('body').append(_script);
			}, 
			2500
		);
		
		//	check to see if using custom theme
		//	and propose another theme
	};
	
	
/* launch */
/* ====== */

	$R.bookmarkletClicked = function ()
	{
		//	console might not have been activated on first run
		if ($R.debug) { $R.initializeWriteLogFunction(); }

		
		if ($R.visible)
		{
			$R.hide();
		}
		else
		{
			//	set options -- in case they changed
			$R.setOptions();

			//	time Get Content
			if ($R.debug) { $R.debugTimerStart('getContent'); }
			$R.getContent();
			if ($R.debug) { $R.debugOutputsFixed['GetContent'] = $R.debugTimerEnd(); }
			
			//	show
			$R.show();
		}
		
		$R.bookmarkletTimer = false;
	};

	//	custom hook
	if ($R.beforeLaunchHook) { $R.beforeLaunchHook(); }

	//	auto-launch
	$R.bookmarkletClicked();

	//	log this instance; logger will delay itself
	$R.callLog();

/* finish */
/* ====== */
	
		})(window.parent.$readable);
	}
);
