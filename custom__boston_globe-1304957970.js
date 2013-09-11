(function ($R) {
	
	$R.beforeLaunchHook = function ()
	{
		var _oldGetTargetElement = $R.getContent__findHere__getTargetElement;
		
		$R.getContent__findHere__getTargetElement = function ()
		{
			//	remove email thing
			$R.$document.find('#headTools div.utility').attr('readable_attr_mark_delete', 1);
			
			//	articleGraphs
			var _$target = $R.$document.find('#articleGraphs');

			//	return
			return (_$target && _$target.length && (_$target.length > 0) ? _$target.get(0) : _oldGetTargetElement());
		};
		
	};

})(window.parent.$readable);
