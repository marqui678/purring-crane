// ==========================================================================
// Project:   Hivetrader iPhone App
// Copyright: ©2012 Hivetrader
// ==========================================================================

(function() {  
  var empty = {};
	function mixin(/*Object*/ target, /*Object*/ source){
		var name, s, i;
		for(name in source){
			s = source[name];
			if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))){
				target[name] = s;
			}
		}
		return target; // Object
	};
	
	HT.mixin = function(/*Object*/ obj, /*Object...*/ props){
		if(!obj){ obj = {}; }
		for(var i=1, l=arguments.length; i<l; i++){
			mixin(obj, arguments[i]);
		}
		return obj; // Object
	};

	//create a new object, combining the properties of the passed objects with the last arguments having
	//priority over the first ones
	HT.combine = function(/*Object*/ obj, /*Object...*/ props) {
		var newObj = {};
		for(var i=0, l=arguments.length; i<l; i++){
			mixin(newObj, arguments[i]);
		}
		return newObj;
	};

	/*
		Branching logic based on OS
	*/
	var osname = Ti.Platform.osname;
	HT.os = function(/*Object*/ map) {
		var def = map.def||null; //default function or value
		if (typeof map[osname] != 'undefined') {
			if (typeof map[osname] == 'function') { return map[osname](); }
			else { return map[osname]; }
		}
		else {
			if (typeof def == 'function') { return def(); }
			else { return def; }
		}
	};
	
	HT.osname = Ti.Platform.osname;
	
})();  

Ti.include(
	'/ht/models/models.js',
	'/ht/views/views.js'
);