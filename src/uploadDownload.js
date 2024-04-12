function uploadData() {
    const data = {
      Name: document.getElementById('first_name').value || "John Doe",
      SelectedOption: document.querySelector('input[name="markers_option"]:checked').value
    };
    fetch('/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error('Error:', error));
  }
  
  function downloadData() {
    fetch('/download')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('userData', JSON.stringify(data));
        document.getElementById('first_name').value = data.Name;
        document.querySelector(`input[name="markers_option"][value="${data.SelectedOption}"]`).checked = true;
      })
      .catch(error => console.error('Error:', error));
  }
  