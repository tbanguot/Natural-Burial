
    // Upload Button Event Listener
    document.getElementById("uploadButton").addEventListener("click", function () {
        uploadData(globalData);
    });

    // Download Button Event Listener
    document.getElementById("downloadButton").addEventListener("click", function () {
        downloadData();
    });

    // Function to upload data to the server
    function uploadData(data) {
        fetch('http://ugdev.cs.smu.ca/upload', {
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

    // Function to download data from the server
    function downloadData() {
        fetch('http://ugdev.cs.smu.ca/download')
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

    // Function to populate form fields with data
    function populateFormWithData(data) {
        // Code to populate form fields goes here
        document.getElementById("first_name").value = globalData.firstName || "";
        document.getElementById("last_name").value = globalData.lastName || "";
        document.getElementById("date_of_birth").value = globalData.dob || "";
        document.getElementById("phone_number").value = globalData.phone || "";
        document.getElementById("email_address").value = globalData.email || "";
        document.getElementById("mailing_address").value = globalData.address || "";
        document.getElementById("postal_code").value = globalData.postalCode || "";
        document.getElementById("number_of_plots").value = globalData.plots || "";

        // Check the radio buttons based on stored IDs
        document.getElementById(globalData.markerOption).checked = true;
        document.getElementById(globalData.burialMethod).checked = true;
        document.getElementById(globalData.graveLocation).checked = true;
        document.getElementById(globalData.inscriptionOption).checked = true;

        document.getElementById("message").value = globalData.wishes || "";
        document.getElementById("addition_note").value = globalData.notes || "";
    }
