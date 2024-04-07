// Global variable to hold data
let globalData = {
    firstName: "John",
    lastName: "Doe",
    dob: "", 
    phone: "",
    email: "",
    address: "",
    postalCode: "",
    plots: 0, // Default number of plots
    markerOption: "markers_option_1", // Default marker option
    burialMethod: "burial_method_1", // Default burial method
    graveLocation: "grave_location_1", // Default grave location
    inscriptionOption: "inscription_option_1", // Default inscription option
    wishes: "",
    notes: ""
    // Add other default values here
};

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {

    // Existing code for form submission and local storage handling

    // Upload Button Event Listener
    document.getElementById("uploadButton").addEventListener("click", function () {
        uploadData(globalData);
    });

    // Download Button Event Listener
    document.getElementById("downloadButton").addEventListener("click", function () {
        downloadData();
    });
    
    // Populate form fields with stored data or default values on page load
    populateFormWithData(globalData);
});

// Function to upload data to the server
function uploadData(data) {
    fetch('http://ugdev.cs.smu.ca/upload', { // Updated server URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            console.log('Data uploaded successfully');
        } else {
            console.error('Failed to upload data');
        }
    })
    .catch(error => {
        console.error('Error uploading data:', error);
    });
}

// Function to download data from the server and populate the webpage
function downloadData() {
    fetch('http://ugdev.cs.smu.ca/download') // Updated server URL
    .then(response => response.json())
    .then(data => {
        globalData = data; // Update global data
        populateFormWithData(data); // Populate form with downloaded data
        console.log('Data downloaded successfully');
    })
    .catch(error => {
        console.error('Error downloading data:', error);
    });
}
// Function to show upload indicator
function showUploadIndicator() {
    const uploadIndicator = document.getElementById('uploadIndicator');
    uploadIndicator.textContent = 'Data uploaded!';
    uploadIndicator.style.color = 'green';
}

// Function to show download indicator
function showDownloadIndicator() {
    const downloadIndicator = document.getElementById('downloadIndicator');
    downloadIndicator.textContent = 'Data downloaded!';
    downloadIndicator.style.color = 'blue';
}

// Function to populate form fields with data
function populateFormWithData(data) {
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