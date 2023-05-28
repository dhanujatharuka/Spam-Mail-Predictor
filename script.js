const form = document.getElementById('spamForm');
const resultContainer = document.getElementById('resultContainer');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = document.querySelector('textarea[name="message"]').value;

  const url = `http://127.0.0.1:8000/predict/?message=${encodeURIComponent(message)}`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
  })
  .then(response => response.json())
  .then(result => {
    // Handle the response
    console.log(result);

    if (result) {
      alert('This message is flagged as spam.');
    } else {
      alert('This message is not flagged as spam.');
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
});
