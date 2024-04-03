document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector("button[type='submit']");

    // Function to handle form submission
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Check if all mandatory fields are filled
        const mandatoryFields = ["first_name", "last_name", "date_of_birth", "email_address", "mailing_address", "number_of_plots"];
        let missingFields = [];

        mandatoryFields.forEach(fieldId => {
            const fieldValue = document.getElementById(fieldId).value.trim();
            if (!fieldValue) {
                missingFields.push(fieldId);
                document.getElementById(fieldId).classList.add("highlight");
            } else {
                document.getElementById(fieldId).classList.remove("highlight");
            }
        });

        // If any mandatory fields are missing, scroll to the first missing field and display an alert message
        if (missingFields.length > 0) {
            const firstMissingField = document.getElementById(missingFields[0]);
            firstMissingField.scrollIntoView({ behavior: "smooth", block: "center" });
            playText('ping');
            return; // Exit the function to prevent form submission
        }

        // Get form values if all mandatory fields are filled
        const formData = {
            firstName: document.getElementById("first_name").value,
            lastName: document.getElementById("last_name").value,
            dob: document.getElementById("date_of_birth").value,
            phone: document.getElementById("phone_number").value,
            email: document.getElementById("email_address").value,
            address: document.getElementById("mailing_address").value,
            postalCode: document.getElementById("postal_code").value,
            plots: document.getElementById("number_of_plots").value,
            markerOption: getRadioValue("markers_option"),
            burialMethod: getRadioValue("burial_method"),
            graveLocation: getRadioValue("grave_location"),
            inscriptionOption: getRadioValue("inscription_option"),
            wishes: document.getElementById("message").value,
            notes: document.getElementById("addition_note").value
        };

        // Save form data to local storage
        localStorage.setItem("formData", JSON.stringify(formData));

        playText('button_pressed');
    });

    // Function to retrieve the value of the checked radio button in a group
    function getRadioValue(groupName) {
        const radioButton = document.querySelector(`input[name="${groupName}"]:checked`);
        return radioButton ? radioButton.id : ""; // Return the ID of the checked radio button, or an empty string if none is checked
    }

    // Populate form fields with stored data on page load
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
        document.getElementById("first_name").value = storedData.firstName || "";
        document.getElementById("last_name").value = storedData.lastName || "";
        document.getElementById("date_of_birth").value = storedData.dob || "";
        document.getElementById("phone_number").value = storedData.phone || "";
        document.getElementById("email_address").value = storedData.email || "";
        document.getElementById("mailing_address").value = storedData.address || "";
        document.getElementById("postal_code").value = storedData.postalCode || "";
        document.getElementById("number_of_plots").value = storedData.plots || "";

        // Check the radio buttons based on stored IDs
        document.getElementById(storedData.markerOption).checked = true;
        document.getElementById(storedData.burialMethod).checked = true;
        document.getElementById(storedData.graveLocation).checked = true;
        document.getElementById(storedData.inscriptionOption).checked = true;

        document.getElementById("message").value = storedData.wishes || "";
        document.getElementById("addition_note").value = storedData.notes || "";
    }
});

// Highlight mandatory fields that are not filled
document.querySelectorAll("input[required], textarea[required]").forEach(input => {
    input.addEventListener("input", function () {
        this.classList.remove("highlight");
    });
});
