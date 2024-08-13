// Array of random movie image URLs
const movieImages = [
    "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Sita-Ramam-poster_1656325728.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDI4OTM1ZjMtOWQxMC00OTY5LTg3NjQtMjlhMWVjODFlYTY4XkEyXkFqcGdeQXVyMTYzMTU3Njgx._V1_.jpg",
    "https://i.ytimg.com/vi/4ifQT8qAx8M/sddefault.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-0-371253/list/1170x658withlogo403946387.jpg",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9771/1599771-h-2ce23e9cb135"
];

let currentIndex = 0;

// Select the image element from the DOM
const slideshowElement = document.getElementById('slideshow');

// Function to update the slideshow image
function updateSlideshow() {
    // Set the image source to the current index
    slideshowElement.src = movieImages[currentIndex];

    // Increment the index and loop back to 0 if it exceeds the length of the array
    currentIndex = (currentIndex + 1) % movieImages.length;
}

// Initialize the slideshow with the first image
updateSlideshow();

// Use setInterval to update the slideshow every 2000ms (2 seconds)
setInterval(updateSlideshow, 2000);
