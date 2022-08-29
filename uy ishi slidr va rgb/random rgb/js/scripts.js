var div = document.querySelectorAll(".text");

for (var i = 0; i < div.length; i++) {
  div[i].addEventListener("click", function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    this.style.background = bgColor;
  });
}
