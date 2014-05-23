
	//	jquery on-load and events
	$(function()
	{
		//	sliding slates
		$('#landing_action_button a').click(function () { $('#setup_slate').animate({top:'0%'}, 'slow'); return false; });
		$('#back_to_landing_slate').click(function () { $('#setup_slate').animate({top:'-100%'}, 'slow'); return false; });

		//	gallery
		$('#landing_gallery_pictures a').fancybox();

		//	gallery
		$('#landing_gallery_nrs a').click(function ()
		{
			$('#landing_gallery_nrs a').removeClass('selected');
			$(this).addClass('selected');
			
			var nr = Math.floor($(this).html());

			$('#landing_gallery_before').attr('href', window.readableSetup.baseURLStatic+'images/'+nr+'_before_large.jpg');
			$('#landing_gallery_before img').attr('src', window.readableSetup.baseURLStatic+'images/'+nr+'_before.jpg');
			
			$('#landing_gallery_after').attr('href', window.readableSetup.baseURLStatic+'images/'+nr+'_after_large.jpg');
			$('#landing_gallery_after img').attr('src', window.readableSetup.baseURLStatic+'images/'+nr+'_after.jpg');
			
			return false;
		});
		
		$('#bookmarklet').click(function () { return false; });
		
		//	iframe height
		$('#frame iframe').height(($('#setup_slate').height() - ($('#frame').offset().top - $('#setup_slate').offset().top) - 7));
		
		//	fancybox links
		$('a.fancy').fancybox();

		//	select events
		$('#options_table select')
			.bind('change', function ()
			{
				var 
					id = this.id.substr(7),
					name = $('#option_box_'+id+' label').html()
				;
				if (name != ''); else { return; }
				
				switch (true)
				{
					case (this.value.match(/^-sep/gi) != null):
						this.value = window.readableSetup.selected[id];
						break;
				
					case (this.value == 'custom'):
						//	get html help
						$('#custom_box_help').html($('#custom_help_'+id).html());

						//	set Apply button name
						$('#custom_box_button').attr('value', 'Apply Custom '+name);
						
						//	set custom text
						$('#custom_box_input').val(window.readableSetup.customed[id]);
						
						//	tell custom what option it is for and remove Done attribute
						$('#custom_box').get(0).className = id;
						$('#custom_box').attr('done', 'no');

						//	show box
						$.fancybox({
							'type': 'inline',
							'href': '#custom_box',
							'title': 'Custom Value for '+name,
							'onClosed': function ()
							{
								//	already handled by Apply button
								if ($('#custom_box').attr('done') == 'yes') { return; }
							
								//	set to previous value
								$('#select_'+id).val(window.readableSetup.selected[id]);
							}
						});
						break;
						
					default:
						window.readableSetup.selected[id] = this.value;
						$('#option_box_'+id).removeClass('custom');
						window.readableSetup.constructBookmarklet((id == 'base'));
						break;
				}
			});
		
		//	custom links in options
		$('#options_table div.option_box a').click(function () {
			$(this).parent().find('select').change();
		});
		
		//	custom-apply button
		$('#custom_box_button').click(function ()
		{
			var id = $('#custom_box').get(0).className;

			//	get custom value
			window.readableSetup.customed[id] = $('#custom_box_input').val();

			//	return if blank
			if (window.readableSetup.customed[id] == '') { return; }
			
			//	select custom
			window.readableSetup.selected[id] = 'custom';
			
			//	tell option it is now custom
			$('#option_box_'+id).addClass('custom');
			
			//	construct bookmarklet
			window.readableSetup.constructBookmarklet();
			
			//	set done
			$('#custom_box').attr('done', 'yes');
			$.fancybox.close();
		});
		
		//	custom-textarea
		$('#custom_box_input').keydown(function (event)	{
			if (event.keyCode == 13) {
				if ($('#custom_box').get(0).className == 'custom_css'); else {
					return false;
				}
			}
		});

		
		//	stlye themes; color themes
		//	not added to jquery because content moves around -- in and out fo FancyBox
		window.readableSetup.style_theme_linked_clicked = function (theme)
		{
			window.readableSetup.style_themes[theme]();
			window.readableSetup.constructBookmarklet(true);
			$.fancybox.close();
			return false;
		};
		
		window.readableSetup.color_theme_linked_clicked = function (theme)
		{
			window.readableSetup.color_themes[theme]();
			window.readableSetup.constructBookmarklet();
			$.fancybox.close();
			return false;
		};

		
		//	delay styling iframe
		window.setTimeout(function ()
		{
			window.readableSetup.frameDocument = $('#frame iframe').contents().get(0);
			window.readableSetup.style_themes[('changing_styles' in window.readableSetup.style_themes ? 'changing_styles' : 'default')]();
			window.readableSetup.constructBookmarklet(true);
		}, 
		1000);
	});


	//	bookmarklet construction
	window.readableSetup.constructBookmarklet = function (_resetBase)
	{
		var
			_resetBase = _resetBase || false,
			_opt = { 'PATH': window.readableSetup.baseURLStatic },
			_cssText = '',
			_check_google_font = function (_match, _font)
			{
				if (_font in window.readableSetup.googleFontsIndex); else { return; }
				
				var _font_key = _font.replace(/\s/gi, '+');
				$(window.readableSetup.frameDocument)
					.find('head')
						.append('<link href="//fonts.googleapis.com/css?family='+_font_key+'" rel="stylesheet" type="text/css" />');
			},
			_double_check_font = function (fontVariable)
			{
				_opt[fontVariable].replace(/"([^",]+)"/gi, _check_google_font);
				_opt[fontVariable].replace(/([^",\s]+)/gi, _check_google_font);				
			}
		;

		
		//	create options
		for (var opt in window.readableSetup.selected)
		{
			_opt[opt] = window.readableSetup.selected[opt];
			if (_opt[opt] == 'custom') { _opt[opt] = window.readableSetup.customed[opt]; }
		}

		
		//	base css
		//	must be appended before custom css
		if (_resetBase)
		{
			//	remove if exists
			$(window.readableSetup.frameDocument)
				.find('#baseCSS')
					.remove();
			
			if (_opt['base'] > '')
			{
				//	append
				$(window.readableSetup.frameDocument)
					.find('head')				
						.append('<link id="baseCSS" rel="stylesheet" href="'+window.readableSetup.baseURLStatic+'base-'+_opt['base']+window.readableSetup.baseCSSPostfix+'" type="text/css" />');
			}
		}
		
		
		//	check fonts
		_double_check_font('text_font');
		_double_check_font('text_font_header');
		_double_check_font('text_font_monospace');
		
		
		//	check fonts in custom css
		_opt['custom_css'].replace(/font-family: "([^",]+)"/gi, _check_google_font);
		_opt['custom_css'].replace(/font-family: ([^",\s]+)/gi, _check_google_font);
		
		
		//	custom css
		//	use options in the custom_css
		_opt['custom_css'] = _opt['custom_css'].replace(/\[=custom_css\]/gi, '');
		_opt['custom_css'] = _opt['custom_css'].replace(
			/\[=([a-z_]+?)\]/gi,
			function (_match, _key) { return _opt[_key]; }
		);
		_cssText = (''
			+	'#body { '
			+		'font-family: [=text_font]; '
			+		'font-size: [=text_size]; '
			+		'line-height: [=text_line_height]; '
			+		'color: [=color_text]; '
			+	'} '
			
			+	'#background { background-color: [=color_background]; } '
			+	'#box { '
			+		'width: [=box_width]; '
			+		'background-color: [=color_background]; '
			+		'text-align: ' + (_opt['text_align'] == 'justified' ? 'justify' : 'left')+'; '
			+	'} '
			
			+	'a { color: [=color_links]; } '
			+	'a:visited { color: [=color_text]; } '

			+	'img { background-color: [=color_text]; border-color: [=color_text]; } '
			+	'a img { border-color: [=color_links]; } '
			+	'a:visited img { border-color: [=color_text]; } '

			+	'h1, h2, h3, h4, h5, h6 { '
			+		(_opt['text_font_header'] == '' ? '' : 
					'font-family: [=text_font_header]; ')
			+	'} '

			+	'pre, code { font-family: [=text_font_monospace]; } '
			+	'hr { border-color: [=color_text]; } '
			
			+	'#floating a { background-color: [=color_text]; color: [=color_background]; } '
			+	'#floating #floating_menu { background-color: transparent; color: [=color_text]; } '

			+	'#menu, #rtl_box { background-color: [=color_text]; color: [=color_background]; } '
			+	'#menu a, #rtl_box a { color: [=color_background]; border-color: [=color_background]; } '
			
			+	'[=custom_css] '
		).replace(
			/\[=([a-z_]+?)\]/gi,
			function (_match, _key) { return _opt[_key]; }
		);
		
		
		//	remove if exists
		$(window.readableSetup.frameDocument)
			.find('#optionsCSS')
				.remove();
		
		
		//	append
		var _cssElement = document.createElement('style');
			_cssElement.setAttribute('type', 'text/css');
			_cssElement.setAttribute('id', 'optionsCSS');
			
		if (_cssElement.styleSheet) { _cssElement.styleSheet.cssText = _cssText; }
			else { _cssElement.appendChild(document.createTextNode(_cssText)); }

		$(window.readableSetup.frameDocument)
			.find('head')
				.append(_cssElement);
				

		//	bookmakrlet href
		var _bookmarklet_href = 
			window.readableSetup.bookmarklet.replace
			(
				/\[\[=([a-z_]+?)\]\]/gi,
				function (_match, _key)	{
					return _opt[_key].replace(/"([^"]*?)"/gi, 'quote($1)').replace(/[\r\n]/gi, '');
				}
			)
		;

		//	where/what code to display
		switch (window.readableSetup.codeType)
		{
			case 'ios':
				$('#bookmarklet_textarea')
					.val(_bookmarklet_href);
				break;
				
			case 'embed':
				$('#bookmarklet_textarea').val(''
					+ '<a href="'
					+ 	_bookmarklet_href
					+ '">Reading View'
					+ '</a>'	
				);
				break;
				
			default:
				$('#bookmarklet')
					.attr('href', _bookmarklet_href);
				break;
		}
	};


	//	fonts
	window.readableSetup.googleFontsIndex = {};
	window.readableSetup.googleFontsArray =
/*	[
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
	];*/

        [   // All google fonts as of 10/25/13. Not sorted by serif/sans/monospace, because I can't get that from the API.
            "ABeeZee",
            "Abel",
            "Abril Fatface",
            "Aclonica",
            "Acme",
            "Actor",
            "Adamina",
            "Advent Pro",
            "Aguafina Script",
            "Akronim",
            "Aladin",
            "Aldrich",
            "Alef",
            "Alegreya",
            "Alegreya SC",
            "Alex Brush",
            "Alfa Slab One",
            "Alice",
            "Alike",
            "Alike Angular",
            "Allan",
            "Allerta",
            "Allerta Stencil",
            "Allura",
            "Almendra",
            "Almendra Display",
            "Almendra SC",
            "Amarante",
            "Amaranth",
            "Amatic SC",
            "Amethysta",
            "Anaheim",
            "Andada",
            "Andika",
            "Angkor",
            "Annie Use Your Telescope",
            "Anonymous Pro",
            "Antic",
            "Antic Didone",
            "Antic Slab",
            "Anton",
            "Arapey",
            "Arbutus",
            "Arbutus Slab",
            "Architects Daughter",
            "Archivo Black",
            "Archivo Narrow",
            "Arimo",
            "Arizonia",
            "Armata",
            "Artifika",
            "Arvo",
            "Asap",
            "Asset",
            "Astloch",
            "Asul",
            "Atomic Age",
            "Aubrey",
            "Audiowide",
            "Autour One",
            "Average",
            "Average Sans",
            "Averia Gruesa Libre",
            "Averia Libre",
            "Averia Sans Libre",
            "Averia Serif Libre",
            "Bad Script",
            "Balthazar",
            "Bangers",
            "Basic",
            "Battambang",
            "Baumans",
            "Bayon",
            "Belgrano",
            "Belleza",
            "BenchNine",
            "Bentham",
            "Berkshire Swash",
            "Bevan",
            "Bigelow Rules",
            "Bigshot One",
            "Bilbo",
            "Bilbo Swash Caps",
            "Bitter",
            "Black Ops One",
            "Bokor",
            "Bonbon",
            "Boogaloo",
            "Bowlby One",
            "Bowlby One SC",
            "Brawler",
            "Bree Serif",
            "Bubblegum Sans",
            "Bubbler One",
            "Buda",
            "Buenard",
            "Butcherman",
            "Butterfly Kids",
            "Cabin",
            "Cabin Condensed",
            "Cabin Sketch",
            "Caesar Dressing",
            "Cagliostro",
            "Calligraffitti",
            "Cambo",
            "Candal",
            "Cantarell",
            "Cantata One",
            "Cantora One",
            "Capriola",
            "Cardo",
            "Carme",
            "Carrois Gothic",
            "Carrois Gothic SC",
            "Carter One",
            "Caudex",
            "Cedarville Cursive",
            "Ceviche One",
            "Changa One",
            "Chango",
            "Chau Philomene One",
            "Chela One",
            "Chelsea Market",
            "Chenla",
            "Cherry Cream Soda",
            "Cherry Swash",
            "Chewy",
            "Chicle",
            "Chivo",
            "Cinzel",
            "Cinzel Decorative",
            "Clicker Script",
            "Coda",
            "Coda Caption",
            "Codystar",
            "Combo",
            "Comfortaa",
            "Coming Soon",
            "Concert One",
            "Condiment",
            "Content",
            "Contrail One",
            "Convergence",
            "Cookie",
            "Copse",
            "Corben",
            "Courgette",
            "Cousine",
            "Coustard",
            "Covered By Your Grace",
            "Crafty Girls",
            "Creepster",
            "Crete Round",
            "Crimson Text",
            "Croissant One",
            "Crushed",
            "Cuprum",
            "Cutive",
            "Cutive Mono",
            "Damion",
            "Dancing Script",
            "Dangrek",
            "Dawning of a New Day",
            "Days One",
            "Delius",
            "Delius Swash Caps",
            "Delius Unicase",
            "Della Respira",
            "Denk One",
            "Devonshire",
            "Didact Gothic",
            "Diplomata",
            "Diplomata SC",
            "Domine",
            "Donegal One",
            "Doppio One",
            "Dorsa",
            "Dosis",
            "Dr Sugiyama",
            "Droid Sans",
            "Droid Sans Mono",
            "Droid Serif",
            "Duru Sans",
            "Dynalight",
            "EB Garamond",
            "Eagle Lake",
            "Eater",
            "Economica",
            "Electrolize",
            "Elsie",
            "Elsie Swash Caps",
            "Emblema One",
            "Emilys Candy",
            "Engagement",
            "Englebert",
            "Enriqueta",
            "Erica One",
            "Esteban",
            "Euphoria Script",
            "Ewert",
            "Exo",
            "Expletus Sans",
            "Fanwood Text",
            "Fascinate",
            "Fascinate Inline",
            "Faster One",
            "Fasthand",
            "Fauna One",
            "Federant",
            "Federo",
            "Felipa",
            "Fenix",
            "Finger Paint",
            "Fjalla One",
            "Fjord One",
            "Flamenco",
            "Flavors",
            "Fondamento",
            "Fontdiner Swanky",
            "Forum",
            "Francois One",
            "Freckle Face",
            "Fredericka the Great",
            "Fredoka One",
            "Freehand",
            "Fresca",
            "Frijole",
            "Fruktur",
            "Fugaz One",
            "GFS Didot",
            "GFS Neohellenic",
            "Gabriela",
            "Gafata",
            "Galdeano",
            "Galindo",
            "Gentium Basic",
            "Gentium Book Basic",
            "Geo",
            "Geostar",
            "Geostar Fill",
            "Germania One",
            "Gilda Display",
            "Give You Glory",
            "Glass Antiqua",
            "Glegoo",
            "Gloria Hallelujah",
            "Goblin One",
            "Gochi Hand",
            "Gorditas",
            "Goudy Bookletter 1911",
            "Graduate",
            "Grand Hotel",
            "Gravitas One",
            "Great Vibes",
            "Griffy",
            "Gruppo",
            "Gudea",
            "Habibi",
            "Hammersmith One",
            "Hanalei",
            "Hanalei Fill",
            "Handlee",
            "Hanuman",
            "Happy Monkey",
            "Headland One",
            "Henny Penny",
            "Herr Von Muellerhoff",
            "Holtwood One SC",
            "Homemade Apple",
            "Homenaje",
            "IM Fell DW Pica",
            "IM Fell DW Pica SC",
            "IM Fell Double Pica",
            "IM Fell Double Pica SC",
            "IM Fell English",
            "IM Fell English SC",
            "IM Fell French Canon",
            "IM Fell French Canon SC",
            "IM Fell Great Primer",
            "IM Fell Great Primer SC",
            "Iceberg",
            "Iceland",
            "Imprima",
            "Inconsolata",
            "Inder",
            "Indie Flower",
            "Inika",
            "Irish Grover",
            "Istok Web",
            "Italiana",
            "Italianno",
            "Jacques Francois",
            "Jacques Francois Shadow",
            "Jim Nightshade",
            "Jockey One",
            "Jolly Lodger",
            "Josefin Sans",
            "Josefin Slab",
            "Joti One",
            "Judson",
            "Julee",
            "Julius Sans One",
            "Junge",
            "Jura",
            "Just Another Hand",
            "Just Me Again Down Here",
            "Kameron",
            "Karla",
            "Kaushan Script",
            "Kavoon",
            "Keania One",
            "Kelly Slab",
            "Kenia",
            "Khmer",
            "Kite One",
            "Knewave",
            "Kotta One",
            "Koulen",
            "Kranky",
            "Kreon",
            "Kristi",
            "Krona One",
            "La Belle Aurore",
            "Lancelot",
            "Lato",
            "League Script",
            "Leckerli One",
            "Ledger",
            "Lekton",
            "Lemon",
            "Libre Baskerville",
            "Life Savers",
            "Lilita One",
            "Lily Script One",
            "Limelight",
            "Linden Hill",
            "Lobster",
            "Lobster Two",
            "Londrina Outline",
            "Londrina Shadow",
            "Londrina Sketch",
            "Londrina Solid",
            "Lora",
            "Love Ya Like A Sister",
            "Loved by the King",
            "Lovers Quarrel",
            "Luckiest Guy",
            "Lusitana",
            "Lustria",
            "Macondo",
            "Macondo Swash Caps",
            "Magra",
            "Maiden Orange",
            "Mako",
            "Marcellus",
            "Marcellus SC",
            "Marck Script",
            "Margarine",
            "Marko One",
            "Marmelad",
            "Marvel",
            "Mate",
            "Mate SC",
            "Maven Pro",
            "McLaren",
            "Meddon",
            "MedievalSharp",
            "Medula One",
            "Megrim",
            "Meie Script",
            "Merienda",
            "Merienda One",
            "Merriweather",
            "Merriweather Sans",
            "Metal",
            "Metal Mania",
            "Metamorphous",
            "Metrophobic",
            "Michroma",
            "Milonga",
            "Miltonian",
            "Miltonian Tattoo",
            "Miniver",
            "Miss Fajardose",
            "Modern Antiqua",
            "Molengo",
            "Molle",
            "Monda",
            "Monofett",
            "Monoton",
            "Monsieur La Doulaise",
            "Montaga",
            "Montez",
            "Montserrat",
            "Montserrat Alternates",
            "Montserrat Subrayada",
            "Moul",
            "Moulpali",
            "Mountains of Christmas",
            "Mouse Memoirs",
            "Mr Bedfort",
            "Mr Dafoe",
            "Mr De Haviland",
            "Mrs Saint Delafield",
            "Mrs Sheppards",
            "Muli",
            "Mystery Quest",
            "Neucha",
            "Neuton",
            "New Rocker",
            "News Cycle",
            "Niconne",
            "Nixie One",
            "Nobile",
            "Nokora",
            "Norican",
            "Nosifer",
            "Nothing You Could Do",
            "Noticia Text",
            "Noto Sans",
            "Noto Serif",
            "Nova Cut",
            "Nova Flat",
            "Nova Mono",
            "Nova Oval",
            "Nova Round",
            "Nova Script",
            "Nova Slim",
            "Nova Square",
            "Numans",
            "Nunito",
            "Odor Mean Chey",
            "Offside",
            "Old Standard TT",
            "Oldenburg",
            "Oleo Script",
            "Oleo Script Swash Caps",
            "Open Sans",
            "Open Sans Condensed",
            "Oranienbaum",
            "Orbitron",
            "Oregano",
            "Orienta",
            "Original Surfer",
            "Oswald",
            "Over the Rainbow",
            "Overlock",
            "Overlock SC",
            "Ovo",
            "Oxygen",
            "Oxygen Mono",
            "PT Mono",
            "PT Sans",
            "PT Sans Caption",
            "PT Sans Narrow",
            "PT Serif",
            "PT Serif Caption",
            "Pacifico",
            "Paprika",
            "Parisienne",
            "Passero One",
            "Passion One",
            "Pathway Gothic One",
            "Patrick Hand",
            "Patrick Hand SC",
            "Patua One",
            "Paytone One",
            "Peralta",
            "Permanent Marker",
            "Petit Formal Script",
            "Petrona",
            "Philosopher",
            "Piedra",
            "Pinyon Script",
            "Pirata One",
            "Plaster",
            "Play",
            "Playball",
            "Playfair Display",
            "Playfair Display SC",
            "Podkova",
            "Poiret One",
            "Poller One",
            "Poly",
            "Pompiere",
            "Pontano Sans",
            "Port Lligat Sans",
            "Port Lligat Slab",
            "Prata",
            "Preahvihear",
            "Press Start 2P",
            "Princess Sofia",
            "Prociono",
            "Prosto One",
            "Puritan",
            "Purple Purse",
            "Quando",
            "Quantico",
            "Quattrocento",
            "Quattrocento Sans",
            "Questrial",
            "Quicksand",
            "Quintessential",
            "Qwigley",
            "Racing Sans One",
            "Radley",
            "Raleway",
            "Raleway Dots",
            "Rambla",
            "Rammetto One",
            "Ranchers",
            "Rancho",
            "Rationale",
            "Redressed",
            "Reenie Beanie",
            "Revalia",
            "Ribeye",
            "Ribeye Marrow",
            "Righteous",
            "Risque",
            "Roboto",
            "Roboto Condensed",
            "Roboto Slab",
            "Rochester",
            "Rock Salt",
            "Rokkitt",
            "Romanesco",
            "Ropa Sans",
            "Rosario",
            "Rosarivo",
            "Rouge Script",
            "Ruda",
            "Rufina",
            "Ruge Boogie",
            "Ruluko",
            "Rum Raisin",
            "Ruslan Display",
            "Russo One",
            "Ruthie",
            "Rye",
            "Sacramento",
            "Sail",
            "Salsa",
            "Sanchez",
            "Sancreek",
            "Sansita One",
            "Sarina",
            "Satisfy",
            "Scada",
            "Schoolbell",
            "Seaweed Script",
            "Sevillana",
            "Seymour One",
            "Shadows Into Light",
            "Shadows Into Light Two",
            "Shanti",
            "Share",
            "Share Tech",
            "Share Tech Mono",
            "Shojumaru",
            "Short Stack",
            "Siemreap",
            "Sigmar One",
            "Signika",
            "Signika Negative",
            "Simonetta",
            "Sintony",
            "Sirin Stencil",
            "Six Caps",
            "Skranji",
            "Slackey",
            "Smokum",
            "Smythe",
            "Sniglet",
            "Snippet",
            "Snowburst One",
            "Sofadi One",
            "Sofia",
            "Sonsie One",
            "Sorts Mill Goudy",
            "Source Code Pro",
            "Source Sans Pro",
            "Special Elite",
            "Spicy Rice",
            "Spinnaker",
            "Spirax",
            "Squada One",
            "Stalemate",
            "Stalinist One",
            "Stardos Stencil",
            "Stint Ultra Condensed",
            "Stint Ultra Expanded",
            "Stoke",
            "Strait",
            "Sue Ellen Francisco",
            "Sunshiney",
            "Supermercado One",
            "Suwannaphum",
            "Swanky and Moo Moo",
            "Syncopate",
            "Tangerine",
            "Taprom",
            "Tauri",
            "Telex",
            "Tenor Sans",
            "Text Me One",
            "The Girl Next Door",
            "Tienne",
            "Tinos",
            "Titan One",
            "Titillium Web",
            "Trade Winds",
            "Trocchi",
            "Trochut",
            "Trykker",
            "Tulpen One",
            "Ubuntu",
            "Ubuntu Condensed",
            "Ubuntu Mono",
            "Ultra",
            "Uncial Antiqua",
            "Underdog",
            "Unica One",
            "UnifrakturCook",
            "UnifrakturMaguntia",
            "Unkempt",
            "Unlock",
            "Unna",
            "VT323",
            "Vampiro One",
            "Varela",
            "Varela Round",
            "Vast Shadow",
            "Vibur",
            "Vidaloka",
            "Viga",
            "Voces",
            "Volkhov",
            "Vollkorn",
            "Voltaire",
            "Waiting for the Sunrise",
            "Wallpoet",
            "Walter Turncoat",
            "Warnes",
            "Wellfleet",
            "Wendy One",
            "Wire One",
            "Yanone Kaffeesatz",
            "Yellowtail",
            "Yeseva One",
            "Yesteryear",
            "Zeyada",
        ];
        


	for (var i=0, ii=window.readableSetup.googleFontsArray.length; i<ii; i++){
		window.readableSetup.googleFontsIndex[window.readableSetup.googleFontsArray[i]] = 1;
	}
