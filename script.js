document.getElementById('sign-in-btn').addEventListener('click', function() {
  document.getElementById('sign-in-form').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
});

document.getElementById('login-btn').addEventListener('click', function() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('sign-in-form').style.display = 'none';
});

// Sign Up Button Event
document.getElementById('sign-in-submit').addEventListener('click', function() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;

  if (firstName && lastName && phoneNumber && email && password) {
      alert('Sign Up successful! Now you can log in.');
      // Redirect to home page or show home content
      // For example, you can navigate to another page:
      // window.location.href = "home.html";
  } else {
      alert('Please fill in all the fields.');
  }
});

// Login Button Event
document.getElementById('login-submit').addEventListener('click', function() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Check if email and password match (for simplicity, no backend validation)
  if (email && password) {
      alert('Login successful!');
      // Redirect to home page or show home content
      // For example, you can navigate to another page:
      // window.location.href = "home.html";
  } else {
      alert('Please enter both email and password.');
  }
});
document.getElementById('sign-in-btn').addEventListener('click', function() {
  document.getElementById('sign-in-form').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
});

document.getElementById('login-btn').addEventListener('click', function() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('sign-in-form').style.display = 'none';
});

// Sign Up Button Event
document.getElementById('sign-in-submit').addEventListener('click', function() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;

  if (firstName && lastName && phoneNumber && email && password) {
      alert('Sign Up successful! Now you can log in.');
      // Redirect to home page after Sign Up
      window.location.href = "home.html"; // Redirect to home.html
  } else {
      alert('Please fill in all the fields.');
  }
});

// Login Button Event
document.getElementById('login-submit').addEventListener('click', function() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email && password) {
      alert('Login successful!');
      // Redirect to home page after Login
      window.location.href = "home.html"; // Redirect to home.html
  } else {
      alert('Please enter both email and password.');
  }
});
