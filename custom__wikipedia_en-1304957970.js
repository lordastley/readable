(function ($R) {
	
	$R.beforeLaunchHook = function ()
	{
		var _oldProcessHTML = $R.processHTML;
		
		$R.processHTML = function (_h)
		{
			_h = _oldProcessHTML(_h);
			
			//	remove [edit] links
			_h = _h.replace(/\[\s*<a[^>]*>edit<\/a>\s*\]/gi, '');
			
			return _h;
		};
		
	};

})(window.parent.$readable);
