
/*CUENTAS*/

let cuentas = [
    {nombre:"Mali", saldo:"323", contraseña:"lol"},
    {nombre:"Gera", saldo:"3423", contraseña:"lol"},
    {nombre:"Maui", saldo:"23", contraseña:"lol"}
]

/*INICIO*/

function inicio() {

    var nombre = document.getElementById("nombre").value;
    var contraseña = document.getElementById("contraseña").value;

    for(var i=0; i < cuentas.length; i++){

        if(nombre == cuentas[i].nombre && contraseña == cuentas[i].contraseña){
            localStorage.setItem("Clave",i);
            window.location.href = 'cajero.html';
            return 
        }
    }

    alert("Usuario o Contraseña Incorrecta")
}

/*TRANSFERIR*/

var fondo = localStorage.getItem("Clave");
var saldo = parseFloat(cuentas[fondo].saldo);

function transferencia(){
    
    var cantidad = document.getElementById("cantidad").value;
    var cantidad_numero = parseFloat(cantidad)
    
    saldo += cantidad_numero;
    alert("Transferencia Realizada");

}

/*RETIRO*/

function retiro(){
    
    var cantidad = document.getElementById("cantidad").value;
    var cantidad_numero = parseFloat(cantidad)

    if(cantidad_numero <= saldo){
        saldo -= cantidad_numero;
    alert("Retiro Realizado");
    }else{
        alert("Dinero insuficiente")
    }

}

/*CONSULTAR*/

function consulta(){

    var dinero= document.getElementById("saldo");
    dinero.innerHTML = "Saldo actual : " + saldo + "$";

}

