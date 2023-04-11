var massa = 0;
var velocidade = 0;
var resultadoMassa = 0;
var resultadoVelocidade = 0;
var mudOrbita = 0.5;
var tax1 = 1;
var tax2 = 1.5;
var tax3 = 2;
var tax4 = 3;
var tax5 = 4.5;
var tax6 = 6;

function verificarMarcadores(){
    var ver1 = 0;
    var ver2 = 0;
    var ver3 = 0;
    var ver4 = 0;
    var ver5 = 0;
    var ver6 = 0;

    ver1 = Math.ceil(resultadoMassa * tax1);
    ver2 = Math.ceil(resultadoMassa * tax2);
    ver3 = Math.ceil(resultadoMassa * tax3);
    ver4 = Math.ceil(resultadoMassa * tax4);
    ver5 = Math.ceil(resultadoMassa * tax5);
    ver6 = Math.ceil(resultadoMassa * tax6);


    if (ver1 == resultadoVelocidade) {
        document.getElementById("marcador1").classList.add("verde");
        } else {
        document.getElementById("marcador1").classList.remove("verde");
    }
    
    if (ver2 == resultadoVelocidade) {
        document.getElementById("marcador2").classList.add("verde");
        } else {
        document.getElementById("marcador2").classList.remove("verde");
    }
    
    if (ver3 == resultadoVelocidade) {
        document.getElementById("marcador3").classList.add("verde");
        } else {
        document.getElementById("marcador3").classList.remove("verde");
    }
    
    if (ver4 == resultadoVelocidade) {
        document.getElementById("marcador4").classList.add("verde");
        } else {
        document.getElementById("marcador4").classList.remove("verde");
    }
    
    if (ver5 == resultadoVelocidade) {
        document.getElementById("marcador5").classList.add("verde");
        } else {
        document.getElementById("marcador5").classList.remove("verde");
    }
    
    if (ver6 == resultadoVelocidade) {
        document.getElementById("marcador6").classList.add("verde");
        } else {
        document.getElementById("marcador6").classList.remove("verde");
    }
    //switch {
    //case1 : resultadoMassa == resultadoVelocidade;
    // document.getElementById("marcador2").style.backgroundColor = "green" break;
    // }
}

function adcionarMassa() {
    massa = parseFloat(document.getElementById("massa").value);
    resultadoMassa = Math.ceil(massa + resultadoMassa);
    document.getElementById("resultado-massa").innerHTML = resultadoMassa.toFixed(0);

    verificarMarcadores();

}
function adcionarVel() {
    velocidade = parseFloat(document.getElementById("velocidade").value);
    resultadoVelocidade = Math.ceil(velocidade + resultadoVelocidade);
    document.getElementById("resultado-velocidade").innerHTML = resultadoVelocidade.toFixed(0);

    // Verifica se os resultados são iguais e adiciona ou remove a classe "verde" do marcador
    verificarMarcadores();
}
function subtrairVel() {
    velocidade = parseFloat(document.getElementById("velocidade").value);
    resultadoVelocidade = Math.ceil(resultadoVelocidade - velocidade);
    document.getElementById("resultado-velocidade").innerHTML = resultadoVelocidade.toFixed(0);
    
    verificarMarcadores();
}

function mudarOrbitaDown() {
    velocidade = resultadoVelocidade;
    resultadoVelocidade = Math.ceil(velocidade + (velocidade * mudOrbita));
    document.getElementById("resultado-velocidade").innerHTML = resultadoVelocidade.toFixed(0);
    
   verificarMarcadores();
}
function mudarOrbitaUp() {
    velocidade = resultadoVelocidade;
    resultadoVelocidade = Math.ceil(velocidade * mudOrbita);
    document.getElementById("resultado-velocidade").innerHTML = resultadoVelocidade.toFixed(0);
        
    verificarMarcadores();
}   
function limpar() {
    document.getElementById("massa").value = "0";
    document.getElementById("velocidade").value = "0";
    //document.getElementById("resultadoMassa").value = "0";
    //document.getElementById("resultadoVelocidade").value = "0";
    //document.getElementById("resultado-massa").innerHTML = "0";
    //document.getElementById("resultado-velocidade").innerHTML = "0";
    //document.getElementById("resultado-item").innerHTML = "0"
    massa= 0;
    velocidade=0;
    resultadoMassa=0;
    resultadoVelocidade=0;
}
