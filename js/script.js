window.addEventListener("load" , ()=>{

    const spinner =document.getElementById("loader")
    spinner.classList.add("fade-out")

    setTimeout(()=>{
        spinner.style.display = "none"
    }, 300)
})


// Card Slider
let slide = document.querySelector(".container")
let card = document.querySelectorAll(".slider .card")
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")


let index = 0


function showimage() {
    slide.style.transform = `translateX(${-index * 100}%)`;

}

prev.addEventListener("click", () => {
    index = (index < card.length - 1) ? index + 1 : 0
    showimage();
});
next.addEventListener("click", () => {
    index = (index > 0) ? index - 1 : card.length - 1;
    showimage();
});

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// Galley Box
let next_popupBox = document.getElementById("next-popup-box")
let prev_popupBox = document.getElementById("prev-popup-box")
let close_popupBox = document.getElementById("close-popup-box")
let popup_container = document.getElementById("box-container")
let box_items = document.getElementById("controls")
let gallery_img = document.querySelectorAll("#images-box img")

let ImgArr = []
for (let img = 0; img < gallery_img.length; img++) {
    ImgArr.push(gallery_img[img])
}


let currentIndex = 0

function showImage(image) {
    box_items.style.backgroundImage = `url(${ImgArr[image].src})`;   
    box_items.style.backgroundPosition = "center";
    box_items.style.backgroundSize = "cover";
    box_items.style.backgroundRepeat = "no-repeat";
}


for (let index = 0; index < ImgArr.length; index++) {
    (function (index) {
        ImgArr[index].addEventListener("click", () => {
            popup_container.style.display = "flex"
            currentIndex = index
            showImage(currentIndex)
        })
    })(index)
}

next_popupBox.addEventListener("click", () => {
    (currentIndex !== ImgArr.length - 1) ? currentIndex++ : currentIndex = 0
    showImage(currentIndex)
})

prev_popupBox.addEventListener("click", () => {
    (currentIndex < 0) ? currentIndex = ImgArr.length - 1 : currentIndex--
    showImage(currentIndex)
})

close_popupBox.addEventListener("click", () => {
    popup_container.style.display = "none"
})

popup_container.addEventListener("click", (Close) => {
    if (Close.target === popup_container) {
        popup_container.style.display = "none"

    }
})



//! Input Validation

document.getElementById("contact-form-id").addEventListener("submit", function (e) {
    e.preventDefault()

    // Input
    let names = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // Errors
    let name_error = document.getElementById("name-error")
    let email_error = document.getElementById("email-error")
    let subject_error = document.getElementById("subject-error")
    let message_error = document.getElementById("message-error")

    name_error.textContent = "";
    email_error.textContent = "";
    subject_error.textContent = "";
    message_error.textContent = "";

    valid = true

    //name
    if (names === "") {
        name_error.textContent = "Please Enter Your name"
        valid = false

    } else if (names.length < 3 || names.length > 15) {
        name_error.textContent = "Name must be 3-15 characters"
        valid = false
    }

    //Email

    if (email === "") {
        email_error.textContent = "Please enter your email"
        valid = false
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        email_error.textContent = "Email should Contain @ or . Symbol"
        valid = false
    }

    if (subject === "" || subject.length < 3) {
        subject_error.textContent = "Subject must be at least contain 3 characters."
        valid = false

    }

    //message

    if (message === "" || message.length < 3) {
        message_error.textContent = "Message must be at least contain 3 characters."
        valid = false

    }


    // All valid

    if (valid) {
        alert("Form submitted successfully!")
    }


})