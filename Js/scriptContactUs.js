document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        
        if (name === '' || email === '' || message === '') {
            document.getElementById('formMessage').textContent = 'Tous les champs doivent être remplis.';
            return;
        }

        
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('formMessage').textContent = 'Veuillez entrer une adresse email valide.';
            return;
        }

       
        createCircularAnimation();

        
        setTimeout(() => {
            var spinner = document.querySelector('.loading-spinner');
            if (spinner) {
                spinner.remove();
            }
            const successMessage = document.createElement("div");
            successMessage.classList.add("success-message");
            successMessage.textContent = "Form submitted successfully!";
            document.body.appendChild(successMessage);

            
            setTimeout(() => {
                successMessage.remove();
            }, 2000);

            
            console.log('UserName:', name);
            console.log('Email:', email);
            console.log('Message:', message);

        }, 3000);
    });

    function createCircularAnimation() {
        var body = document.body;
        var spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        body.appendChild(spinner);
    }
});
