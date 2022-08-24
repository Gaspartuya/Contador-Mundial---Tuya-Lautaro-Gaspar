function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

let anomundial = 1930;

alert("Hubo mundial en al año " + anomundial);

while (anomundial < 2020) {

    alert("hubo mundial en el año " + anomundial);
    anomundial = anomundial + 4;
}

alert("fin")