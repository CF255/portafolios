
/* let cantidad = prompt("monto de alquiler");
let multi = prompt("cantidad de meses"); 

*/

function sumarfun(){

var meses, alquiler, result, text;

meses = document.getElementById('meses');
alquiler = document.getElementById('alquiler')
  
var menosdies;
var menosquince;
var quince;

document.write("cantidad de meses " + meses  + "<br>");

result = parseFloat(meses) * parseFloata(alquiler);

document.write("alquiler: " + alquiler + "<br>");

menosdies = alquiler * (10/100);
document.write("menos diez porciento: " + menosdies + "<br>");

menosquince = alquiler - menosdies;

quince = menosquince * 0.15
document.write("menos 0.15: " + quince + "<br>");
text = result;

document.getElementById('.sumando').innerHTML =text
 
};
  
 