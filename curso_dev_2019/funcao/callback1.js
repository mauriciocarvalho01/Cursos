const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function  imprimir(nome,indice) {
    console.log(`${indice + 1}. ${nome}`);
}

//Imprimir nome e indice
fabricantes.forEach(imprimir);

//Apenas o nome sem o indice
fabricantes.forEach(function (fabricante){
    console.log(fabricante);
});

//Arrow
fabricantes.forEach(fabricante => console.log(fabricante));
