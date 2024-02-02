var slider = document.getElementById("fontSize");
var output = document.getElementById("fontSizePreview");
var preview1 = document.getElementById("textPreview1");
var preview2 = document.getElementById("textPreview2");
var preview3 = document.getElementById("textPreview3");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  preview1.style.fontSize = this.value + "px";
  preview2.style.fontSize = this.value + "px";
  preview3.style.fontSize = this.value + "px";
};
