var url=["../img/aa.png", "../img/as.png"]
const conteinerImgUrl=document.querySelector(".mancha4")
var index=1;
function cambiarImagen()
{ 
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