document.title = 'page-client'

let fontAwesome = document.createElement('link')
fontAwesome.rel = 'stylesheet'
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
let head = document.head
let head3 = head.children[2]
head.insertBefore(fontAwesome, head3)

let lienPolice = document.createElement('link')
lienPolice.rel = 'stylesheet'
lienPolice.href = 'https://fonts.googleapis.com/css2?family=Lexend&display=swap'
let head4 = head.children[3]
head.insertBefore(lienPolice, head4)

document.body.style.fontFamily = 'Lexend', 'sans-serif'
document.body.style.margin = '0'


// HEADER //

// STRUCTURE HTML HEADER //
let header = document.createElement('header')
document.body.insertBefore(header, document.body.firstChild)

let div = document.createElement('div')
div.id = 'divHeader'
header.appendChild(div)

let lienImageAccueil = document.createElement('a')
lienImageAccueil.id = 'aLogoBooki'
lienImageAccueil.href = '../accueil/accueil.html'
div.appendChild(lienImageAccueil)

let imageBooki = document.createElement('img')
imageBooki.classList.add('logobooki')
imageBooki.src = '../images/logo/Booki.png'
lienImageAccueil.appendChild(imageBooki)

let divNavUser = document.createElement('div')
div.appendChild(divNavUser)
//création du menu nav
let menuNav = document.createElement('nav')
menuNav.classList.add('logo-box')
divNavUser.appendChild(menuNav)

//création des liens et insersion dans le menu de navigation
liensNav = []
for(let lien of Array(5)){
    liensNav.push(document.createElement('a'))
}
liensNav[0].href = '../accueil/accueil.html'
liensNav[1].href = '../recherche/index.html'
liensNav[2].href = '#activites'
liensNav[3].href = '../contact/contact.html'
liensNav[4].href = '#'
liensNav[0].textContent = 'Accueil'
liensNav[1].textContent = 'Hébérgements'
liensNav[2].textContent = 'Activités'
liensNav[3].textContent = 'Contact'
liensNav[4].textContent = 'À propos'


liensNav.forEach(function(lien){
    lien.classList.add('headerNav', 'al')
    menuNav.appendChild(lien)
})

let divUser = document.createElement('div')
divUser.id = 'div-user'
menuNav.appendChild(divUser)

let imageUser = document.createElement('img')
imageUser.id = 'logoUser'
imageUser.src = '../images/personnes/personne4.jpg'
divUser.appendChild(imageUser)

let cheuvronMenu = document.createElement('i')
cheuvronMenu.classList.add('fa-solid', 'fa-chevron-down', 'headerNav')
divUser.appendChild(cheuvronMenu)

// FIN STRUCTURE HTML HEADER //

// STYLE CSS HEADER //

let divHeader = document.getElementById('divHeader');
divHeader.style.display = 'flex'
divHeader.style.justifyContent = 'space-between'
divHeader.style.padding = '1rem 3rem 1.5rem 3rem'

let flexLogoBooki = document.querySelector('#aLogoBooki')
flexLogoBooki.style.display = 'flex'
flexLogoBooki.style.alignItems = 'center'

let logoBooki = document.querySelector('.logobooki')
logoBooki.style.height = '3rem'

let logoBox = document.querySelector('.logo-box')
logoBox.style.display = 'flex'
logoBox.style.alignItems = 'center'

let flexDivUser = document.querySelector('#div-user')
flexDivUser.style.display = 'flex'
flexDivUser.style.alignItems = 'center'

//fonction pour substituer le style cursor : pointer;
function cursorPointor(element){
    element.addEventListener('mouseover', function(){
        this.style.color = '#0065FC'
    })
    element.addEventListener('mouseout', function(){
        this.style.color = '#2f6cc8'
    })
}

let headerNav = document.querySelectorAll('.headerNav')
headerNav.forEach(function(element){
    element.style.fontSize = '20px'
    element.style.textDecoration = 'none'
    element.style.padding = '1rem'
    element.style.color = '#2f6cc8'
    cursorPointor(element)
})

flexDivUser.children[0].style.height = '4rem'
flexDivUser.children[0].style.borderRadius  = '100%'
flexDivUser.children[0].style.padding = '0.6rem'
flexDivUser.children[0].style.cursor = 'pointer'
flexDivUser.children[1].style.padding = '1rem'
flexDivUser.children[1].style.fontSize = '22px'
flexDivUser.children[1].style.cursor = 'pointer'

// FIN HEADER //

// MAIN //

// STRUCTURE HTML MAIN //

let main = document.createElement('main')
document.body.appendChild(main)

let divsMain = []
for(let div of Array(3)){
    divsMain.push(document.createElement('div'))
}
divsMain.forEach(function(div){
    main.appendChild(div)
})
divsMain[0].id = 'info-reservation'
divsMain[1].id = 'historic-R'
divsMain[2].id = 'avis'

let divInfoReserv = []
let infoReservation = document.querySelector('#info-reservation')
for(let div of Array(2)){
    divInfoReserv.push(document.createElement('div'))
}
divInfoReserv.forEach(function(div){
    infoReservation.appendChild(div)
})
divInfoReserv[0].id = 'blocUser'
divInfoReserv[1].id = 'current-R'

let divImgInfo = []
let blocUser = document.querySelector('#blocUser')
for(let div of Array(2)){
    divImgInfo.push(document.createElement('div'))
}
divImgInfo.forEach(function(div){
    blocUser.appendChild(div)
})
divImgInfo[0].id = 'imgInfo'
divImgInfo[1].id = 'infoModif'

let imgInfo = document.querySelector('#imgInfo')
let imageU = document.createElement('img')
imageU.id = 'imageU'
imageU.src = '../images/personnes/personne4.jpg'
imgInfo.appendChild(imageU)

let divNom = document.createElement('div')
let h4 = document.createElement('h4')
let numeroUser = document.createElement('span')
divNom.id = 'divNom'
h4.id = 'h4'
numeroUser.id = 'numeroUser'
h4.textContent = 'Dilan Ndoulou'
numeroUser.textContent = 'nº3069'
divNom.appendChild(h4)
divNom.appendChild(numeroUser)
imgInfo.appendChild(divNom)

let divIA = document.createElement('div')
let divIcone = document.createElement('div')
let divadresse = document.createElement('div')
let divBouton = document.createElement('div')
let bouton = document.createElement('button')
bouton.textContent = 'modifier'
divIA.id = 'bloc-I-A'
divIcone.id = 'blocIcone'
divadresse.id = 'blocAdresse'
bouton.id = 'modifier'
divBouton.id = 'divBouton'

let blocInfoModif = document.querySelector('#infoModif')
let blocIA = document.querySelector('#bloc-I-A')
blocInfoModif.appendChild(divIA)
divIA.appendChild(divIcone)
divIA.appendChild(divadresse)
blocInfoModif.appendChild(divBouton)
divBouton.appendChild(bouton)

let icones = []
let adresses = []
for(let info of Array(3)){
    icones.push(document.createElement('i'))
    adresses.push(document.createElement('span'))
}
icones[0].classList.add('fa-solid', 'fa-phone')
icones[1].classList.add('fa-solid', 'fa-envelope')
icones[2].classList.add('fa-solid', 'fa-location-dot')

adresses[0].textContent = '05 56 78 54 45'
adresses[1].textContent = 'Ndoulou@gmail.com'
adresses[2].textContent = '6 Rue du Saint Prêtre 25000 Besançon'

let blocIcones = document.querySelector('#blocIcone')
icones.forEach(function(i){
    blocIcones.appendChild(i)
})
let blocAdresse = document.querySelector('#blocAdresse')
adresses.forEach(function(i){
    blocAdresse.appendChild(i)
})

let divReserve = document.createElement('div')
let divsReserve = []
let divsInfo = []
let spanInfoReserve = []
for(let div of Array(3)){
    divsReserve.push(document.createElement('div'))
    divsInfo.push(document.createElement('div'))
    spanInfoReserve.push(document.createElement('span'))
}
divsInfo.forEach(function(divClass){
    divClass.classList.add('divInfo')
})
divsReserve.forEach(function(div){
divReserve.appendChild(div)
})
divReserve.id = 'bloc-reservation'
divsReserve[0].id = 'titre-reserve'
divsReserve[1].id = 'titre-infos-reserve'
divsReserve[2].id = 'la-reservation'

let currentReserve = document.querySelector('#current-R')
currentReserve.appendChild(divReserve)

let titreInfoReserve = document.querySelector('#titre-infos-reserve')
divsInfo.forEach(function(div){
    titreInfoReserve.appendChild(div)
})

spanInfoReserve[0].textContent = 'ID'
spanInfoReserve[1].textContent = 'Date'
spanInfoReserve[2].textContent = 'Facture'


titreInfoReserve.children[0].appendChild(spanInfoReserve[0])
titreInfoReserve.children[1].appendChild(spanInfoReserve[1])
titreInfoReserve.children[2].appendChild(spanInfoReserve[2])


let titrereserve = document.createElement('span')
titrereserve.id = 'titre-reservation'
titrereserve.textContent = 'mes réservations en cours'

let blocTitre = document.querySelector('#titre-reserve')
blocTitre.appendChild(titrereserve)

let infosReserve = []
for(let div of Array(4)){
    infosReserve.push(document.createElement('div'))
}
let laReservation = document.querySelector('#la-reservation')
infosReserve.forEach(function(div){
    laReservation.appendChild(div)
})
let spans = []
for(let span of Array(3)){
    spans.push(document.createElement('span'))
}
infosReserve.forEach(function(classDiv){
    classDiv.classList.add('divSpan')
})

spans[0].id = 'ID'
spans[1].id = 'DATE'
spans[2].id = 'FACTURE'
spans[0].textContent = '4589'
spans[1].textContent = '07.07.2023 | 09.07.2023'
spans[2].textContent = '#1J50S3J'
console.log(spans[1])

laReservation.children[0].appendChild(spans[0])
laReservation.children[1].appendChild(spans[1])
laReservation.children[2].appendChild(spans[2])
laReservation.children[3].id = 'bloc-details'

let iconeReserve = document.createElement('i')
let details = document.createElement('a')

iconeReserve.classList.add('fa-solid','fa-print')
details.id = 'voirDetails'
details.textContent = 'Voir détails'

let divDetails = document.querySelector('#bloc-details')
divDetails.appendChild(iconeReserve)
divDetails.appendChild(details)



// FIN STRUCTURE HTML MAIN //

// STYLE CSS MAIN //

let blocInfoReservation = document.querySelector('#info-reservation')
blocInfoReservation.style.padding = '1rem 5rem 1.5rem 5rem'
blocInfoReservation.style.display = 'flex'
blocInfoReservation.style.justifyContent = 'space-between'

let blocUserr = document.querySelector('#blocUser')
blocUserr.style.height = 'max-contents'
blocUserr.style.width = '35%'
blocUserr.style.padding = '1.5rem'
blocUserr.style.borderRadius = '15px'
blocUserr.style.boxShadow = '0px 0px 5px 0px #0000004a '

let imageInfo = document.querySelector('#imgInfo')
imageInfo.style.display = 'flex'

let imgU = document.querySelector('#imageU')
imgU.style.borderRadius = '100%' 
imgU.style.height = '5rem'

let blocNom = document.querySelector('#divNom')
blocNom.style.marginLeft = '1rem'

let titreNom = document.querySelector('#h4')
titreNom.style.margin = '1rem 0 1rem 0'

let infoModif = document.querySelector('#infoModif')
infoModif.style.display = 'flex'
infoModif.style.justifyContent = 'space-between'
infoModif.style.height = '7rem'
infoModif.style.marginTop = '1rem'

let blocIcAd = document.querySelector('#bloc-I-A')
blocIcAd.style.display = 'flex'

blocIcones.style.display = 'flex'
blocIcones.style.flexDirection = 'column'
blocIcones.style.justifyContent = 'space-Around'

blocAdresse.style.display = 'flex'
blocAdresse.style.flexDirection = 'column'
blocAdresse.style.justifyContent = 'space-around'
blocAdresse.style.width = '60%'
blocAdresse.style.marginLeft = '1rem'

let blocModifier = document.querySelector('#divBouton')
blocModifier.style.display = 'flex'
blocModifier.style.alignItems = 'flex-end'
blocModifier.style.justifyContent = 'center'
blocModifier.style.flex ='1'

bouton.style.width = '6rem'
bouton.style.marginBottom = '1rem'
bouton.style.backgroundColor = '#c1daff'
bouton.style.border = 'none'
bouton.style.borderRadius = '7px'
bouton.style.width = '80%'
bouton.style.height = '30%'
bouton.style.color = '#2f6cc8'
bouton.style.fontSize = '15px'
bouton.style.fontWeight = '600'

currentReserve.style.width = '55%'
currentReserve.style.boxShadow = '0px 0px 5px 0px #0000004a'
currentReserve.style.borderRadius = '15px'


blocTitre.style.display = 'flex'
blocTitre.style.justifyContent = 'center'
blocTitre.style.padding = '1rem'
blocTitre.style.backgroundColor = '#c1daff'
blocTitre.style.color = '#2f6cc8'
blocTitre.style.fontSize = '18px'
blocTitre.style.borderRadius = '15px 15px 0 0'

titreInfoReserve.style.display = 'flex'
titreInfoReserve.style.padding = '1rem 0'
titreInfoReserve.style.borderBottom = '1px solid #e1e1e1'

let divInfo = document.querySelectorAll('.divInfo')
divInfo.forEach(function(element){
    element.style.width = '180px'
    element.style.display = 'flex'
    element.style.justifyContent = 'center'
})

laReservation.style.display = 'flex'
laReservation.style.borderBottom = '1px solid #e1e1e1'

let divSpan = document.querySelectorAll('.divSpan')
divSpan.forEach(function(element){
    element.style.width = '180px'
    element.style.display = 'flex'
    element.style.justifyContent = 'center'
    element.style.padding = '1rem 0'
})

let voirDetails = document.querySelector('#voirDetails')
voirDetails.style.marginLeft = '1rem'
voirDetails.style.color = '#2f6cc8'

//FIN MAIN //

// FOOTER //

// STRUCTURE HTML FOOTER //

let footer = document.createElement('footer')
document.body.appendChild(footer)
let piedDePge = document.querySelector('footer')

let divs = []
let uls = []
let h3s = []
let lis = []

for(let div of Array(3)){
    divs.push(document.createElement('div'))
    uls.push(document.createElement('ul'))
    h3s.push(document.createElement('h3'))

    let li = []

    for(let i = 0; i < (divs.length === 1 ? 3 : 2) ; i++){
        let liTab = document.createElement('li')
        li.push(liTab)
        if (li.length === 1){
            liTab.classList.add('footLi')
        }
    }
    lis.push(li)
}
for (let i = 0; i < lis.length; i++) {
    let ul = uls[i];
    let liList = lis[i];
    
        for (let j = 0; j < liList.length; j++) {
        let li = liList[j];
        ul.appendChild(li);
        }
    }

lis[0][0].textContent = 'Fonctionnement du site'
lis[0][1].textContent = 'Conditions générales des ventes'
lis[0][2].textContent = 'Données et confidentialités'
lis[1][0].textContent = 'Charte qualité'
lis[1][1].textContent = 'Proposer votre hôtel'
lis[2][0].textContent = 'Centre d\'\aide'
lis[2][1].textContent = 'Nous contacter'


h3s[0].textContent = 'A propos'
h3s[1].textContent = 'Nos engagements'
h3s[2].textContent = 'Assistance'

for(i = 0; i < divs.length; i++){
    divs[i].appendChild(h3s[i])
    divs[i].appendChild(uls[i])
}

divs.forEach(function(div){
    footer.appendChild(div)
})

// FIN STRUCTURE HTML FOOTER

// STYLE CSS FOOTER //

footer.style.display = 'flex'
footer.style.marginTop = '40px'
footer.style.backgroundColor = '#e7e7e767'
footer.style.marginTop = '300px'

let enfant = footer.children
for (i = 0; i < enfant.length; i++){
    enfant[i].style.paddingTop = '20px';
    enfant[i].style.paddingLeft = '50px'
    enfant[i].style.width = '33.33%'
}

let ul = document.querySelectorAll('ul')
ul.forEach(function(element){
    element.style.padding = '0'
    element.style.height = '120px'
})

let li = document.querySelectorAll('li')
li.forEach(function(element){
    element.style.listStyle = 'none'
    element.style.marginTop = '15px'
})


/*  
    margin-top: 40px;
    color: var(--bg-tertiary);
    display: flex;
    background-color: var(--color-tertiary);

ul {
    padding: 0;
    height: 120px;

}

li {
    list-style: none;
    margin-top: 15px;
}
*/
// FIN FOOTER //
