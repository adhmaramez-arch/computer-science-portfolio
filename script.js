let clickCount = 0;

const welcomeButton = document.getElementById ("welcomeBtn");
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetBtn");
welcomeButton.addEventListener("click", function() {

    clickCount++;    
counter.textContent = "You clicked"+clickCount + "times";
    if (message.textContent === "") {
        message.textContent = "welcome! Thank you for visiting my portfolio.";
        welcomeButton.textContent = "Hide Message";
    } else {
        message.textContent = "";
        welocomeButton.textContent = "Say Hello";
    }
    });
    resetButton.addEventListener("click", function () {
        clickCount = 0;
        counter.textContent = "";
        message.textContent = "";
        welcomeButton.textContent = "Say Hello";
    })
    function sayWelcome() {
        console.log("welcome to my portfolio!");
    }
    sayWelcome();

    