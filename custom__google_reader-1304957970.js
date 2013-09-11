(function ($R) {
	
	$R.beforeLaunchHook = function ()
	{
		
		$R.getContent = function ()
		{
			var 
				_$body = $R.$document.find('#current-entry div.entry-body'),
				_$title = $R.$document.find('#current-entry h2.entry-title'),
				_elements = []
			;
			
			if (_$body.length > 0) { _elements.unshift(_$body.get(0)); }
			if (_$title.length > 0) { _elements.unshift(_$title.get(0)); }
			
			//	display entry
			if (_$body.length > 0)
			{
				$R.displayHTML($R.processHTML($R.processHTML__getHTMLToProcess(_elements)));
				return;
			}

			//	display a bit of Reader help
			$R.displayHTML(''
				+	'<h1>Google Reader</h1>'
				+	'<p>Readable will display the currently <strong>highlighted entry</strong>.</p>'
				+	'<p><strong>Highlight</strong> an entry by clicking on it.<br/>Then, click Readable again.</p>'
				+	'<br/><br/>'
			);
		};
		
	};

})(window.parent.$readable);
