let año = parseInt(prompt("Digite un año: "));

if(año % 4 == 0 && año % 100 != 0 || año % 400 == 0){
    console.log(`${año} Año bisiesto`);
}else{
    console.log(`${año} Año no bisiesto`);
}