//écouteur d'évenement pour ouvrir le popup de connexion
const popUpIcon = document.getElementById('iconSign')
popUpIcon.addEventListener('click', function(){

    const popUp = document.querySelector('#popUp')
    popUp.style.display = 'flex';

    //écouteur d'évenement pour fermer le popup de connexion
    document.addEventListener('click', function(event) {

        const clicDansPopUp = popUpIcon.contains(event.target);
        if (!clicDansPopUp) {
            popUp.style.display = 'none';
        }
    })
})

var alertElement = document.getElementById('blocAlertDate');
function validateForm() {
    var checkInDate = new Date(document.getElementById("check-in").value);
    var checkOutDate = new Date(document.getElementById("check-out").value);
    
    if (checkOutDate <= checkInDate) {
        alertElement.style.display = "flex";
        return false;
    }
    
    return true;
}

let checkIn = document.getElementById('check-in')
checkIn.addEventListener('click', function(){
    alertElement.style.display = "none"
})

function date1() {
    var checkInDate = new Date(document.getElementById("check-in").value);
    var checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + 2); // Ajoute deux jours à la date d'arrivée
    
    // Formate la date en chaîne de caractères au format YYYY-MM-DD
    var formattedDate = checkOutDate.toISOString().substring(0, 10);
    
    document.getElementById("check-out").value = formattedDate; // Attribue la deuxième date
}


//code pour afficher le bloc de sélection de nombre de personne et de lit
let blocPersonLit = document.getElementById('blocPersonne')
blocPersonLit.addEventListener('click', function(){
    let popUpSelectPersonLit = document.querySelector('#selectPersonLit')
    popUpSelectPersonLit.style.visibility = "visible";
})
let validate = document.getElementById('validate')
validate.addEventListener('click', function(event){
    event.preventDefault();
    let adulte = document.getElementById('nombrePersonnes')
    let enfant = document.getElementById('nombreEnfants')
    let chambre = document.getElementById('nombreChambres')
    let nombreAdulte = adulte.value
    let nombreEnfant = enfant.value
    let nombreChambre = chambre.value
    let adulteEnfant = [nombreAdulte, nombreEnfant]
})

let moreLess = document.querySelectorAll('.boutonPlusMoins');
moreLess.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

//code pour montrer ou chacher tout les offres en promotion
let promo = document.getElementById('promoP')
let less = document.getElementById('promoPMoins')
let afficherPromo = document.getElementById('allPromo')
promo.addEventListener('click', function(){
    afficherPromo.style.display = 'flex'
    promo.style.display = 'none'
    less.style.display = 'flex'
})
less.addEventListener('click', function(){
    afficherPromo.style.display = 'none'
    promo.style.display = 'flex'
    less.style.display = 'none'
})