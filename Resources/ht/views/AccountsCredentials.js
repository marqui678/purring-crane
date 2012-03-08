// ==========================================================================
// Project:   Hivetrader iPhone App
// Copyright: ©2011 Hivetrader
// ==========================================================================

(function() {
  var platformWidth = Ti.App.PLATFORMWIDTH;
  var win = Titanium.UI.currentWindow;
  var path = Ti.App.ABS_PATH;
  var styles = win.HT.View.properties;
  var _accountName = win._accountName || "";
  
  /**
  Utility Functions
  ===============
  */
  
  function focusForm() {
    win.animate({top: -70});
  }
  
  function blurForm() {
    win.animate({top: 0});
  }
  
  /**
  Section Windows
  ===============
  For organization's sake we'll keep all the windows we'll use in this section defined here.
  */
  var secureTitleView = win.HT.View.secureTitle({title: "Add Account"});
  var AddEditHoldingsWindow = Titanium.UI.createWindow(
      win.HT.combine(styles.BaseWindow, styles.YellowGradientWindow, {
        title: "Add Holdings",
        HT: win.HT,
        titleControl: secureTitleView,
        url: "/ht/views/HoldingsListView.js"
      })
  );
  
  var view = Titanium.UI.createView({
    width: platformWidth,
    height: 375,
    left: 0,
    top: 0
  });
  
  var FormView = Titanium.UI.createView({
    width: 260,
    left: 30,
    top: 30
  });
  
  var AccountNameLabel = Titanium.UI.createLabel({
    text: _accountName,
    height: 23,
    top: 0,
    left: 0,
    font: {
      fontSize: 21,
      fontWeight: "bold"
    },
    shadowColor: "white",
    shadowOffset: {x:0, y: 0.5}
  });
  
  var InstructionsLabel = Titanium.UI.createLabel({
    width: 260,
    height: "auto",
    text: "Enter a nickname for this account, then tap “Continue” to add more holdings.",
    top: (AccountNameLabel.size.height + 10),
    font: {fontSize: 14},
    color: "#998654",
    shadowColor: "white",
    shadowOffset: {x:0, y: 0.5}
  });
  
  var NicknameTextField = Titanium.UI.createTextField({
    width: 260,
    height: 33,
    top: 110,
    left: 0,
    hintText: "Nickname",
    value: (_accountName === "") ? "" : _accountName,
    borderColor: "#9d9467",
    borderRadius: 7,
    suppressReturn: true,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
  });
  
  var ContinueButton = Titanium.UI.createButton({
    title: "Continue",
    width: 240,
    height: 33,
    anchorPoint: {x: 0.5},
    top: 154,
    color: "white",
    font: {
      fontSize: 14,
      fontWeight: "bold"
    },
    backgroundImage: path + "images/btn_blue_flat.png"
  });
  
  var SecurityMessage = win.HT.View.createMessageView({text: "Visit Hivetrader.com for more information on security.", target: "someWindow"}).bar;
  
  // Bind the blur/focus events
  NicknameTextField.addEventListener("focus", focusForm);
  NicknameTextField.addEventListener("blur", blurForm);
  
  ContinueButton.addEventListener("click", function() {
    var nickname = NicknameTextField.value;
    var BackButton = win.HT.View.customBackButton({title: "Back"});
    AddEditHoldingsWindow.leftNavButton = BackButton;
    
    BackButton.addEventListener("click", function(e) {
      AddEditHoldingsWindow.close();
    });
    
    if (nickname === "") {
      alert("Please choose a nickname.");
    } else {
      Ti.UI.currentTab.open(AddEditHoldingsWindow, {animated:true});
    }
  });
  
  // Add everything
  FormView.add(AccountNameLabel);
  FormView.add(InstructionsLabel);
  FormView.add(NicknameTextField);
  FormView.add(ContinueButton);
  view.add(FormView);
  view.add(SecurityMessage);
  win.add(view);
})();