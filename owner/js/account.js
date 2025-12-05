document.addEventListener("DOMContentLoaded", () => {

    const fNameInput = document.getElementById("input-firstname");
    const lNameInput = document.getElementById("input-lastname");
    const contactInput = document.getElementById("input-contact");
    const emailInput = document.getElementById("input-email");

    const displayFName = document.getElementById("display-firstname");
    const displayLName = document.getElementById("display-lastname");
    const displayContact = document.getElementById("display-contact");
    const displayEmail = document.getElementById("display-email");

    displayFName.textContent = localStorage.getItem("firstName") || "";
    displayLName.textContent = localStorage.getItem("lastName") || "";
    displayContact.textContent = localStorage.getItem("contact") || "--";
    displayEmail.textContent = localStorage.getItem("email") || "";

    fNameInput.value = localStorage.getItem("firstName") || "";
    lNameInput.value = localStorage.getItem("lastName") || "";
    contactInput.value = localStorage.getItem("contact") || "";
    emailInput.value = localStorage.getItem("email") || "";

    function updateAll() {
        if (fNameInput.value.trim() !== "") {
            displayFName.textContent = fNameInput.value;
            localStorage.setItem("firstName", fNameInput.value);
        }
        if (lNameInput.value.trim() !== "") {
            displayLName.textContent = lNameInput.value;
            localStorage.setItem("lastName", lNameInput.value);
        }
        if (contactInput.value.trim() !== "") {
            displayContact.textContent = contactInput.value;
            localStorage.setItem("contact", contactInput.value);
        }
        if (emailInput.value.trim() !== "") {
            displayEmail.textContent = emailInput.value;
            localStorage.setItem("email", emailInput.value);
        }
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            updateAll();
        }
    });
});
