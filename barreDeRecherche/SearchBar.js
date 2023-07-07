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
