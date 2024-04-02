// This javascript file takes the data from the natural burial form, saves them in the local storage and 
// whenever the page is reloaded it automatically fills the information that were previously put.
// Author: Marko Ostrovitsa
function submitFormData() {
    // Retrieve input values
    var formData = {
      first_name: document.getElementById("name").value,
      date_of_birth: document.getElementById("DOB").value,
      phone_number: document.getElementById("phone").value,
      email_address: document.getElementById("email").value,
      mailing_address: document.getElementById("address").value,
      number_of_plots: document.getElementById("plots").value,
      marker_option: document.querySelector('input[name="marker_option"]:checked').value,
      burial_method: document.querySelector('input[name="burial_method"]:checked').value,
      grave_location: document.querySelector('input[name="grave_location"]:checked').value,
      inscription_option: document.querySelector('input[name="inscription_option"]:checked').value,
      wishes: document.getElementById("wishes").value,
      additional_notes: document.getElementById("notes").value
    };
  
    // Convert to JSON string
    var formDataJSON = JSON.stringify(formData);
  
    // Store in local storage
    localStorage.setItem("formData", formDataJSON);
  }
  
  // Function to retrieve form data from local storage and populate the form
  function populateFormData() {
    // Retrieve data from local storage
    var storedFormData = localStorage.getItem("formData");
  
    if (storedFormData) {
      // Parse JSON string
      var formData = JSON.parse(storedFormData);
  
      // Populate form fields
      //document.getElementById("name").value = formData.first_name;
      //document.getElementById("DOB").value = formData.date_of_birth;
      //document.getElementById("phone").value = formData.phone_number;
      //document.getElementById("email").value = formData.email_address;
      //document.getElementById("address").value = formData.mailing_address;
      //document.getElementById("plots").value = formData.number_of_plots;
      //document.querySelector('input[name="marker_option"][value="' + formData.marker_option + '"]').checked = true;
      //document.querySelector('input[name="burial_method"][value="' + formData.burial_method + '"]').checked = true;
      //document.querySelector('input[name="grave_location"][value="' + formData.grave_location + '"]').checked = true;
      //document.querySelector('input[name="inscription_option"][value="' + formData.inscription_option + '"]').checked = true;
      //document.getElementById("wishes").value = formData.wishes;
      //document.getElementById("notes").value = formData.additional_notes;
    }
  }
  
  // Add event listener to the submit button
  document.getElementById("submitButton").addEventListener("click", submitFormData);
  
  // Populate form data when the webpage is loaded
  window.addEventListener("load", populateFormData);