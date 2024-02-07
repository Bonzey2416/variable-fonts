var slider = document.getElementById("fontSize");
var output = document.getElementById("fontSizePreview");
var root = document.querySelector(":root");
var gsf = document.getElementById("GoogleSansFlex");
var gsfw = document.getElementById("GoogleSansFlexWeight");
var gsfwslider = document.getElementById("GoogleSansFlexWeightSlider");
var gsfwi = document.getElementById("GoogleSansFlexWidth");
var gsfwislider = document.getElementById("GoogleSansFlexWidthSlider");
var gsfs = document.getElementById("GoogleSansFlexSlant");
var gsfsslider = document.getElementById("GoogleSansFlexSlantSlider");
var rf = document.getElementById("RobotoFlex");
var rfw = document.getElementById("RobotoFlexWeight");
var rfwslider = document.getElementById("RobotoFlexWeightSlider");
var rfwi = document.getElementById("RobotoFlexWidth");
var rfwislider = document.getElementById("RobotoFlexWidthSlider");
var rfs = document.getElementById("RobotoFlexSlant");
var rfsslider = document.getElementById("RobotoFlexSlantSlider");
var sfpv = document.getElementById("SFProVariable");
var sfpvw = document.getElementById("SFProVariableWeight");
var sfpvwslider = document.getElementById("SFProVariableWeightSlider");
var sfpvwi = document.getElementById("SFProVariableWidth");
var sfpvwislider = document.getElementById("SFProVariableWidthSlider");
var mvc = document.getElementById("MyriadVariableConcept");
var mvcw = document.getElementById("MyriadVariableConceptWeight");
var mvcwslider = document.getElementById("MyriadVariableConceptWeightSlider");
var mvcwi = document.getElementById("MyriadVariableConceptWidth");
var mvcwislider = document.getElementById("MyriadVariableConceptWidthSlider");
var avc = document.getElementById("AcuminVariableConcept");
var avcw = document.getElementById("AcuminVariableConceptWeight");
var avcwslider = document.getElementById("AcuminVariableConceptWeightSlider");
var avcwi = document.getElementById("AcuminVariableConceptWidth");
var avcwislider = document.getElementById("AcuminVariableConceptWidthSlider");
var avcs = document.getElementById("AcuminVariableConceptSlant");
var avcsslider = document.getElementById("AcuminVariableConceptSlantSlider");

output.innerHTML = slider.value;
gsfw.innerHTML = gsfwslider.value;
gsfwi.innerHTML = gsfwislider.value;
gsfs.innerHTML = gsfsslider.value;
rfw.innerHTML = rfwslider.value;
rfwi.innerHTML = rfwislider.value;
rfs.innerHTML = rfsslider.value;
sfpvw.innerHTML = sfpvwslider.value;
sfpvwi.innerHTML = sfpvwislider.value;
mvcw.innerHTML = mvcwslider.value;
mvcwi.innerHTML = mvcwislider.value;
avcw.innerHTML = avcwslider.value;
avcwi.innerHTML = avcwislider.value;
avcs.innerHTML = avcsslider.value;

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

function fontSlantChange(element, fontslant) {
  element.style.fontStyle = "oblique " + fontslant + "deg";
  elements.innerHTML = this.value;
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

gsfsslider.oninput = function () {
  gsfs.innerHTML = this.value;
  gsf.style.fontStyle = "oblique " + this.value * -1 + "deg";
};

rfwslider.oninput = function () {
  rfw.innerHTML = this.value;
  rf.style.fontWeight = this.value;
};

rfwislider.oninput = function () {
  rfwi.innerHTML = this.value;
  rf.style.fontStretch = this.value + "%";
};

rfsslider.oninput = function () {
  rfs.innerHTML = this.value;
  rf.style.fontStyle = "oblique " + this.value * -1 + "deg";
};

sfpvwslider.oninput = function () {
  sfpvw.innerHTML = this.value;
  sfpv.style.fontWeight = this.value;
};

sfpvwislider.oninput = function () {
  sfpvwi.innerHTML = this.value;
  sfpv.style.fontStretch = this.value + "%";
};

mvcwslider.oninput = function () {
  mvcw.innerHTML = this.value;
  mvc.style.fontWeight = this.value;
};

mvcwislider.oninput = function () {
  mvcwi.innerHTML = this.value;
  mvc.style.fontStretch = this.value + "%";
};

avcwslider.oninput = function () {
  avcw.innerHTML = this.value;
  avc.style.fontWeight = this.value;
};

avcwislider.oninput = function () {
  avcwi.innerHTML = this.value;
  avc.style.fontStretch = this.value + "%";
};

avcsslider.oninput = function () {
  avcs.innerHTML = this.value;
  avc.style.fontStyle = "oblique " + this.value + "deg";
};
