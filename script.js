var slider = document.getElementById("fontSize");
var output = document.getElementById("fontSizePreview");
var sizevalue = 24;
var root = document.querySelector(":root");
var gsf = document.getElementById("GoogleSansFlex");
var gsfw = document.getElementById("GoogleSansFlexWeight");
var gsfwslider = document.getElementById("GoogleSansFlexWeightSlider");
var gsfwi = document.getElementById("GoogleSansFlexWidth");
var gsfwislider = document.getElementById("GoogleSansFlexWidthSlider");
var gsfs = document.getElementById("GoogleSansFlexSlant");
var gsfsslider = document.getElementById("GoogleSansFlexSlantSlider");
var gsfsvalue = 0;
var gsfo = document.getElementById("GoogleSansFlexOptical");
var gsfocheck = document.getElementById("GoogleSansFlexOpticalCheck");
var gsfoslider = document.getElementById("GoogleSansFlexOpticalSlider");
var gsfovalue = sizevalue;
var rf = document.getElementById("RobotoFlex");
var rfw = document.getElementById("RobotoFlexWeight");
var rfwslider = document.getElementById("RobotoFlexWeightSlider");
var rfwi = document.getElementById("RobotoFlexWidth");
var rfwislider = document.getElementById("RobotoFlexWidthSlider");
var rfs = document.getElementById("RobotoFlexSlant");
var rfsslider = document.getElementById("RobotoFlexSlantSlider");
var rfsvalue = 0;
var rfo = document.getElementById("RobotoFlexOptical");
var rfocheck = document.getElementById("RobotoFlexOpticalCheck");
var rfoslider = document.getElementById("RobotoFlexOpticalSlider");
var rfovalue = sizevalue;
var sfpv = document.getElementById("SFProVariable");
var sfpvw = document.getElementById("SFProVariableWeight");
var sfpvwslider = document.getElementById("SFProVariableWeightSlider");
var sfpvwi = document.getElementById("SFProVariableWidth");
var sfpvwislider = document.getElementById("SFProVariableWidthSlider");
var sfpvo = document.getElementById("SFProVariableOptical");
var sfpvocheck = document.getElementById("SFProVariableOpticalCheck");
var sfpvoslider = document.getElementById("SFProVariableOpticalSlider");
var sfpvovalue = sizevalue;
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
var avcsvalue = 0;

output.innerHTML = slider.value;
gsfw.innerHTML = gsfwslider.value;
gsfwi.innerHTML = gsfwislider.value;
gsfs.innerHTML = gsfsslider.value;
gsfo.innerHTML = gsfoslider.value;
rfw.innerHTML = rfwslider.value;
rfwi.innerHTML = rfwislider.value;
rfs.innerHTML = rfsslider.value;
rfo.innerHTML = rfoslider.value;
sfpvw.innerHTML = sfpvwslider.value;
sfpvwi.innerHTML = sfpvwislider.value;
sfpvo.innerHTML = sfpvoslider.value;
mvcw.innerHTML = mvcwslider.value;
mvcwi.innerHTML = mvcwislider.value;
avcw.innerHTML = avcwslider.value;
avcwi.innerHTML = avcwislider.value;
avcs.innerHTML = avcsslider.value;

slider.oninput = function () {
  var sizevalue = this.value;
  output.innerHTML = sizevalue;
  root.style.setProperty("--font-preview-size", sizevalue + "px");
  if (gsfocheck.checked == true) {
    var gsfovalue = sizevalue;
    gsfoslider.value = gsfovalue;
    gsfo.innerHTML = gsfovalue;
    gsf.style.fontVariationSettings =
      "'slnt' " + gsfsvalue + ", 'opsz' " + gsfovalue;
  }
  if (rfocheck.checked == true) {
    var rfovalue = sizevalue;
    rfoslider.value = rfovalue;
    rfo.innerHTML = rfovalue;
    rf.style.fontVariationSettings =
      "'slnt' " + rfsvalue + ", 'opsz' " + rfovalue;
  }
  if (sfpvocheck.checked == true) {
    var sfpvovalue = sizevalue;
    sfpvoslider.value = sfpvovalue;
    sfpvo.innerHTML = sfpvovalue;
    sfpv.style.fontVariationSettings = "'opsz' " + sfpvovalue;
  }
};

function fontSizeChange(number) {
  var sizevalue = this.value;
  output.innerHTML = sizevalue;
  slider.value = sizevalue;
  root.style.setProperty("--font-preview-size", sizevalue + "px");
  if (gsfocheck.checked == true) {
    var gsfovalue = sizevalue;
    gsfoslider.value = gsfovalue;
    gsfo.innerHTML = gsfovalue;
    gsf.style.fontVariationSettings =
      "'slnt' " + gsfsvalue + ", 'opsz' " + gsfovalue;
  }
  if (rfocheck.checked == true) {
    var rfovalue = sizevalue;
    rfoslider.value = rfovalue;
    rfo.innerHTML = rfovalue;
    rf.style.fontVariationSettings =
      "'slnt' " + rfsvalue + ", 'opsz' " + rfovalue;
  }
  if (sfpvocheck.checked == true) {
    var sfpvovalue = sizevalue;
    sfpvoslider.value = sfpvovalue;
    sfpvo.innerHTML = sfpvovalue;
    sfpv.style.fontVariationSettings = "'opsz' " + sfpvovalue;
  }
}

function GoogleSansFlexWeightChange(number) {
  gsfw.innerHTML = number;
  gsfwslider.value = number;
  gsf.style.fontWeight = number;
}

function GoogleSansFlexWidthChange(number) {
  gsfwi.innerHTML = number;
  gsfwislider.value = number;
  gsf.style.fontStretch = number + "%";
}

function GoogleSansFlexSlantChange(number) {
  var gsfsvalue = number;
  gsfs.innerHTML = gsfsvalue;
  gsfsslider.value = gsfsvalue;
  gsf.style.fontVariationSettings =
    "'slnt' " + gsfsvalue + ", 'opsz' " + gsfovalue;
}

function GoogleSansFlexOpticalCheckbox() {
  if (gsfocheck.checked == true) {
    var gsfovalue = sizevalue;
    gsfoslider.disabled = true;
    gsfoslider.value = gsfovalue;
    gsfo.innerHTML = gsfovalue;
  } else {
    gsfoslider.disabled = false;
  }
  gsf.style.fontVariationSettings =
    "'slnt' " + gsfsvalue + ", 'opsz' " + gsfovalue;
}

function RobotoFlexWeightChange(number) {
  rfw.innerHTML = number;
  rfwslider.value = number;
  rf.style.fontWeight = number;
}

function RobotoFlexWidthChange(number) {
  rfwi.innerHTML = number;
  rfwislider.value = number;
  rf.style.fontStretch = number + "%";
}

function RobotoFlexSlantChange(number) {
  var rfsvalue = number;
  rfs.innerHTML = rfsvalue;
  rfsslider.value = rfsvalue;
  rf.style.fontVariationSettings =
    "'slnt' " + rfsvalue + ", 'opsz' " + rfovalue;
}

function RobotoFlexOpticalCheckbox() {
  if (rfocheck.checked == true) {
    var rfovalue = sizevalue;
    rfoslider.disabled = true;
    rfoslider.value = rfovalue;
    rfo.innerHTML = rfovalue;
  } else {
    rfoslider.disabled = false;
  }
  rf.style.fontVariationSettings =
    "'slnt' " + rfsvalue + ", 'opsz' " + rfovalue;
}

function SFProVariableWeightChange(number) {
  sfpvw.innerHTML = number;
  sfpvwslider.value = number;
  sfpv.style.fontWeight = number;
}

function SFProVariableWidthChange(number) {
  sfpvwi.innerHTML = number;
  sfpvwislider.value = number;
  sfpv.style.fontStretch = number + "%";
}

function SFProVariableOpticalCheckbox() {
  if (sfpvocheck.checked == true) {
    var sfpvovalue = sizevalue;
    sfpvoslider.disabled = true;
    sfpvoslider.value = sfpvovalue;
    sfpvo.innerHTML = sfpvovalue;
  } else {
    sfpvoslider.disabled = false;
  }
  sfpv.style.fontVariationSettings = "'opsz' " + sfpvovalue;
}

function MyriadVariableConceptWeightChange(number) {
  mvcw.innerHTML = number;
  mvcwslider.value = number;
  mvc.style.fontWeight = number;
}

function MyriadVariableConceptWidthChange(number) {
  mvcwi.innerHTML = number;
  mvcwislider.value = number;
  mvc.style.fontStretch = number + "%";
}

function AcuminVariableConceptWeightChange(number) {
  avcw.innerHTML = number;
  avcwslider.value = number;
  avc.style.fontWeight = number;
}

function AcuminVariableConceptWidthChange(number) {
  avcwi.innerHTML = number;
  avcwislider.value = number;
  avc.style.fontStretch = number + "%";
}

function AcuminVariableConceptSlantChange(number) {
  var avcsvalue = number;
  avcs.innerHTML = avcsvalue;
  avcsslider.value = avcsvalue;
  avc.style.fontVariationSettings = "'slnt' " + avcsvalue * -1;
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
  var gsfsvalue = this.value;
  gsfs.innerHTML = gsfsvalue;
  gsf.style.fontVariationSettings =
    "'slnt' " + gsfsvalue + ", 'opsz' " + gsfovalue;
};

gsfoslider.oninput = function () {
  var gsfovalue = this.value;
  gsfo.innerHTML = gsfovalue;
  gsf.style.fontVariationSettings =
    "'slnt' " + gsfsvalue + ", 'opsz' " + gsfovalue;
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
  var rfsvalue = this.value;
  rfs.innerHTML = this.value;
  rf.style.fontVariationSettings =
    "'slnt' " + rfsvalue + ", 'opsz' " + rfovalue;
};

rfoslider.oninput = function () {
  var rfovalue = this.value;
  rfo.innerHTML = rfovalue;
  rf.style.fontVariationSettings =
    "'slnt' " + rfsvalue + ", 'opsz' " + rfovalue;
};

sfpvwslider.oninput = function () {
  sfpvw.innerHTML = this.value;
  sfpv.style.fontWeight = this.value;
};

sfpvwislider.oninput = function () {
  sfpvwi.innerHTML = this.value;
  sfpv.style.fontStretch = this.value + "%";
};

sfpvoslider.oninput = function () {
  var sfpvovalue = this.value;
  sfpvo.innerHTML = sfpvovalue;
  sfpv.style.fontVariationSettings = "'opsz' " + sfpvovalue;
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
  var avcsvalue = this.value;
  avcs.innerHTML = avcsvalue;
  avc.style.fontVariationSettings = "'slnt' " + avcsvalue * -1;
};
