var imagenes=document.querySelectorAll(".acerca-img")
var bgImagenes=document.querySelectorAll(".acerca_imagen")
const colores=
["box-shadow:0px 60px 0px rgb(255,73,0)",
"box-shadow:-60px 0px  0px rgb(255,73,0)",
"box-shadow:60px 0px 0px rgb(255,73,0)",
"box-shadow:0px -60px 0px rgb(255,73,0)"
]
for(let i=0;i<imagenes.length;i++)
{
    imagenes[i].addEventListener("mouseover",function(event)
    {
        bgImagenes[i].style=colores[i]
    })
    imagenes[i].addEventListener("mouseout", function(event)
    {
        bgImagenes[i].style="box-shadow:none"
    });
}