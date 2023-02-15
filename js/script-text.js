const letra =document.getElementById("letras");
const fuentes=["Anson-R3","GENUINE","CROOKED-Bold"];
var index=0;
function cambioFuente ()
{
    letra.style.fontFamily=fuentes[index];
    index=index+1
    if(index==3)
    {
        index=0
    }
}
setInterval(cambioFuente,2000);

