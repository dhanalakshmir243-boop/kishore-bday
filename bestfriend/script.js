// PAGE 1 → PAGE 2

function startBirthday() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}


// PAGE 2 → PAGE 3

function nextPage() {
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");
}


// SPECIAL MESSAGES

const messages = [
    "You are a really special person! 💗",

    "Your presence can make ordinary moments feel memorable. ✨",

    "I hope you always keep that beautiful smile! 😊",

    "May you always have people around you who care about you. 💕",

    "You deserve lots of happiness, laughter and wonderful memories! 🎉"
];

let messageIndex = 0;


function nextMessage() {

    messageIndex++;

    if (messageIndex < messages.length) {

        document.getElementById("messageText").textContent =
            messages[messageIndex];

    } else {

        document.getElementById("page3").classList.remove("active");
        document.getElementById("page4").classList.add("active");
    }
}


// BIRTHDAY WISHES

const wishes = [
    "May this birthday bring you lots of happiness! 🎂",

    "May all your dreams slowly turn into reality. ✨",

    "May your 2026 be filled with beautiful memories! 💗",

    "Keep smiling, keep shining and enjoy your special day! 🎉"
];

let wishIndex = 0;


function nextWish() {

    wishIndex++;

    if (wishIndex < wishes.length) {

        document.getElementById("wishText").textContent =
            wishes[wishIndex];

    } else {

        document.getElementById("page4").classList.remove("active");
        document.getElementById("page5").classList.add("active");
    }
}