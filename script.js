var envio=document.querySelector("#prueba");
var rikoimg=document.querySelector(".riko__logo")

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