var envio=document.querySelector("#prueba");
var rikoimg=document.querySelector(".riko__logo");
const boton=document.querySelector(".boton__menu");
const nav=document.querySelector(".navegador__contenedor");

envio.addEventListener("click",()=>{
	envio.classList.toggle("helow");
});
rikoimg.addEventListener("click",()=>{
	if (rikoimg.getAttribute("src")=="img/riko.jpg") {
		rikoimg.setAttribute("src","img/15.jpg");
	}
	else{
		rikoimg.setAttribute("src","img/riko.jpg")
	}
});
if (window.screen.width<=888) {
	boton.removeAttribute("hidden");
	nav.classList.add("oculto");
}
boton.addEventListener("click",()=>{
	nav.classList.toggle("oculto");
	boton.classList.toggle("boton__click");
})
