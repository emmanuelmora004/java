function sumar(){
    let varn1=parseInt(document.getElementById("n1").value);
    let varn2=parseInt(document.getElementById("n2").value);

    let sumar = varn1 + varn2;

    document.getElementById("r1").value = `${sumar}`;
}

function restar(){
    let varn1=parseInt(document.getElementById("n1").value);
    let varn2=parseInt(document.getElementById("n2").value);

    let resta = varn1 - varn2;

    document.getElementById("r1").value = `${resta}`;
}

function multiplicar(){
    let varn1=parseInt(document.getElementById("n1").value);
    let varn2=parseInt(document.getElementById("n2").value);

    let multi = varn1 * varn2;

    document.getElementById("r1").value = `${multi}`;
}

function dividir(){
    let varn1=parseInt(document.getElementById("n1").value);
    let varn2=parseInt(document.getElementById("n2").value);

    let div = varn1 / varn2;

    document.getElementById("r1").value = `${div}`;
}

function calcular(){
let nombre = document.getElementById("nombre").value;
let cantidad = parseInt(document.getElementById("cantidad").value);
let precio = parseInt (document.getElementById("precio").value);

let subtotal = precio*cantidad
document.getElementById("subtotal").value=`${subtotal.toLocaleString()}`;

let iva = subtotal*0.19;
document.getElementById("iva").value=`${iva.toLocaleString()}`;

let descuento = subtotal*0.19;
document.getElementById("descuento").value=`${descuento.toLocaleString()}`;

let total = subtotal + iva - descuento;
document.getElementById("total").value=`${total.toLocaleString()}`;

}

function promediar(){

let not1 = parseInt(document.getElementById("n1").value);
let not2 = parseInt(document.getElementById("n2").value);
let not3 = parseInt(document.getElementById("n3").value);

let promedio= (not1 + not2 + not3)/3
document.getElementById("prom").value=`${promedio.toFixed(2)}`;


}
function Salario(){
let horas = parseInt(document.getElementById("Horas").value);
let valor = parseInt(document.getElementById("Valor").value);

let salario = horas*valor
document.getElementById("tosalario").value=`${salario.toLocaleString()}`;


}

function presupuesto(){
let varinv = parseInt(document.getElementById("ninv").value);
let varco = parseInt(document.getElementById("valorco").value);
let varbe = parseInt(document.getElementById("valorbe").value);
let varde = parseInt(document.getElementById("valorde").value);
let varmu = parseInt(document.getElementById("costomu").value);
let varpro= parseInt(document.getElementById("propi").value);

let comidatotal = varinv * varco
let bebidatotal = varinv * varbe;
let subtotal = comidatotal + bebidatotal + varde + varmu
let propina = subtotal * (varpro / 100);
let totalgeneral = subtotal + propina;
let costoporinvitado = totalgeneral / varinv


document.getElementById("cototal").innerText=`${comidatotal.toLocaleString()}`


document.getElementById("betotal").innerText=`${bebidatotal.toLocaleString()}`

document.getElementById("deco").innerText=`${varde.toLocaleString()}`

document.getElementById("musi").innerText=`${varmu.toLocaleString()}`

document.getElementById("sub").innerText=`${subtotal.toLocaleString()}`

document.getElementById("propin").innerText=`${propina.toLocaleString()}`

document.getElementById("total").innerText=`${totalgeneral.toLocaleString()}`

document.getElementById("costo").innerText=`${costoporinvitado.toLocaleString()}`











}
