var derniere_position_de_scroll_connue = 0;
var ticking = false;
var boutton_ouvert = document.getElementById("btn_header");
let lis = document.querySelector(".list");



boutton_ouvert.addEventListener("click",() => {
    lis.classList.toggle("show_list");
})


function faireQuelqueChose(position_scroll) {
    // Faites quelque chose avec la position du scroll
    // Par exemple, animez des éléments lorsque l'utilisateur atteint certaines parties de la page

    const sectionIntroduction = document.getElementById("intro");
    const positionSectionIntro = sectionIntroduction.offsetTop;
    
    if (position_scroll <= positionSectionIntro) {
        // L'utilisateur a atteint la section "À propos"
        // Vous pouvez maintenant ajouter votre animation ici
        // Par exemple :
        sectionIntroduction.classList.add("introAnime"); // Ajoutez la classe d'animation
    }
}

window.addEventListener("scroll", function (e) {
    derniere_position_de_scroll_connue = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            faireQuelqueChose(derniere_position_de_scroll_connue);
            ticking = false;
        });
    }
    ticking = true;
});
