// loading
$(document).ready(() => $(".loading").fadeOut(2000));



// make the fixed button disappear at the first section
// select item 
let fixed = document.querySelector(".toTop");

window.onscroll = pageScroll;

function pageScroll() {
  if (this.scrollY >= 500) {
    fixed.classList.add("show")
  } else {
    fixed.classList.remove("show")

  }
}

fixed.onclick = function () {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
};