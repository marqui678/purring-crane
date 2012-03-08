// ==========================================================================
// Project:   Hivetrader iPhone App
// Copyright: ©2011 Hivetrader
// ==========================================================================

(function() {
  var platformWidth = Ti.App.PLATFORMWIDTH;
  var win = Titanium.UI.currentWindow;
  var path = Ti.App.ABS_PATH;
  
  // The Buttons
  var navItems = [
    {
      label: "Settings"
    },
    {
      label: "Profile"
    },
    {
      label: "Privacy"
    }
  ];
  
  /**
  The Settings grid
  */
  var settingsView = Titanium.UI.createView({
    width: platformWidth,
    height: 375,
    top: 0,
    left: 0,
    right: 0,
    backgroundGradient: {
  		type:'radial',
  		colors:[{
  		  color:'#ded9d0',
  		  position:0.0
  		},{
  		  color:'#f3f0eb',
  		  position:1.0
  		}]
  	}
  });
  
  var navGrid = win.HT.View.createNavigationGrid(navItems);

  settingsView.add(navGrid);
  
  Titanium.UI.currentWindow.add(settingsView);
})();