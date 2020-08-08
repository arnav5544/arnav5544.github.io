//Created By Arnav
function co(){var val =document.getElementById("number").value
var cat="https://wa.me/91"+val
var hi="https://api.qrserver.com/v1/create-qr-code/?data="+cat

var src=document.getElementById("img").src
=hi
var a=document.getElementById("a")
a.href=cat
a.style.display="inline"
navigator.vibrate(150)
}
function vib(){navigator.vibrate(150)}
