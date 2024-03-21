document.querySelector('.signup').addEventListener('click', function() {
    document.querySelector('form').classList.add('hidden');
    document.querySelectorAll('form')[1].classList.remove('hidden');
});

document.querySelector('.login').addEventListener('click', function() {
    document.querySelector('form').classList.remove('hidden');
    document.querySelectorAll('form')[1].classList.add('hidden');
});

document.querySelector('#loginBtn').addEventListener('click', function() {
    // Get user input from the login form
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Simulate login logic (replace with actual authentication logic)
    if (email && password) {
        // Display success message and redirect
        document.getElementById("messageContainer").innerHTML = '<p>Login successful!</p>';
        window.location.href = 'index.html';
    } else {
        // Display error message
        document.getElementById("messageContainer").innerHTML = '<p>Please enter valid credentials.</p>';
    }
});

document.querySelector('#signupBtn').addEventListener('click', function() {
    // Get user input from the signup form
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    // Simulate signup logic (replace with actual signup logic)
    if (name && email && password) {
        // Display success message and redirect
        document.getElementById("messageContainer").innerHTML = '<p>Signup successful!</p>';
        window.location.href = 'index.html';
    } else {
        // Display error message
        document.getElementById("messageContainer").innerHTML = '<p>Please fill in all fields.</p>';
    }
});
