/* script.js */

var clickOnButton = function() {
    alert("Click on button!");
};

window.onload = function() {
    var buttonTestEl = document.getElementById("buttonTest");
    buttonTestEl.addEventListener("click", clickOnButton);
};

