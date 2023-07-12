let paises=["chile","argentina","peru","bolivia"];

for(i=0;i<paises.length;i++) {
    console.log(paises[i]);
}


paises.forEach(mostrar);
function mostrar(pais) {
    console.log(pais);
}

paises.forEach(function(pais) { console.log(pais); });

// lambda
paises.forEach(pais => console.log(pais));