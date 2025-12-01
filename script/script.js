let SlideIndex = 0;
showslides();
function showslides() {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    SlideIndex++;
    if (SlideIndex > slides.length) { SlideIndex = 1 }
    slides[SlideIndex - 1].style.display = "block";
    setTimeout(showslides, 5000); // Change image every 5 seconds
}