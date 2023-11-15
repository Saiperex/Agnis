//btns siguiente
const btnComenzar=document.querySelector(".comenzar");
const btnSiguienteOracle=document.querySelector(".siguienteOracle")
const btnSiguienteStock=document.querySelector(".siguienteStock")
//btn anterior
const btnAnteriorStock=document.querySelector(".anteriorStock")
const btnAnteriorCruzado=document.querySelector(".anteriorCruzado")
//divs
const divSaludo=document.querySelector(".saludo");
const divOracle=document.querySelector(".datosOracle");
const divStock=document.querySelector(".datosStock");
const divCruzado=document.querySelector(".cruzarDatos");

btnComenzar.addEventListener("click",function()
{
    divSaludo.style.opacity="0";
    divSaludo.style.zIndex="0";
    divOracle.style.opacity="1";
    divOracle.style.zIndex="1";
})
btnSiguienteOracle.addEventListener("click",function()
{
    divOracle.style.opacity="0";
    divOracle.style.zIndex="0";
    divStock.style.opacity="1";
    divStock.style.zIndex="1";
})
btnSiguienteStock.addEventListener("click",function()
{
    divStock.style.opacity="0";
    divStock.style.zIndex="0";
    divCruzado.style.opacity="1";
    divCruzado.style.zIndex="1";
})
//
btnAnteriorStock.addEventListener("click",function()
{
    divOracle.style.opacity="1";
    divOracle.style.zIndex="1";
    divStock.style.opacity="0";
    divStock.style.zIndex="0";
})

btnAnteriorCruzado.addEventListener("click",function()
{
    divStock.style.opacity="1";
    divStock.style.zIndex="1";
    divCruzado.style.opacity="0";
    divCruzado.style.zIndex="0";
})
