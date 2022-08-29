var div = document.querySelectorAll(".text");



for (var i = 0; i < div.length; i++) {
  div[i].addEventListener("click", function () {
    var colors = ["#f0f", "#0ff", "#f00"];
    var Rand = Math.floor(Math.random() * colors.length);

    var Randcolor = colors[Rand];

    console.log(Randcolor);

    this.style.background = Randcolor;
  });
}
