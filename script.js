
/* var kaina = prompt("Įveskite prekės kainą")
var pristatymas = confirm("Ar reikalingas pristatymas į namus?")
var miestas = prompt("Į kurį miestą reiks pristatyti?")
var atsiemimas = alert("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a") */

do {
    var kaina = prompt("Įveskite prekės kainą")
    kaina = Number(kaina)
} while(isNaN(kaina))

var pristatymas = confirm("Ar reikalingas pristatymas į namus?")
var papildomas = 8.99
var pilnaKaina = kaina + 8.99

if(pristatymas == true) {
    var miestas = prompt("Į kurį miestą reiks pristatyti?")
} else {
    alert("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}

console.log("===1 variantas===")
console.log("Prekės kaina: " + kaina.toFixed(2) + " €")
console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")

console.log("===2 variantas===")
console.log("Prekės kaina: " + kaina.toFixed(2) + " €")
console.log("Pristatymas: " + papildomas + " €")
console.log("Iš viso: " + pilnaKaina.toFixed(2) + " €")
console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.")

