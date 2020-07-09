let num = parseInt(prompt("digite un numero"));
let contador = 0;
let primo = true;

for(contador = 2; i < num; contador++){
    if(num % contador == 0){
        primo = false;
    }
}

if( primo == true){
    console.log("Numero primo");
}else{
    console.log("Numero compuesto");
}