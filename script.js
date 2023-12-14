let productos = [
    {
        nombre: "Aqua",
        precio: 200
    },
    {
        nombre: "Emocion",
        precio: 180
    },
    {
        nombre: "Alegria",
        precio: 160
    },
    {
        nombre: "Frescura",
        precio: 150
    }
]

let empleados = [
    {
        nombre: "Juana",
        productosVendidos: null,
        sumaTotal: null
    },
    {
        nombre: "Pedro",
        productosVendidos: null,
        sumaTotal: null
    }
]

function calcular() {
    calcularJuana();
    calcularPedro();

    let texto = document.getElementById("texto");

    if(empleados[0].sumaTotal > empleados[1].sumaTotal) {
        texto.innerText = `Felicidades ${empleados[0].nombre}, eres empleado/a del mes!!`;
    } else if(empleados[0].sumaTotal < empleados[1].sumaTotal) {
        texto.innerText = `Felicidades ${empleados[1].nombre}, eres empleado/a del mes!!`;
    } else {
        texto.innerText = `Hubo un empate entre ${empleados[0].nombre} y ${empleados[1].nombre}!!`;
    }

    let aqua = document.getElementById("aqua");
    let emocion = document.getElementById("emocion");
    let alegria = document.getElementById("alegria");
    let frescura = document.getElementById("frescura");

    let string = `
Resumen de Juana:
Productos Aqua vendidos     = ${aqua.value} ($${aqua.value * 200}usd)
Productos Emoción vendidos  = ${emocion.value} ($${emocion.value * 180}usd)
Productos Alegría vendidos  = ${alegria.value} ($${alegria.value * 160}usd)
Productos Frescura vendidos = ${frescura.value} ($${frescura.value * 200}usd)
Productos Vendidos en Total = ${empleados[0].productosVendidos}
Suma total = ${empleados[0].sumaTotal}usd
    `;

    let resumen = document.getElementById("resumenJuana");
    resumen.innerText = string;

    aqua = document.getElementById("aqua2");
    emocion = document.getElementById("emocion2");
    alegria = document.getElementById("alegria2");
    frescura = document.getElementById("frescura2");

    string = `
Resumen de Pedro:
Productos Aqua vendidos     = ${aqua.value} ($${aqua.value * 200}usd)
Productos Emoción vendidos  = ${emocion.value} ($${emocion.value * 180}usd)
Productos Alegría vendidos  = ${alegria.value} ($${alegria.value * 160}usd)
Productos Frescura vendidos = ${frescura.value} ($${frescura.value * 200}usd)
Productos Vendidos en Total = ${empleados[1].productosVendidos}
Suma total = ${empleados[1].sumaTotal}usd
    `;

    resumen = document.getElementById("resumenPedro");
    resumen.innerText = string;
}

function calcularJuana() {
    let aqua = document.getElementById("aqua");
    let emocion = document.getElementById("emocion");
    let alegria = document.getElementById("alegria");
    let frescura = document.getElementById("frescura");

    let sumaTotal = 0;
    let cantidadProductos = 0;

    for(let i = 0; i < productos.length; i++) {
        if(aqua.name == productos[i].nombre) {
            sumaTotal += aqua.value * productos[i].precio;
            cantidadProductos = parseInt(aqua.value, 10);
        } else if (emocion.name == productos[i].nombre) {
            sumaTotal += emocion.value * productos[i].precio;
            cantidadProductos += parseInt(emocion.value, 10);
        } else if(alegria.name == productos[i].nombre) {
            sumaTotal += alegria.value * productos[i].precio;
            cantidadProductos += parseInt(alegria.value, 10);
        } else if(frescura.name == productos[i].nombre) {
            sumaTotal += frescura.value * productos[i].precio;
            cantidadProductos += parseInt(frescura.value, 10);
        } 
    }

    for(let i = 0; i < empleados.length; i++) {
        if(empleados[i].nombre == "Juana") {
            empleados[i].productosVendidos = cantidadProductos;
            empleados[i].sumaTotal = sumaTotal;
        }
    }
}

function calcularPedro() {
    let aqua = document.getElementById("aqua2");
    let emocion = document.getElementById("emocion2");
    let alegria = document.getElementById("alegria2");
    let frescura = document.getElementById("frescura2");

    let sumaTotal = 0;
    let cantidadProductos = 0;

    for(let i = 0; i < productos.length; i++) {
        if(aqua.name == productos[i].nombre) {
            sumaTotal += aqua.value * productos[i].precio;
            cantidadProductos = parseInt(aqua.value, 10);
        } else if (emocion.name == productos[i].nombre) {
            sumaTotal += emocion.value * productos[i].precio;
            cantidadProductos += parseInt(emocion.value, 10);
        } else if(alegria.name == productos[i].nombre) {
            sumaTotal += alegria.value * productos[i].precio;
            cantidadProductos += parseInt(alegria.value, 10);
        } else if(frescura.name == productos[i].nombre) {
            sumaTotal += frescura.value * productos[i].precio;
            cantidadProductos += parseInt(frescura.value, 10);
        } 
    }

    for(let i = 0; i < empleados.length; i++) {
        if(empleados[i].nombre == "Pedro") {
            empleados[i].productosVendidos = cantidadProductos;
            empleados[i].sumaTotal = sumaTotal;
        }
    }
}