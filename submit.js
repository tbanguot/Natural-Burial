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
          markerOption: getRadioValue("marker_option"),
          burialMethod: getRadioValue("burial_method"),
          graveLocation: getRadioValue("grave_location"),
          inscriptionOption: getRadioValue("inscription_option"),
          wishes: document.getElementById("wishes").value,
          notes: document.getElementById("notes").value
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
      document.getElementById("name").value = storedData.firstName || "";
      document.getElementById("DOB").value = storedData.dob || "";
      document.getElementById("phone").value = storedData.phone || "";
      document.getElementById("email").value = storedData.email || "";
      document.getElementById("address").value = storedData.address || "";
      document.getElementById("plots").value = storedData.plots || "";
      
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

      document.getElementById("wishes").value = storedData.wishes || "";
      document.getElementById("notes").value = storedData.notes || "";
  }
});