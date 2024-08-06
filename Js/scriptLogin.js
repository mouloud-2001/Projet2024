document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const loadingAnimation = document.getElementById('loading-animation');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        if (validateForm(username, password)) {
            loadingAnimation.style.display = 'block';

            setTimeout(function() {
                loadingAnimation.style.display = 'none';
                displayMessage('Form submitted successfully!');
                console.log('Username:', username);
                console.log('Password:', password);
                console.log('Remember Me:', rememberMe);
            }, 2000); 
        }
    });

    function validateForm(username, password) {
        if (username === '') {
            displayMessage('Username is required');
            return false;
        }

        if (password === '') {
            displayMessage('Password is required');
            return false;
        }

        return true;
    }

    function displayMessage(message) {
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.textContent = message;
        } else {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('form-message');
            messageDiv.textContent = message;
            form.appendChild(messageDiv);
        }
    }
});
