var url=["../img/aa.png", "../img/as.png", "../img/ud.png", "../img/ur.png", "../img/ze.png"]
const conteinerImgUrl=document.querySelector(".mancha4")
const titulo=document.querySelector(".titulo_proyecto")
const descripcion=document.querySelector(".descripcion_proyecto")
var index=1;
var portfolio=`[
    {
        "nombre":"ANGEL ALEXANDER",
        "descripcion":"Bienvenidos a nuestra cabaña vacacional ubicada en el hermoso valle de Córdoba. Disfrute de la tranquilidad de la naturaleza y la comodidad de nuestras instalaciones completamente equipadas. Con hermosas vistas a las montañas, podrá relajarse en nuestro amplio jardín o explorar los senderos cercanos. Con capacidad para hasta diez personas, es perfecta para familias o amigos que buscan una escapada única. Reserve ahora y viva una experiencia inolvidable en ANGEL ALEXANDER."
    },
    {
        "nombre":"AUTO-SOLUCIONES",
        "descripcion":"Auto-soluciones es una plataforma en línea dedicada a brindar soluciones automotrices de alta calidad a todos los usuarios. Son la mejor opción para quienes buscan servicios de alta calidad en el mantenimiento y reparación de vehículos. Su equipo de expertos altamente capacitados utiliza tecnología de última generación y piezas originales para garantizar la satisfacción total del cliente. Además, ofrecen servicios personalizados y precios competitivos. Confía en ellos para mantener tu auto en perfecto estado."
    },
    {
        "nombre":"UNIVERSAL DANCE",
        "descripcion":"Bienvenidos a Universal Dance, el estudio de danza donde la pasión y el ritmo se fusionan en cada clase. Ofrecemos un amplio abanico de estilos de baile para todas las edades y niveles, con especial énfasis en la formación de profesores de danza jazz. Nuestros profesionales altamente capacitados te guiarán en un viaje de aprendizaje y descubrimiento para que puedas alcanzar tus metas. Descubre tu potencial y siente la magia del baile en nuestras clases. ¡Únete a la comunidad de Universal Dance hoy!"
    },
    {
        "nombre":"UNIONES Y RETORNOS",
        "descripcion":"En Uniones y Retornos nos especializamos en el esoterismo y la magia para ayudarte a recuperar el amor de tu vida. Ofrecemos servicios de amarres y retornos de parejas utilizando técnicas ancestrales y poderosos rituales para atraer la energía positiva y armonía en tus relaciones. Nuestro equipo te brindará una atención personalizada y confidencial para guiarte y lograr los resultados deseados. ¡No esperes más para encontrar el amor que mereces! Contáctanos y comienza a transformar tu vida amorosa hoy mismo."
    },
    {
        "nombre":"ZEA",
        "descripcion":"ZEA es una empresa líder en el mantenimiento y montaje de ascensores. Ofrecemos soluciones personalizadas para cada cliente, adaptadas a sus necesidades y requerimientos. Contamos con un equipo altamente capacitado y comprometido con la seguridad, eficiencia y calidad en nuestro trabajo. Garantizamos un servicio de alta calidad, con precios competitivos y una atención al cliente excepcional. Confía en nosotros para mantener tus ascensores en perfecto estado y asegurar su óptimo funcionamiento."
    }
]`
var jsonPortfolioData= JSON.parse(portfolio);
function cambiarImagen()
{ 
    titulo.innerHTML="PROYECTO: "+jsonPortfolioData[index].nombre;
    descripcion.innerHTML=jsonPortfolioData[index].descripcion;
    conteinerImgUrl.style.backgroundImage = `url(${url[index]})`;
    if(index<url.length-1)
    {
        index=index+1
    }
    else
    {
        index=0
    }
}
setInterval(cambiarImagen, 5000);