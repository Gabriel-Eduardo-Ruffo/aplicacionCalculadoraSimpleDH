/*
function dividir(numeroA, numeroB){
    
    if(numeroB == 0){
        return ("No se puede dividir por 0");
    }else{
        return (numeroA / numeroB);
    }  
}
*/

let dividir = function (numeroA, numeroB){
    
    if( numeroB == 0){
        return ("No puede dividir por 0");
    }else{
        return (numeroA / numeroB);
    }  
}

module.exports = dividir;//hace referencia a la funcion, pero no se pone con parentecis