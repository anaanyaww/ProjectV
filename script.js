document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const valentineImage = document.getElementById("valentineImage");

    // Array of image paths
    const imageSources = [
        "images/cat1.png",
        "images/cat2.png",
        "images/cat3.png",
        "images/cat4.png"
    ];

    // Playful messages for the No button
    const noTexts = [
        "Are you sure?",
        "u know u have no choice",
        "umm what",
        "u've come this far saying",
        "no?",
        "die🥰"
    ];

    // Handle Yes button click
    yesButton.addEventListener("click", function() {
        alert("loser🥰");
    });

    // Handle No button click
    noButton.addEventListener("click", function(e) {
        // Prevent default click behavior
        e.preventDefault();
        
        // Move the No button to a random position
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        
        const randomX = Math.min(Math.floor(Math.random() * maxX), maxX - 100);
        const randomY = Math.min(Math.floor(Math.random() * maxY), maxY - 100);

        noButton.style.position = 'fixed';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';

        // Change the No button text
        const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
        noButton.textContent = randomText;

        // Make Yes button bigger
        const currentWidth = yesButton.offsetWidth;
        const currentHeight = yesButton.offsetHeight;
        yesButton.style.width = (currentWidth + 20) + 'px';
        yesButton.style.height = (currentHeight + 10) + 'px';
        yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 2) + 'px';

        // Change the image
        const randomImage = imageSources[Math.floor(Math.random() * imageSources.length)];
        valentineImage.src = randomImage;
    });
});