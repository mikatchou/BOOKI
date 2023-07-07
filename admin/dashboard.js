let menus = document.querySelectorAll('.blocs')
let sections = document.querySelectorAll('.les-sections')
let dashboard = document.querySelector('.section-dashboard')

// code pour afficher ou cacher les sections 
menus.forEach(function(item){
    item.addEventListener('click', function(){
        let laSection = this.getAttribute('data-target');

        sections.forEach(function(section){
            setTimeout(function(){
                section.style.opacity = '0';
            }, 100)
            section.style.display = 'none';
        })

        let sectionCible = document.querySelector('#' + laSection)
        sectionCible.style.display = 'block';
        setTimeout(function(){
            sectionCible.style.opacity = '1';
        }, 100)
    })
})