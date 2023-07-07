
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

var alert = document.getElementById('blocAlertDate');
function validateForm() {
    var checkInDate = new Date(document.getElementById("check-in").value);
    var checkOutDate = new Date(document.getElementById("check-out").value);
    
    if (checkOutDate <= checkInDate) {
        alert.style.display = "flex";
        return false;
    }
    
    return true;
}

let checkIn = document.getElementById('check-in')
checkIn.addEventListener('click', function(){
    alert.style.display = "none"
})

function date1() {
    var checkInDate = new Date(document.getElementById("check-in").value);
    var checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + 2); // Ajoute deux jours à la date d'arrivée
    
    // Formate la date en chaîne de caractères au format YYYY-MM-DD
    var formattedDate = checkOutDate.toISOString().substring(0, 10);
    
    document.getElementById("check-out").value = formattedDate; // Attribue la deuxième date
}
