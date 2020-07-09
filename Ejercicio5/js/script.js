let num = parseInt(prompt("Digite su numero"));
const secret = 23;
const contador = 0;

if(num == secret){
    console.log(`${num}, es el numero ganador`);
}else{
    while( num != contador && num != secret ){
    num = parseInt(prompt("Digite su numero nuevamente"));
        if(num <= 100 && num >= 1){
            if(num < secret){
                console.log( `${num}, es menor al numero secreto`);
            }else if(num > secret){
                console.log(`${num}, es mayor al numero secreto`);
            }else if( numb == secret){
                console.log(`${num}, es el numero ganador`); 
            }
        }else{
            console.log(`Error, ${num} esta fuero del rango`);
                
        }
            
    }
}