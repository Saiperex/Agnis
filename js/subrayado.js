var divFocus=document.querySelector(".titulo_subrayado")
var subrayado=document.querySelector(".subrayado");
console.log(divFocus)
divFocus.addEventListener("mouseover", function(event) {
    subrayado.style="width:19ch"
  });
divFocus.addEventListener("mouseout", function(event) {
    subrayado.style="width:0px"
  });
