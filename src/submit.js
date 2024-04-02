document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
  
    // Function to handle form submission
    submitButton.addEventListener("click", function () {
        // Get form values
        const formData = {
            firstName: document.getElementById("first_name").value,
            dob: document.getElementById("date_of_birth").value,
            phone: document.getElementById("phone_number").value,
            email: document.getElementById("email_address").value,
            address: document.getElementById("mailing_address").value,
            plots: document.getElementById("number_of_plots").value,
            markerOption: getRadioValue("marker_option"),
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
        const radioButtons = document.querySelectorAll(`input[name="${groupName}"]:checked`);
        return radioButtons.length > 0 ? radioButtons[0].value : "";
    }
  
  
    // Populate form fields with stored data on page load
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
        document.getElementById("first_name").value = storedData.firstName || "";
        document.getElementById("date_of_birth").value = storedData.dob || "";
        document.getElementById("phone_number").value = storedData.phone || "";
        document.getElementById("email_address").value = storedData.email || "";
        document.getElementById("mailing_address").value = storedData.address || "";
        document.getElementById("number_of_plots").value = storedData.plots || "";
        
        const markerOption = storedData.markerOption;
        if (markerOption) {
            document.getElementById(markerOption).checked = true;
        }
        
        const burialMethod = storedData.burialMethod;
        if (burialMethod) {
            document.getElementById(burialMethod).checked = true;
        }
        
        const graveLocation = storedData.graveLocation;
        if (graveLocation) {
            document.getElementById(graveLocation).checked = true;
        }
        
        const inscriptionOption = storedData.inscriptionOption;
        if (inscriptionOption) {
            document.getElementById(inscriptionOption).checked = true;
        }
  
        document.getElementById("message").value = storedData.wishes || "";
        document.getElementById("addition_note").value = storedData.notes || "";
    }
  });