document.addEventListener("DOMContentLoaded", function () {
    const uploadButton = document.getElementById("uploadButton");
    const downloadButton = document.getElementById("downloadButton");
    const uploadIndicator = document.getElementById("uploadIndicator");
    const downloadIndicator = document.getElementById("downloadIndicator");

    // Global variable to hold data
    let globalData = {};

    // Function to handle form submission
    function handleFormSubmission(event) {
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

        // Save form data to local storage and update globalData
        localStorage.setItem("formData", JSON.stringify(formData));
        globalData = formData;

        // Display a message to the user indicating that the form has been submitted.
        alert("Form submitted successfully!");
    }

    // Function to retrieve the value of the checked radio button in a group
    function getRadioValue(groupName) {
        const radioButton = document.querySelector(`input[name="${groupName}"]:checked`);
        return radioButton ? radioButton.id : ""; // Return the ID of the checked radio button, or an empty string if none is checked
    }
// Function to handle data upload
function uploadData() {
    // Get data from local storage
    const formData = JSON.parse(localStorage.getItem("formData"));

    if (!formData) {
        console.error("No data available to upload.");
        return;
    }

    // AJAX request to upload data
    fetch('http://ugdev.cs.smu.ca/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Upload the data from local storage
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Show upload indicator
        uploadIndicator.innerText = "Data uploaded successfully";
        setTimeout(() => {
            uploadIndicator.innerText = "";
        }, 3000);
    })
    .catch(error => {
        console.error('There was a problem with the upload:', error);
        // Show error message
        uploadIndicator.innerText = "Error uploading data: " + error.message;
        setTimeout(() => {
            uploadIndicator.innerText = "";
        }, 5000);
    });
}

    // Function to handle data download
function downloadData() {
    // AJAX request to download data
    fetch('http://ugdev.cs.smu.ca/download')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Populate webpage with downloaded data and update globalData
        globalData = data;
        populateFormFields(globalData);

        // Show download indicator
        downloadIndicator.innerText = "Data downloaded successfully";
        setTimeout(() => {
            downloadIndicator.innerText = "";
        }, 3000);
    })
    .catch(error => {
        console.error('There was a problem with the download:', error);
        // Show error message
        downloadIndicator.innerText = "Error downloading data";
        setTimeout(() => {
            downloadIndicator.innerText = "";
        }, 3000);
    });
}

    // Function to populate form fields with data
    function populateFormFields(data) {
        document.getElementById("first_name").value = data.firstName || "";
        document.getElementById("last_name").value = data.lastName || "";
        document.getElementById("date_of_birth").value = data.dob || "";
        document.getElementById("phone_number").value = data.phone || "";
        document.getElementById("email_address").value = data.email || "";
        document.getElementById("mailing_address").value = data.address || "";
        document.getElementById("postal_code").value = data.postalCode || "";
        document.getElementById("number_of_plots").value = data.plots || "";

        // Check the radio buttons based on stored IDs
        document.getElementById(data.markerOption).checked = true;
        document.getElementById(data.burialMethod).checked = true;
        document.getElementById(data.graveLocation).checked = true;
        document.getElementById(data.inscriptionOption).checked = true;

        document.getElementById("message").value = data.wishes || "";
        document.getElementById("addition_note").value = data.notes || "";
    }

    // Function to get default data (replace with your default values)
    function getDefaultData() {
        return {
            firstName: "John",
            lastName: "Doe",
            dob: "2000-01-01",
            phone: "999999999",
            email: "",
            address: "123 Main Ave",
            postalCode: "",
            plots: "1",
            markerOption: "markers_option_1",
            burialMethod: "burial_method_1",
            graveLocation: "grave_location_1",
            inscriptionOption: "inscription_option_1",
            wishes: "hello",
            notes: "hello"
        };
    }

    // Event listener for form submission
    document.querySelector("form").addEventListener("submit", handleFormSubmission);

    // Event listener for upload button
    uploadButton.addEventListener("click", function () {
        uploadData();
    });

    // Event listener for download button
    downloadButton.addEventListener("click", function () {
        downloadData();
    });

    // Populate form fields with stored data on page load
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
        globalData = storedData;
        populateFormFields(globalData);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.getElementById("clearButton");

    // Function to handle form clearing
    clearButton.addEventListener("click", function () {
        // Reset all input fields to their default values or empty strings
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("date_of_birth").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("email_address").value = "";
        document.getElementById("mailing_address").value = "";
        document.getElementById("postal_code").value = "";
        document.getElementById("number_of_plots").value = "";

        // Reset radio buttons
        const radioButtons = document.querySelectorAll("input[type='radio']");
        radioButtons.forEach((radio) => {
            radio.checked = false;
        });

        // Reset textareas
        document.getElementById("message").value = "";
        document.getElementById("addition_note").value = "";

        // Optionally, you can also clear the local storage here if needed
        localStorage.removeItem("formData");

        // Optionally, you can display a message to indicate that the form has been cleared
        alert("Form cleared successfully!");
    });
});