$(document).on("click", "#camera", function() {
navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: false	 
});

function onSuccess(imageURI) {
    var image = document.getElementById('Image');
    image.src = imageURI;
}
function onFail(message) {
  navigator.notification.alert('Failed beacuse: ' + message);
    alert('Failed because: ' + message);
}
});

$(document).on("change","#opacidade", function(){
    Image = document.getElementById("Image");
    Filter = document.getElementById("opacidade").value;

    Image.style.WebkitFilter = "opacity(" + Filter * 1 + "%)"
});

$(document).on("change","#saturacao", function(){
    Image = document.getElementById("Image");
    Filter = document.getElementById("saturacao").value;

    Image.style.WebkitFilter = "saturate(" + Filter * 50 + "%)"
});

$(document).on("change","#cinza", function(){
    Image = document.getElementById("Image");
    Filter = document.getElementById("cinza").value;

    Image.style.WebkitFilter = "grayscale(" + Filter * 10 + "%)"
});

$(document).on("change","#desfoque", function(){
    Image = document.getElementById("Image");
    Filter = document.getElementById("desfoque").value;

    Image.style.WebkitFilter = "blur(" + Filter * 10 + "px)"
});

$(document).on("change","#invert", function(){
    Image = document.getElementById("Image");
    Filter = document.getElementById("invert").value;

    Image.style.WebkitFilter = "invert(" + Filter * 10 + "%)"
});



