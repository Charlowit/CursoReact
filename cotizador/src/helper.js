
//Obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}


//Calcula el total a pagar segun la marca

export function calcularMarcar(marca){
    let incremento;

    switch(marca){

        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

//Calcula el tipo de Seguro

export function obtenerPlan( plan ){
    return ( plan === 'basico') ? 1.2 : 1.5;
}



//Poner las letras en mayuscula

export function primerMayuscula ( texto ) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}