var next = document.querySelector(`.btn-next`); // object
var prev = document.querySelector(`.btn-prev`);
var slider = document.querySelector(`.slider`);

var images = document.querySelectorAll(`.slider-img img`); // array
console.log(images);
var i = 0;

next.onclick = nextSlider;

function nextSlider() {
  images[i].style.display = `none`;
  i++; // 7
  console.log(i);
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = `block`;
}

var SetTime = setInterval(nextSlider, 2000);

// console.log(newInterval)

prev.onclick = function () {
  images[i].style.display = `none`;
  i--; // 7
  //   console.log(i);
  if (i < 0) {
    i = images.length - 1;
  }
  images[i].style.display = `block`;
};
// slider.addEventListener(`mouseover`, function asd() {
//   setTimeout(() => {
//     clearInterval(SetTime);
//   }, 1000);
// });

// slider.addEventListener(`mouseout`, function () {
//   setInterval(nextSlider, 2000);
// });

slider.onclick = srrr;

function srrr() {
  setTimeout(() => {
    clearInterval(SetTime);
  }, 1000);
}
