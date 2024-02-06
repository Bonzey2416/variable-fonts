var slider = document.getElementById("fontSize");
var output = document.getElementById("fontSizePreview");
var root = document.querySelector(":root");
var elementw = "element" + "w";
var gsf = document.getElementById("GoogleSansFlex");
var gsfw = document.getElementById("GoogleSansFlexWeight");
var gsfwslider = document.getElementById("GoogleSansFlexWeightSlider");
var rf = document.getElementById("RobotoFlex");
var rfw = document.getElementById("RobotoFlexWeight");
var rfwslider = document.getElementById("RobotoFlexWeightSlider");
var sfpv = document.getElementById("SFProVariable");
var sfpvw = document.getElementById("SFProVariableWeight");
var sfpvwslider = document.getElementById("SFProVariableWeightSlider");

output.innerHTML = slider.value;
gsfw.innerHTML = gsfwslider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  root.style.setProperty("--font-preview-size", this.value + "px");
};

function fontWeightChange(element, fontweight) {
  element.style.fontWeight = fontweight;
  elementw.innerHTML = this.value;
}

gsfwslider.oninput = function () {
  gsfw.innerHTML = this.value;
  gsf.style.fontWeight = this.value;
};

rfwslider.oninput = function () {
  rfw.innerHTML = this.value;
  rf.style.fontWeight = this.value;
};

sfpvwslider.oninput = function () {
  sfpvw.innerHTML = this.value;
  sfpv.style.fontWeight = this.value;
};
