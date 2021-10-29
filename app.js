const images = [{
        id: 1,
        url: './assets/big.jpg',
    },
    {
        id: 2,
        url: './assets/download.jpg',
    },
    {
        id: 3,
        url: './assets/download3.jpg',
    },
    {
        id: 4,
        url: './assets/images.jpg',
    },
    {
        id: 5,
        url: './assets/images2.jpg',
    },
]

let slidePosition = 0;
var photo = document.getElementsByTagName('img')[0]
photo.setAttribute("src", images[slidePosition].url)
let timer = setInterval(() => {
    photo.setAttribute("src", images[slidePosition].url)
    slidePosition++
}, 3000);

function stopTimer() {
    clearInterval(timer)
}

document
    .getElementById("carousel__button--next")
    .addEventListener("click", function() {
        moveToNextSlide(images.length);
        stopTimer()
    });
document
    .getElementById("carousel__button--prev")
    .addEventListener("click", function() {
        moveToPrevSlide(images.length);
        stopTimer()
    })

function moveToNextSlide(totalSlides) {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    photo.setAttribute("src", images[slidePosition].url)
}

function moveToPrevSlide(totalSlides) {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    photo.setAttribute("src", images[slidePosition].url)
}