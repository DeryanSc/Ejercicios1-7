const num = parseInt(prompt('Digite su numero'));
let sum = 0;
let contador = 1;

while(contador <= num){
    sum = sum + contador;
    console.log(contador);
    contador ++;

}
console.log(`Su resultado es: ${sum}`);