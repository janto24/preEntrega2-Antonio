// Si bien el proyecto bosquejado en la entrega Nº1 no tiene vinculación con el presente,
// éste es a los fines de dar cumplimiento con los requerimiento de la preEntrega
// Con el avance de las clases y/o conocimiento evaluaré la posibilidad de retomar la idea original.

const bufandas = [{
  id: "b0001",
  producto: "Boca",
  precio: 1200,
  descripcion:"bufandaBocaDM",
  descuento: false
},
{
  id: "b0002",
  producto:"Boca",
  precio: 800,
  descripcion: "bufandaBocaC2021",
  descuento: true
}, 
{
  id:"b0003",
  producto: "Boca",
  precio: 1500,
  descripcion:"bufandaXeneise",
  descuento: false
},
{
  id: "r0001",
  producto:"River",
  precio: 1500,
  descripcion:"bufandaRiverMadrid",
  descuento: false
},
{
  id: "r0002",
  producto: "River",
  precio: 1200,
  descripcion:"bufandaRiverGallardo",
  descuento: true
}, 
{
  id: "r0003",
  producto: "River",
  precio: 1000,
  descripcion:"bufandaRiverCampeon",
  descuento: false
}, 
{
  id: "e0001",
  producto: "Pincha",
  precio: 1500,
  descripcion: "bufandaPinchaLibertadores",
  descuento: false
},
{
  id: "e0002",
  producto: "Pincha",
  precio: 1100,
  descripcion: "bufandaPinchaSabella",
  descuento: false,
},
{
  id: "e0003",
  producto: "Pincha",
  precio: 900,
  descripcion: "bunfandaPincha7a0",
  descuento: true,
},
{
  id: "rac0001",
  producto:"Racing",
  precio: 1300,
  descripcion: "bufandaRacingCampeon",
  descuento: false
},
{
  id: "rac0002",
  producto: "Racing",
  precio: 900,
  descripcion: "Racing",
  descuento: false
},
{
  id: "rac0003",
  producto: "Racing",
  precio: 1300,
  descripcion:"bufandaRacingP",
  descuento: false
},
{
  id:"arg0001",
  producto:"Argentinos",
  precio:600,
  descripcion:"bufandaArgentinosDM",
  descuento: false
},
{
  id: "hu0001",
  producto: "Huracan",
  precio: 1000,
  descripcion:"bufandaHuracan",
  descuento: false
},
{
  id: "ind0001",
  producto: "Independiente",
  precio: 1100,
  descripcion: "bufandaIndependiente",
  descuento: true
}
]


// Funciones
const aplicaDesc = (a) => {
  a.forEach(function(elemento) {
    if (elemento.descuento === true) {
       elemento.precio = elemento.precio *0.95
    } 
   }); return a
}

const soloDesc = (a) => {
  let b = aplicaDesc(a)
  let c = b.filter(elemento => elemento.descuento === true)
  return c
}

const abc = (a, b) => {
  if (a.producto < b.producto) {return -1;}
  if (a.producto > b.producto) {return 1;}
  return 0;
}

const primeraLetraMayuscula = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const stock = (a) => {
  let stockEquipos = []
  a.forEach (function(elemento) {
    stockEquipos.push(elemento.producto)
  }); return stockEquipos
}

const listaStockFinal = (a) => {
  let lista = stock(a)
  return new Set(lista)
}

// Variables y copias arrays
const copiaBufandas = bufandas.slice();

const productosOrdenados = copiaBufandas.sort(abc)

let busquedaEquipo = prompt("Ingrese un equipo")

let resultadoBusueda = copiaBufandas.filter(elemento => elemento.producto === (primeraLetraMayuscula(busquedaEquipo)))

let consultaDisplay = window.confirm("Desea ver sólo los productos con descuentos del 5%?")
stock(copiaBufandas)

// ejecuciones en consola
if (consultaDisplay === true)  {
  console.log("Los siguientes productos tienen un descuento del 5%:")
  console.table(soloDesc(productosOrdenados))
} else {
  console.log("A continuación se muestran todos los productos en stock:")
  console.table(productosOrdenados)
}

if (resultadoBusueda.length > 0) {
  console.log(`Su búsqueda arrojó ${resultadoBusueda.length} resultado/s:`)
  console.table(resultadoBusueda)
} else {
  console.log(`No contamos con stock de ${busquedaEquipo}`)
  console.log("Actualmente contamos con productos de los siguientes equipos:")
  console.log(listaStockFinal(copiaBufandas))
}
