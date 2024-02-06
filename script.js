var slider = document.getElementById("fontSize");
var output = document.getElementById("fontSizePreview");
var root = document.querySelector(":root");
var gsf = document.getElementById("GoogleSansFlex");
var gsfw = document.getElementById("GoogleSansFlexWeight");
var gsfwslider = document.getElementById("GoogleSansFlexWeightSlider");
var gsfwi = document.getElementById("GoogleSansFlexWidth");
var gsfwislider = document.getElementById("GoogleSansFlexWidthSlider");
var rf = document.getElementById("RobotoFlex");
var rfw = document.getElementById("RobotoFlexWeight");
var rfwslider = document.getElementById("RobotoFlexWeightSlider");
var rfwi = document.getElementById("RobotoFlexWidth");
var rfwislider = document.getElementById("RobotoFlexWidthSlider");
var sfpv = document.getElementById("SFProVariable");
var sfpvw = document.getElementById("SFProVariableWeight");
var sfpvwslider = document.getElementById("SFProVariableWeightSlider");
var sfpvwi = document.getElementById("SFProVariableWidth");
var sfpvwislider = document.getElementById("SFProVariableWidthSlider");

output.innerHTML = slider.value;
gsfw.innerHTML = gsfwslider.value;
gsfwi.innerHTML = gsfwislider.value;
rfw.innerHTML = rfwslider.value;
rfwi.innerHTML = rfwislider.value;
sfpvw.innerHTML = sfpvwslider.value;
sfpvwi.innerHTML = sfpvwislider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  root.style.setProperty("--font-preview-size", this.value + "px");
};

function fontWeightChange(element, fontweight) {
  element.style.fontWeight = fontweight;
  elementw.innerHTML = this.value;
}

function fontWidthChange(element, fontwidth) {
  element.style.fontStretch = fontwidth + "%";
  elementwi.innerHTML = this.value;
}

function fontSizeChange(number) {
  output.innerHTML = number;
  slider.value = number;
  root.style.setProperty("--font-preview-size", number + "px");
}

gsfwslider.oninput = function () {
  gsfw.innerHTML = this.value;
  gsf.style.fontWeight = this.value;
};

gsfwislider.oninput = function () {
  gsfwi.innerHTML = this.value;
  gsf.style.fontStretch = this.value + "%";
};

rfwslider.oninput = function () {
  rfw.innerHTML = this.value;
  rf.style.fontWeight = this.value;
};

rfwislider.oninput = function () {
  rfwi.innerHTML = this.value;
  rf.style.fontStretch = this.value + "%";
};

sfpvwslider.oninput = function () {
  sfpvw.innerHTML = this.value;
  sfpv.style.fontWeight = this.value;
};

sfpvwislider.oninput = function () {
  sfpvwi.innerHTML = this.value;
  sfpv.style.fontStretch = this.value + "%";
};
