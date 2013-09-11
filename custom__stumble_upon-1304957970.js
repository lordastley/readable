(function ($R) {
	
	$R.beforeLaunchHook = function ()
	{
	
		$R.getContent = function ()
		{
			var _frameURL = $R.$document.find('iframe').attr('src');
			
			$R.displayHTML(''
				+	'<h1>Stumble Upon</h1>'
				+	'<p>StumbleUpon uses HTML Frames to show you web-pages. Because of browser security restrictions, Readable cannot access Frames.</p>'
				+	'<p>As such, to display this page, you\'re going to need to access it by itself &mdash; as opposed to within the StumbleUpon Frame.</p>'
				+	'<br/>'
				+	'<p><strong>Use this link</strong> to go to the page itself. Once the page loads, you can use Readable on it.</p>'
				+	'<p><a target="_top" href="'+_frameURL+'">'+_frameURL+'</a></p>'
				+	'<br/><br/>'
			);
		};
		
	};

})(window.parent.$readable);
