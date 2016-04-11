function promedio(a, b, c, d, e) {
	var suma;
	suma = a + b + c + d + e;
	return suma;
}
var num1 = parseInt(prompt("Ingrese número", "0"));
var num2 = parseInt(prompt("Ingrese número", "0"));
var num3 = parseInt(prompt("Ingrese número", "0"));
var num4 = parseInt(prompt("Ingrese número", "0"));
var num5 = parseInt(prompt("Ingrese número", "0"));
document.write("La suma es = " + promedio(num1, num2, num3, num4, num5));