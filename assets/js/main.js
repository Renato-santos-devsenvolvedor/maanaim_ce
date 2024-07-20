/*------------ SHOW MENU-------------*/
const showMneu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /*valida se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav__menu*/
        toggle.addEventListener('click', () => {
            /*adicina a class show-menu na div que tem o id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav-menu')

/*------------ REMOVER MENU MOBILE -------------*/
const navLink = document.querySelectorAll('.nav__link')
const navClose = document.querySelectorAll('.close')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    /*Quando um link ou o botão close for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
navClose.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))

$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true, 
        auto: true
    });
});


/*--------Slider Ebd---------*/
let time = 4000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;   
    
function nextImage() {
 
    images[currentImageIndex]
        .classList.remove("selected")
        
    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0
            
    images[currentImageIndex]
        .classList.add("selected")
}
    
    
function start() {
     setInterval(() => {
        nextImage()
       }, time)
       
    }

window.addEventListener("load" , start)    

/*--------Slider social

let time1 = 6000,
    currentImageIndex1 = 0,
    images1 = document1
                .querySelectorAll("#slider_rede img")
    max = images1.length;   
    
function nextImage1() {
 
    images1[currentImageIndex1]
        .classList.remove("selected_social")
        
    currentImageIndex1++

    if (currentImageIndex1 >= max)
        currentImageIndex1 = 0
            
    images[currentImageIndex1]
        .classList.add("selected_social")
}
    
    
function start1() {
     setInterval(() => {
        nextImage()
       }, time1)
       
    }

window.addEventListener("load" , start1)   ---------*/