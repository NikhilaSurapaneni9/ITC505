document.addEventListener("DOMContentLoaded", function() {
    const stages = {
        start: {
            text: "You find yourself lost in a dense forest. It's getting dark. What do you do?",
            choices: ["Build a shelter", "Search for food"],
            consequence: ["shelter", "food"],
            image: "forest.jpg"
        },
        shelter: {
            text: "You build a shelter and manage to keep warm throughout the night.",
            choices: ["Explore the forest", "Rest and conserve energy"],
            consequence: ["explore", "rest"],
            image: "shelter.jpg"
        },
        rest: {
            text: "Got refreshed and search for food",
            choices: ["Cook the meat", "Eat raw"],
            consequence: ["cook", "raw"],
            image: "rest.jpg"
        },
        raw: {
            text: "You got poisoned by eating raw food !! you have lost the game",
            choices: ["Refresh Game"],
            consequence: ["start"],
            image: "raw.jpg"
        },
        cook: {
            text: "Enjoy the food.Do you want to sleep or explore the forest?",
            choices: ["Take Rest","Explore the Forest"],
            consequence: ["sleep", "explore"],
            image: "cook.jpg"
        },
        sleep: {
            text: "Woke up after the sleep and choose the right path",
            choices: ["Right", "Left"],
            consequence: ["right", "left"],
            image: "sleep.jpg"
        },
        food: {
            text: "You search for food and find berries. Do you eat them?",
            choices: ["Yes", "No"],
            consequence: ["eat", "no_eat"],
            image: "berries.jpg"
        },
        eat: {
            text: "You got poisoned by eating berries!! you have lost the game",
            choices: ["Refresh Game"],
            consequence: ["start"],
            image: "eat.jpg"
        },
        no_eat: {
            text: "You search for food and find meat?",
            choices: ["Cook the meat", "Eat raw"],
            consequence: ["cook", "raw"],
            image: "meat.jpg"
        },
        explore: {
            text: "You venture deeper into the forest and discover a stream. Drink from it?",
            choices: ["Yes", "No"],
            consequence: ["drink", "no_drink"],
            image: "water.jpg"
        },
        drink: {
            text: "Feeling refreshed, you search to come out of the forest.",
            choices: ["Right", "Left"],
            consequence: ["right", "left"],
            image: "drink.jpg"
        },
        no_drink: {
            text: "Out of Energy, you lost the game",
            choices: ["Refresh Game"],
            consequence: ["start"],
            image: "eat.jpg"
        },
        right: {
            text: "You have chosen the correct direction. you have won the game",
            choices: ["Refresh Game"],
            consequence: ["start"],
            image: "right.jpg"
        },
        left: {
            text: "You have chosen the wrong direction and got lost deeper into the forest.",
            choices: ["Continue Exploring", "Rest and Wait for Help"],
            consequence: ["explore", "rest"],
            image: "lost.jpg"
        },
        end: {
            text: "Congratulations! You have successfully navigated through the forest and survived.",
            choices: ["Start Game"],
            consequence: ["start"],
            image: "win.jpg"
        }
    };

    let currentStage = "start";

    // Update page content based on current stage
    function updatePage() {
        const stage = stages[currentStage];
        document.getElementById("story").innerHTML = "<p>" + stage.text + "</p>";
        document.getElementById("choices").innerHTML = "";
        stage.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.innerHTML = choice;
            button.addEventListener("click", () => chooseOption(index));
            document.getElementById("choices").appendChild(button);
        });
        document.getElementById("image").innerHTML = "<img src='" + stage.image + "' alt='Survival Image'>";
        if (currentStage === "end") {
            document.getElementById("refreshButton").style.display = "block";
            document.getElementById("endButton").style.display = "block";
            document.getElementById("startButton").style.display = "none";
            document.getElementById("addendum").style.display = "none";
        } else {
            document.getElementById("startButton").style.display = "none";
            document.getElementById("refreshButton").style.display = "none";
            document.getElementById("endButton").style.display = "none";
            document.getElementById("addendum").style.display = "block";
        }
    }

    // Handle user's choice
    function chooseOption(index) {
        const stage = stages[currentStage];
        currentStage = stage.consequence[index];
        if (currentStage === "end") {
            document.getElementById("refreshButton").style.display = "block";
            document.getElementById("endButton").style.display = "block";
            document.getElementById("startButton").style.display = "none";
            document.getElementById("addendum").style.display = "none";
        }
        updatePage();
    }

    // Start the game
    function startGame() {
        currentStage = "start";
        updatePage();
    }

    // Refresh the game
    function refreshGame() {
        window.location.href = window.location.origin + window.location.pathname;
    }

    // End the game
    function endGame() {
        currentStage = "start";
        updatePage();
    }

    // Add event listener to the Start Game button
    document.getElementById("startButton").addEventListener("click", startGame);

    // Add event listener to the Refresh Game button
    document.getElementById("refreshButton").addEventListener("click", refreshGame);

    // Add event listener to the End Game button
    document.getElementById("endButton").addEventListener("click", endGame);
});