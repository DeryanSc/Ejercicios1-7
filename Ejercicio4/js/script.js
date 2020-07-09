let texto = prompt('Digite su texo');
let letra = prompt ('Digite un caracter');
let resultado = [];

for (let contador = 0; contador < texto.length; contador++){
    if(texto[contador].toLowerCase() === letra){
        resultado.push(contador);
    }
}
console.log(`La letra ${texto}, Se repite en el texto en : ${resultado.length}`);
