// consola (log, info, warn, error, assert)
console.log("hola mundo!");
console.info("Información importante");
console.warn("aguas");
console.error("Te equivocaste");
console.assert(1==1);

let nombre = "Gael";
console.log("Hola " + nombre);

const raza = "Chow Chow";
// Alcance de las variables
{
    let Perros=20;
    console.log(Perros);
}

// alert, prompt, confirm
alert('Los perros son ${raza}'); 
const chilak_fav = prompt("Cuales son tus perros favoritos?");
console.log('Tus perros favoritos son ${chilak_fav}');

const is_hambre = confirm("Quieres un perro?");

if(is_hambre){
    console.info("Adopta un perro");
} else {
    console.warn("Regresa cuando quieras uno");
}

// funciones
function adoptar_perro(raza){
    console.log('Buscando perro de raza ${raza}');
}

adoptar_perro(raza);

// funciones modernas

() => {
    console.log("Perros merequetengos");
}

document.getElementById("Picale").onclick = () => {
    console.log("No pensé que lo ibas a presionar, no hay nada aquí pero felicidades, le picaste.");
}

const arreglo = ["Elemento"];

const arreglo2 = new Array();

arreglo.push("Otro elemento");

arreglo[10] = "Uno más";

arreglo["Perros"];

const objeto = {};