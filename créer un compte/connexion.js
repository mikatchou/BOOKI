//Code pour retourner dans la page précédente
let retour = document.getElementById('retour');
retour.addEventListener('click', function(){
    history.back();
})
let colorCo = document.querySelector('#co');
let colorCre = document.querySelector('#cre');
let hideCreate = document.getElementById('create');
let hideLog = document.getElementById('formulaire');
let showCreate = document.getElementById('create');
let ShowLog = document.getElementById('formulaire');
let bordureCo = document.getElementById('connexxion')
let bordureCre = document.getElementById('creation')


//Code pour cacher le formulaire de création de compte au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    hideLog.classList.add('hide')
    colorCre.style.color = '#0065FC';
    bordureCre.style.borderBottom = "solid var(--color-primary)";
});

//Code pour cacher le formulaire de connexion si l'utilisateur clic sur créer un compte
let creation = document.getElementById('creation');
creation.addEventListener('click', function(){
    hideLog.classList.add('hide');
    showCreate.classList.remove('hide')
    colorCre.style.color = '#0065FC';
    colorCo.style.color = 'black'
    bordureCo.style.borderBottom = "";
    bordureCre.style.borderBottom = "solid var(--color-primary)"
})

//Code pour cacher le formulaire de création de compte si l'utilisateur clic sur se connecter
let connexion = document.getElementById('connexxion');
connexion.addEventListener("click", function() {
    hideCreate.classList.add('hide');
    ShowLog.classList.remove('hide');
    colorCo.style.color = '#0065FC';
    colorCre.style.color = 'black'
    bordureCo.style.borderBottom = "solid var(--color-primary)";
    bordureCre.style.borderBottom = ""
});

//code pour vérfier le format du numéro de téléphone
var telephonePattern = /^(0[3678]\d{8}|336\d{8})$/;
var telephoneInput = document.getElementById("telephone");

telephoneInput.addEventListener("input", function() {
    var telephone = telephoneInput.value;

    if (telephone !== "" && !telephonePattern.test(telephone)) {
        telephoneInput.classList.add("invalid");
    } else {
        telephoneInput.classList.remove("invalid");
    }
});



