/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/* Ik maak eerst de variabelen aan */
var button = document.querySelector('input.search');
var loader = document.querySelector('div.loader');
var searchForm = document.getElementById("searchform")

/* UITLEG ONDERSTAANDE FUNCTIE:

De Event Listener wacht totdat er op de submit knop wordt geklikt. Zodra dit gebeurt zal hij de onderstaande functie uitvoeren. Dit is wat er gebeurt:

1. event.preventDefault zorgt ervoor dat het normale gedrag tegengehouden wordt. Je gaat dus niet direct naar de volgende pagina.

2. loader.classList.toggle('loaded') zorgt ervoor dat er geschakelt wordt van de loader naar de loaded.

3. setTimeout(submit, 600) zorgt ervoor dat er even een time out is waardoor de transitie kan worden laten zien. Die duurt namelijk 0.5s. De time out is net iets langer, namelijk 0.6 s en daardoor is de transitie goed zichtbaar.

4. Na de timeout wordt een nieuwe functie uitgevoerd, namelijk de submit functie. Het formulier wordt nu (in mijn geval natuurlijk niet echt) verstuurd.
*/

button.addEventListener('click', function(event){
    event.preventDefault();

    loader.classList.toggle('loaded');

    setTimeout(submit, 600);

    function submit(){
        searchForm.submit();
    }

});


/* Bronnen die ik heb gebruikt voor JS:
https://www.webdeveloper.com/d/260527-how-can-i-delay-the-submission-of-a-form
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
https://www.w3schools.com/js/js_timing.asp
De toggle heb ik gedaan met behulp van de codepen van Joost Faber die hij maakte tijdens de les
*/

