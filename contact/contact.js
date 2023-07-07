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

