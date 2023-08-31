let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


let slideIndexS = 1;
showSlidesS(slideIndexS);

function plusSlidesS(n) {
  showSlidesS(slideIndexS += n);
}

function currentSlideS(n) {
  showSlidesS(slideIndexS = n);
}

function showSlidesS(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesS");
  let dots = document.getElementsByClassName("dotS");
  if (n > slides.length) {slideIndexS = 1}    
  if (n < 1) {slideIndexS = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexS-1].style.display = "block";  
  dots[slideIndexS-1].className += " active";
}