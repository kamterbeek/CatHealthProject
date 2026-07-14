// -----------------------------------------------------
// Cat Health Dashboard
// CM1040 Midterm Project
// Demonstrates:
// • Fetch API
// • JSON
// • DOM Manipulation
// • Asynchronous JavaScript
// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", loadCats);

// Load cat data from the JSON file
async function loadCats() {

    // Find the container where the cat cards will appear
    const container = document.getElementById("catContainer");

    try {

        const response = await fetch("data/cats.json");

        if (!response.ok) {
            throw new Error("Unable to load cat data.");
        }

        // Convert JSON into JavaScript objects
        const cats = await response.json();

        // Remove the loading message
        container.innerHTML = "";

        // Create one card for every cat
        cats.forEach(cat => {

            const card = createCatCard(cat);

            container.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <p class="error">
                Failed to load cat health data.
            </p>
        `;

    }

}


// Creates one dashboard card
function createCatCard(cat) {

    const card = document.createElement("div");

    card.classList.add("cat-card");

    card.innerHTML = `
        <h2>${cat.name}</h2>

        <p><strong>Age:</strong> ${cat.age} years</p>

        <p><strong>Weight:</strong> ${cat.weight} kg</p>

        <p><strong>Water Today:</strong> ${cat.waterToday} mL</p>

        <p><strong>Food:</strong> ${cat.food}</p>

        <p><strong>Food Amount:</strong> ${cat.foodAmount} oz</p>

        <p><strong>Status:</strong> ${cat.status}</p>
    `;

    return card;

}
