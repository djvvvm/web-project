let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("header__main-image");
    
    // Hide all images except the first one
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    
    // Change image every 5 seconds
    setInterval(() => {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slides[slideIndex].style.opacity = 1;
        for (let i = 0; i < slides.length; i++) {
            if (i !== slideIndex) {
                slides[i].style.opacity = 0;
            }
        }
    }, 5000);
}




