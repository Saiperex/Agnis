const principal3 = document.getElementById("principal");
let margen = 0;
let inicioX, finX;

principal3.addEventListener('touchstart', function (event) {

    inicioX = event.touches[0].pageX;

});

principal3.addEventListener('touchmove', function (event) {

    finX = event.touches[0].pageX;

});

principal3.addEventListener('touchend', function (event) {

    if (inicioX > finX && margen > -400) {
        margen = margen - 100;
    }
    else if (inicioX < finX && margen < 0) {
        margen = margen + 100;
    }
    principal3.style.marginLeft = margen + "%";
    console.log(event.target.classList)
}
);
