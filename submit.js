document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");
  const clearButton = document.getElementById("clearButton");

  // Function to handle form submission
  submitButton.addEventListener("click", function () {
      // Get form values
      const formData = {
          firstName: document.getElementById("name").value,
          dob: document.getElementById("DOB").value,
          phone: document.getElementById("phone").value,
          email: document.getElementById("email").value,
          address: document.getElementById("address").value,
          plots: document.getElementById("plots").value,
          markerOption: document.querySelector('input[name="marker_option"]:checked').value,
          burialMethod: document.querySelector('input[name="burial_method"]:checked').value,
          graveLocation: document.querySelector('input[name="grave_location"]:checked').value,
          inscriptionOption: document.querySelector('input[name="inscription_option"]:checked').value,
          wishes: document.getElementById("wishes").value,
          notes: document.getElementById("notes").value
      };

      // Save form data to local storage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Display a message to the user indicating that the form has been submitted.
      alert("Form submitted successfully!");
  });

  // Function to handle form clearing
  clearButton.addEventListener("click", function () {
      // Clear all input fields
      document.getElementById("name").value = "";
      document.getElementById("DOB").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("address").value = "";
      document.getElementById("plots").value = "";
      document.querySelectorAll('input[name="marker_option"]').forEach(input => input.checked = false);
      document.querySelectorAll('input[name="burial_method"]').forEach(input => input.checked = false);
      document.querySelectorAll('input[name="grave_location"]').forEach(input => input.checked = false);
      document.querySelectorAll('input[name="inscription_option"]').forEach(input => input.checked = false);
      document.getElementById("wishes").value = "";
      document.getElementById("notes").value = "";

      // Remove stored form data from local storage
      localStorage.removeItem("formData");


  });

  // Populate form fields with stored data on page load
  const storedData = JSON.parse(localStorage.getItem("formData"));
  if (storedData) {
      document.getElementById("name").value = storedData.firstName;
      document.getElementById("DOB").value = storedData.dob;
      document.getElementById("phone").value = storedData.phone;
      document.getElementById("email").value = storedData.email;
      document.getElementById("address").value = storedData.address;
      document.getElementById("plots").value = storedData.plots;
      document.getElementById(storedData.markerOption).checked = true;
      document.getElementById(storedData.burialMethod).checked = true;
      document.getElementById(storedData.graveLocation).checked = true;
      document.getElementById(storedData.inscriptionOption).checked = true;
      document.getElementById("wishes").value = storedData.wishes;
      document.getElementById("notes").value = storedData.notes;
  }
});