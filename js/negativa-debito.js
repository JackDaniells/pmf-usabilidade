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
    window.open("../img/certidaoNegativaDebito.jpg", "_blank");
}
