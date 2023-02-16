const inicio=document.getElementById("inicio-btn")
const acerca=document.getElementById("acerca-btn")
const proyectos=document.getElementById("proyectos-btn")
const servicios=document.getElementById("servicios-btn")
const contacto=document.getElementById("contacto-btn")
const principal=document.getElementById("principal")
inicio.addEventListener("click", function () 
{
    console.log("inicio")
    principal.style.marginLeft="0%"
})
acerca.addEventListener("click", function () 
{
    console.log("acerca")
    principal.style.marginLeft="-100%"
})
proyectos.addEventListener("click", function () 
{
    console.log("proyectos")
    principal.style.marginLeft="-200%"
})
servicios.addEventListener("click", function () 
{
    console.log("servicios")
    principal.style.marginLeft="-300%"
})
contacto.addEventListener("click", function () 
{
    console.log("contacto")
    principal.style.marginLeft="-400%"
})