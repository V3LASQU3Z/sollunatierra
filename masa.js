function masas() {
    var m1 = parseFloat(document.getElementById("m1").value);
    var m2 = parseFloat(document.getElementById("m2").value);
    var r = parseFloat(document.getElementById("r").value);
    var g = 6.67 * Math.pow(10, -11);
    var F = g * ((m1 * m2) / Math.pow(r, 2));

    document.getElementById('MASA').innerHTML = F

}