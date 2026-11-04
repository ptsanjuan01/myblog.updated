
/* ============================= */
/* ORIGINAL JAVASCRIPT FUNCTIONS */
/* ============================= */

function showMessage() {
    alert("Hello! How are you today!");
}

function showMeMore() {
    alert("Welcome to MyBlog! Enjoy learning JavaScript!");
}

function showInterest() {
    alert("Would you like to subscribe to our newsletter?");
}

function showText() {
    let text = document.getElementById("hiddenText");
    text.hidden = !text.hidden;
}

function showEvents() {
    let text = document.getElementById("other-events");
    text.hidden = !text.hidden;
}

/* ============================= */
/* DARK MODE AND LIGHT MODE */
/* ============================= */

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");

    // Check if a theme has already been saved
    const savedTheme = localStorage.getItem("theme");

    // Apply the saved theme
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Update the moon and sun icons
    function updateThemeIcon() {

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    }

    // Display the correct icon when the page loads
    if (themeToggle) {

        updateThemeIcon();

        // Switch between light and dark mode
        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            // Save the selected theme
            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("theme", "dark");

            } else {

                localStorage.setItem("theme", "light");

            }

            // Change the icon
            updateThemeIcon();

        });

    }

});
