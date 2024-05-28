document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you for your message, ${name}!`);
  // In a real application, you would send the form data to a server here
});
