
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

 verificarCampo = function () {
    var v = $("#cpf").val();
    if(v.length >= 14){
        $("#errorCpf").addClass('d-none');
        $("#cpf").removeClass('red-border');
    }else{
        $("#errorCpf").removeClass('d-none');
        $("#cpf").addClass('red-border');
    }
    return v.length >= 14;
};

imprimirNegativa = function (){
    if(verificarCampo()){
        window.open("../img/certidaoNegativaDebito.jpg", "_blank");
    }
}
