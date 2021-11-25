// Evidence buttons
dots = document.getElementById("dots");
emf = document.getElementById("emf");
fingerprints = document.getElementById("fingerprints");
freezing = document.getElementById("freezing");
orbs = document.getElementById("orbs");
writing = document.getElementById("writing");

ghosts = fetch("https://luskymj.github.io/Phasmophobia-new/ghosts.json").then(function(response) {
    return response.json();
})
console.log(ghosts);

// Evidence arrays
var confirmedEvidence = [];
var removedEvidence = [];

// Adding and removing element from arrays
function buttonClicked(clickedElement) {
    if (window.getComputedStyle(clickedElement).backgroundColor == "rgb(239, 239, 239)") {
        confirmedEvidence.push(clickedElement.id);
        clickedElement.style.backgroundColor = "rgb(0, 255, 0)"
    } else if (window.getComputedStyle(clickedElement).backgroundColor == "rgb(0, 255, 0)") {
        confirmedEvidence.splice(confirmedEvidence.indexOf(clickedElement.id), 1);
        removedEvidence.push(clickedElement.id);
        clickedElement.style.backgroundColor = "rgb(255, 0, 0)";
    } else {
        clickedElement.style.backgroundColor = "rgb(239, 239, 239)";
        removedEvidence.splice(removedEvidence.indexOf(clickedElement.id), 1);
    }
}

// Buttons clicks
dots.onclick = function() {buttonClicked(dots)}
emf.onclick = function() {buttonClicked(emf)}
fingerprints.onclick = function() {buttonClicked(fingerprints)}
freezing.onclick = function() {buttonClicked(freezing)}
orbs.onclick = function() {buttonClicked(orbs)}
writing.onclick = function() {buttonClicked(writing)}
spirit.onclick = function() {buttonClicked(spirit)}