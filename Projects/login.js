document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    const nameField = document.getElementById('namefield');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.querySelector('.btn1');
    const loginBtn = document.querySelector('.btn2');
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Your sign up form logic here
      nameField.textContent = "Sign Up";
      form.action = "/signup";
      document.getElementById('input1').style.display = 'block';
    });
  
    loginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Your login form logic here
      nameField.textContent = "Log In";
      form.action = "/login";
      document.getElementById('input1').style.display = 'none';
    });
  });
  