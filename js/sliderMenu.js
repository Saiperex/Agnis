const botonMenu=document.querySelector(".btn-menu")
botonMenu.addEventListener("click", function()
{
    botonMenu.classList.toggle("change")
    validar()
    
})
/*buttons */
const inicio2=document.getElementById("inicio-btn2")
const acerca2=document.getElementById("acerca-btn2")
const proyectos2=document.getElementById("proyectos-btn2")
const servicios2=document.getElementById("servicios-btn2")
const contacto2=document.getElementById("contacto-btn2")
const principal2=document.getElementById("principal")
const panel=document.getElementById("slider-menu")
var izquierda="";
inicio2.addEventListener("click", function () 
{
    console.log("inicio")
    principal2.style.marginLeft="0%"
})
acerca2.addEventListener("click", function () 
{
    console.log("acerca")
    principal2.style.marginLeft="-100%"
})
proyectos2.addEventListener("click", function () 
{
    console.log("proyectos")
    principal2.style.marginLeft="-200%"
})
servicios2.addEventListener("click", function () 
{
    console.log("servicios")
    principal2.style.marginLeft="-300%"
})
contacto2.addEventListener("click", function () 
{
    console.log("contacto")
    principal2.style.marginLeft="-400%"
})
function validar()
{
    if(botonMenu.classList.contains("change"))
    {
        panel.style="height: 100%" 
        panel.style.left=izquierda
    }
    else
    {
        panel.style="height:0%"
        panel.style.left=izquierda
    }
}
validar()