/** This file allows the client to interact (Post & Get) with the server side.
 *  
 *  Author: Cole Turner
 */ 

const SERVER_URL = "http://ugdev.cs.smu.ca:3078";
let uploadedData = {};

/** This function posts (uploads) the JSON obj data to the server. 
 * 
 */
function post() {
  $.post({
    url: SERVER_URL + "/myPost",
    data: JSON.stringify(uploadedData),
    contentType: "application/json",
    success: successFn,
    error: errorFn
  });
}

/** This function gets (downloads) the JSON obj data from the server.
 * 
 */
function get() {
  $.get({
    url: SERVER_URL + "/myGet",
    success: function(data) {
        // Update local storage with downloaded data
        localStorage.setItem('formData', JSON.stringify(data));
        // Populate the webpage with downloaded data
        populateFormFields(data);
    },
    error: errorFn
  });
}

function populateFormFields(formData) {
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

/*
  The purpose of this function is to log the JSON object received
  from the server.

  @param returnedData - contains the JSON object returned by the server

  Author: Terry Goldsmith
*/
function successFn(returnedData) {
    console.log(returnedData);
}

/*
  The purpose of this function is to log the error.

  @param err - the error object returned by the server

  Author: Terry Goldsmith
*/
function errorFn(err) {
    console.log(err.responseText);
}