// Magic 8 Ball Assignment

// Variables for HTML Elements
let magicBallEl = document.getElementById("magicBall");
let queInputEl = document.getElementById("queInput");
let ansInputEl = document.getElementById("ansInput");

// Add Event Listener
magicBallEl.addEventListener("click", responseOut);

// Event Functions
function responseOut() {
    // Case Insensitive
    let queIn = queInputEl.value.toLowerCase();

    // Set responses to specific questions
    if (queIn === "does a magic 8 ball actully work?" || queIn === "does a magic 8 ball actully work") {
        ansInputEl.innerHTML = "How dare you doubt me!";
    } else if (queIn === "is javascript awesome?" || queIn === "is javascript awesome") {
        ansInputEl.innerHTML = "Of Course!";
    } else if (queIn === "is coding fun?" || queIn === "is coding fun") {
        ansInputEl.innerHTML = "Yes, Of Course it is!!";
    } else if (queIn === "") {
        ansInputEl.innerHTML = "Please ask a question...";
    } else {
        // Probability
        let randomAns = Math.random();

        // Probabilities for the different answers
        if (queIn !== undefined && randomAns < 0.2) {
            ansInputEl.innerHTML = "Without a Doubt.";
        } else if (queIn !== undefined && randomAns < 0.3) {
            ansInputEl.innerHTML = "As I see it, yes.";
        } else if (queIn !== undefined && randomAns < 0.5) {
            ansInputEl.innerHTML = "Concentrate and ask again.";
        } else if (queIn !== undefined && randomAns < 0.7) {
            ansInputEl.innerHTML = "Don't count on it.";
        } else if (queIn !== undefined && randomAns < 0.9) {
            ansInputEl.innerHTML = "I don't think so.";
        } else {
            ansInputEl.innerHTML = "Outlook not so good.";
        }
    }
}