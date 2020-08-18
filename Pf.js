const listaNumeros = [2,4,6,8,10];
const nuevaLista = [];
for(numero in listaNumeros){
    console.log(listaNumeros[numero] + ' en Posición numero = '+numero);
    nuevaLista.push(listaNumeros[numero]*2);
}//fin for
function duplicar(listaNumeros){
    if (lista[0] == 2){
         return console.log([[0] * 2])
    } else {
        return duplicar([nuevaLista[1]*2]);        
    }
    duplicar(listaNumeros);
}
console.log(nuevaLista);