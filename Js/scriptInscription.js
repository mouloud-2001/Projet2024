document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        var nom = document.getElementById('nom').value.trim();
        var courriel = document.getElementById('courriel').value.trim();
        var adresse = document.getElementById('adresse').value.trim();

        
        if (nom === '' || courriel === '' || adresse === '') {
            alert('Tous les champs doivent être remplis.');
            return;
        }

        
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(courriel)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        
        createCircularAnimation();

        
        setTimeout(() => {
            document.querySelector('.loading-spinner').remove();
            const successMessage = document.createElement("div");
            successMessage.classList.add("success-message");
            successMessage.textContent = "Form submitted successfully!";
            document.body.appendChild(successMessage);

            setTimeout(() => {
                successMessage.remove();
            }, 2000);

            
            console.log('Nom:', nom);
            console.log('Courriel:', courriel);
            console.log('Adresse:', adresse);

        }, 3000);
    });

    function createCircularAnimation() {
        var body = document.body;
        var spinner = document.createElement('div');
        spinner.className = 'loading-spinner';

        body.appendChild(spinner);
    }
});
