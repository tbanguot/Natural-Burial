document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector("button[type='submit']");

    // Function to handle form submission
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
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

        // Display a message to the user indicating that the form has been submitted.
        alert("Form submitted successfully!");
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