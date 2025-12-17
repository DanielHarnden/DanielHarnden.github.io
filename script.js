// When loading the page for the first time, initialize random elements.
document.addEventListener("DOMContentLoaded", () => {



    // ----------------------------------------------------------------------------------
    // Randomize stars in the background.
    const bg = document.getElementById("background");
    const squareCount = 256;

    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement("div");
        square.classList.add("star");

        const size = Math.random() * 4 + 4;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        square.style.left = `${Math.random() * 100}%`;
        square.style.top = `${Math.random() * 100}%`;

        square.style.animationDuration = `${6 + Math.random() * 6}s`;
        square.style.animationDelay = `${Math.random() * -10}s`;

        bg.appendChild(square);
    }
    // ----------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------
    // Randomize the starting rotation of the background div.
    document.querySelectorAll(".index-background-div").forEach(link => {
        // Randomize animation starting position.
        const rand = -Math.floor(Math.random() * 100) + "s";
        link.style.setProperty("--animation-time", rand);
    });
    // ----------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------
    // Randomize the rotation of the icons on the index page.
    document.querySelectorAll(".index-link-div a").forEach(link => {
        // Randomize animation starting position.
        const rand = -Math.floor(Math.random() * 100) + "s";
        link.style.setProperty("--animation-time", rand);
    });
    // ----------------------------------------------------------------------------------



    // ----------------------------------------------------------------------------------
    // Select a random game suggestion.
    document.querySelectorAll(".index-background-div").forEach(link => {
        const rand = -Math.floor(Math.random() * 100) + "s";
        link.style.setProperty("--animation-time", rand);
    });
    document.querySelectorAll(".index-link-div a").forEach(link => {
        const rand = -Math.floor(Math.random() * 100) + "s";
        link.style.setProperty("--animation-time", rand);
    });

    // The list of games to choose from.
    const games = [
        "Digseum",
        "Everhood",
        "(the) Gnorp Apologue",
        "Hylics",
        "The Looker",
        "Nodebuster",
        "ROGUE LIGHT DECK BUILDER",
        "Spilled",
        "Tower Wizard",
        "Wandersong",
    ];

    const randomGame = games[Math.floor(Math.random() * games.length)];
    document.getElementById("random-game").textContent = randomGame;
    // ----------------------------------------------------------------------------------



});