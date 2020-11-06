const selectFirst = document.getElementById("first-img")
const selectSecond = document.getElementById("second-img")
const selectThird = document.getElementById("third-img")
const image = document.querySelector(".navbar")
const screen = window.matchMedia("(max-width: 600px)").matches
const navLinkShow = document.querySelector(".nav-items")
const hamIcon =   document.getElementById("ham-icon");
const closeIcon =   document.getElementById("close-icon")

function showFirst(){
  selectFirst.style.display = "inline-block";
  selectSecond.style.display = "none";
  selectThird.style.display = "none";
  if(screen){
    image.style.backgroundImage = "url('./images/mobile-image-hero-1.jpg')";
  }else{
    image.style.backgroundImage = "url('./images/desktop-image-hero-1.jpg')";
  }
}
function showSecond(){
  selectFirst.style.display = "none";
  selectSecond.style.display = "inline-block";
  selectThird.style.display = "none";
  if(screen){
    image.style.backgroundImage = "url('./images/mobile-image-hero-2.jpg')";
  }else{
    image.style.backgroundImage = "url('./images/desktop-image-hero-2.jpg')";
  }
}
function showThird(){
  selectFirst.style.display = "none";
  selectSecond.style.display = "none";
  selectThird.style.display = "inline-block";
  if(screen){
    image.style.backgroundImage = "url('./images/mobile-image-hero-3.jpg')";
  }else{
    image.style.backgroundImage = "url('./images/desktop-image-hero-3.jpg')";
  }
}


function navbarShow(obj , linksShow){
  if (linksShow === 'show'){
  navLinkShow.classList.toggle("links-show");
  hamIcon.style.display="none";
  closeIcon.style.display="inline";
}
else
if (linksShow === 'close'){
  navLinkShow.classList.toggle("links-show");
  hamIcon.style.display="inline";
  closeIcon.style.display="none";
}
}
