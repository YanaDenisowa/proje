// let menu = document.querySelector(".header__menu");
// let hamburgerButton = document.querySelector(".hamburger");
// let menuItem = document.querySelectorAll('.header__menu__item');
//
// hamburgerButton.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     document.body.classList.toggle('overflow');
//     hamburgerButton.classList.toggle("hamburger-active");
// });
// // console.log(menuItem);
//
// menuItem.forEach(item => {
//     item.addEventListener( 'click', (e) =>{
//         if(document.body.classList.contains("overflow")){
//             document.body.classList.toggle("overflow");
//         }
//         hamburgerButton.classList.toggle('hamburger-active');
//         menu.classList.toggle('active');
//         // console.log(22333);
//         let link2 = item.getElementsByTagName("a")[0];
//
//         e.preventDefault();
//         link2.getAttribute('href');
//         document.querySelector(link2.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     })
// });


let menu = document.querySelector(".header__menu");
let hamburgerButton = document.querySelector(".hamburger");
let menuItem = document.querySelectorAll('.header__menu__item');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
    document.body.classList.toggle('overflow');
    hamburgerButton.classList.toggle("hamburger-active");
});
menuItem.forEach(item => {
    item.addEventListener( 'click', (e) =>{
        if(document.body.classList.contains("overflow")){
            document.body.classList.toggle("overflow");
        }
        hamburgerButton.classList.toggle('hamburger-active');
        menu.classList.toggle('open-menu');

        let link2 = item.getElementsByTagName("a")[0];
        e.preventDefault();
        link2.getAttribute('href');
        document.querySelector(link2.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
});