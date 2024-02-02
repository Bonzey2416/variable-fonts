var slider = document.getElementById("fontSize");
var output = document.getElementById("fontSizePreview");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
