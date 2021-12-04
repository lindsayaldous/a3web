// Group 15: Sneha Mohan, Janelli Powell, Praveen Mohan, Visakh Vijayan, Lindsay Aldous
// Last modified 5 December 2021 by L. Aldous

// This JS provides the navigation controls for the images in the Cartography page slideshow
// Commenting out just this bit doesn't seem to break anything?
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// Allows the user to click the left or right arrow to move through the slide deck in sequence
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
// Allows the user to click a dot to switch to a different slide (image)
function currentSlide(n) {
showSlides(slideIndex = n);
}

// Controls the image display
//
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("ourSlides");
var dots = document.getElementsByClassName("dot");
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
