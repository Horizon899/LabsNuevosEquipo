function ej1(){
    let numero = parseInt(prompt("Introduce un número:"));

document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (let i = 1; i <= numero; i++) {
    // Escribe una fila en la tabla con el número actual, su cuadrado y su cubo
    document.write("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td></tr>");
    }

    document.write("</table>");
}

function ej2(){
    let numero1=Math.floor(Math.random()*100);
    let numero2=Math.floor(math.random()*100);
    let tiempo=new Date().getTime();
    let respuesta=parseInt(prompt(`¿Cuánto es ${numero1} + ${numero2}?`));
    let tiempof= new Date().getTime();
    let tiempores=(tiempof-tiempo) / 1000;
    let comp= (respuesta===numero1+numero2) ? "Correcto" : "Incorrecto";
    document.write(`Respuesta: ${resultado}<br>`);
    document.write(`Tiempo tomado: ${tiempo} segundos`);
}

function ej3(){
    let negativos = 0;
    let positivos = 0;
    let ceros = 0;

    for(let i =0; i < arr.length;i++) {
        if(arr[i] < 0){
            negativos++;
        }
        if(0 < arr[i]){
            positivos++;
        }

        else{
            ceros++;
        }
    }
    return {negativos, positivos, ceros}
}

function ej4(){
    let resultados=[];
    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j]; 
        }
        resultados.push(suma / matriz[i].length);
    }
    return resultados;
}

function ej5(){
    let numero=(parseInt(prompt("Dame un numero")));
    numeronuevo= parseInt(numero.toString().split("").reverse("").join(""));
}

function ej6(tareas){
    console.log(`Tienes ${tareas}`);
    while (tareas != 0){
        console.log(`Tienes ${tareas}`);
        let tc= parseInt(prompt("Cuantas tareas haz terminado?"));
        tareas = tareas-tc;
    }
    
}