var slider = document.getElementById("fontSize");
var output = document.getElementById("fontSizePreview");
var root = document.querySelector(":root");
var googlesansflex = document.getElementById("GoogleSansFlex");
var gsfw = document.getElementById("GoogleSansFlexWeight");
var gsfwslider = document.getElementById("GoogleSansFlexWeightSlider");
var robotoflex = document.getElementById("RobotoFlex");
var rfw = document.getElementById("RobotoFlexWeight");
var rfwslider = document.getElementById("RobotoFlexWeightSlider");

output.innerHTML = slider.value;
gsfw.innerHTML = gsfwslider.value;
rfw.innerHTML = rfwslider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  root.style.setProperty("--font-preview-size", this.value + "px");
};

function fontWeightChange(element, fontweight) {
  element.style.fontWeight = fontweight;
}

gsfwslider.oninput = function () {
  gsfw.innerHTML = this.value;
  googlesansflex.style.fontWeight = this.value;
};

rfwslider.oninput = function () {
  rfw.innerHTML = this.value;
  robotoflex.style.fontWeight = this.value;
};
