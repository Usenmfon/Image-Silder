let slidePosition = 1;
var photo = document.getElementsByTagName('img')[0]
    // var totalSlides


document
    .getElementById("carousel__button--next")
    .addEventListener("click", function() {
        moveToNextSlide();
    });
document
    .getElementById("carousel__button--prev")
    .addEventListener("click", function() {
        moveToPrevSlide();
    })


fetch(`https://jsonplaceholder.typicode.com/photos/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
            // photo.setAttribute("src", data.url)
        moveToNextSlide(data.length)
        moveToPrevSlide(data.length)
    }).catch(error => console.log(error))


function moveToNextSlide(totalSlides) {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    fetch(`https://jsonplaceholder.typicode.com/photos/${slidePosition}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            photo.setAttribute("src", data.url)
        }).catch(error => console.log(error))
}

function moveToPrevSlide(totalSlides) {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    fetch(`https://jsonplaceholder.typicode.com/photos/${slidePosition}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            photo.setAttribute("src", data.url)
        }).catch(error => console.log(error))
}

// let container = document.querySelector('.container')
// let photo = document.createElement('img')
// photo.classList.add('image')
// container.appendChild(photo)
// let i = 2
// fetch(`https://jsonplaceholder.typicode.com/photos/${i}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         photo.setAttribute("src", data.url)
//     });




// fetch('https://jsonplaceholder.typicode.com/photos/1')
//     .then(response => response.json())
//     .then(data => console.log(data));

// fetch('https://dog.ceo/api/breed/hound/images/random/4')
//     .then(response => response.json())
//     .then(json => console.log(json))