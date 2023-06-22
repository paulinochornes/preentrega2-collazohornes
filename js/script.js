class Medicamento {
    constructor(SN, principioActivo, nombreComercial, dosis, presentacion, categoria) {
        this.sn = SN,
            this.pactivo = principioActivo,
            this.nombre = nombreComercial,
            this.dosis = dosis,
            this.presentacion = presentacion
        this.categoria = categoria
    }

    mostrarFarmaco() {
        console.log(`El fármaco seleccionado es ${this.nombre} su principio activo es ${this.pactivo}, su nombre comercial es ${this.nombreComercial} y su presentacion es ${this.dosis} x ${this.presentacion}. Este fármaco corresponde a un ${this.categoria}`)
    }
}

//Instanciación de objetos: 
const farmaco1 = new Medicamento(7752419, "Paracetamol", "Zolben", "500mg", "12 comprimidos", "Analgésico")

const farmaco2 = new Medicamento(7797462, "Dipirona", "Novemina", "500mg", "8 comprimidos", "Antipirético")

const farmaco3 = new Medicamento(7792033, "Diazepam", "Valium", "10mg", "30 comprimidos", "Anticombulsivo")

const farmaco4 = new Medicamento(7456512, "Clorfeniramina", "Kalitron", "4mg", "10 comprimidos", "antialrgico")

const farmaco5 = new Medicamento(7789510, "Ácido Acetílsalicilico", "Aspirina", "500mg", "10 compromidos", "Analgésico")

const farmaco6 = new Medicamento(7794519, "Esomeprazol ", "Esoprazol", "40mg", "30 comprimidos", "Antiácido")

//VADEMECUM
const vademecum = []
vademecum.push(farmaco1, farmaco2, farmaco3, farmaco4, farmaco5, farmaco6)
console.log(vademecum)

//AGREGAR FARMACOS AL VADEMECUM
function agregarFarmaco() {
    let barCode = parseInt(prompt("Ingrese el cdigo de barras"))
    let pactivoA = prompt("Ingrese el Principio Activo")
    let nombrecomercialI = prompt("Ingrese el Nombre Comercial")
    let dosisI = prompt("Ingrese la dosificación")
    let presentacionI = parseInt(prompt("Ingrese la presentacion del nuevo fármaco (en numeros)"))
    let categoria = prompt("Ingrese la categoría del nuevo fármaco")
    const nuevoFarmaco = new Medicamento(barCode, pactivoA, nombrecomercialI, dosisI, presentacionI, categoria)
    vademecum.push(nuevoFarmaco)
}

//MOSTRAR VADEMECUM
function verVademecum(vademecum) {
    console.log(`Nuestro vademecum es: `)
    for (let medicamento of vademecum) {
        console.log(medicamento.sn, medicamento.pactivo, medicamento.nombre, medicamento.dosis, medicamento.presentacion, medicamento.categoria)
    }
}

//BUSCAR POR PRINCIPIO ACTIVO

function buscarPorPrincipioActivo(vademecum) {
    let principioBuscado = prompt("Ingrese el principio activo que desea buscar")
    let busqueda = vademecum.find(
        (principioAbuscado) => principioAbuscado.pactivo.toUpperCase() === principioBuscado.toUpperCase()
    )
    if (busqueda == undefined) {
        console.log(`El principio Activo: ${principioBuscado} no está en nuestro Vademecum`)
    } else {
        console.log(busqueda)
    }
}

//BUSCAR POR NOMBRE COMERCIAL

function buscarPorNombreComercial(vademecum) {
    let nombreBuscado = prompt("Ingrese el principio activo que desea buscar")
    let busqueda = vademecum.find(
        (nombreCbuscado) => nombreCbuscado.nombre.toUpperCase() === nombreBuscado.toUpperCase()
    )
    if (busqueda == undefined) {
        console.log(`El nombre comercial: ${nombreBuscado} no está en nuestro Vademecum`)
    } else {
        console.log(busqueda)
    }
}


//FILTRAR POR NOMBRE O PRINCIPIO ACTIVO
function filtrarPrincipioNombre(vademecum) {
    let datoBusqueda = prompt("Ingrese el nombre o principio activo que desea buscar")
    let busqueda = vademecum.find(
        (dato) => dato.nombre.toLowerCase() == datoBusqueda.toLowerCase() || dato.pactivo.toLowerCase() == datoBusqueda.toLowerCase()
    )
    if (busqueda == undefined) {
        console.log(`El dato ${datoBusqueda} no está en nuestro Vademecum ni como Principio Activo ni como Nombre Comercial`)
    } else {
        console.log(busqueda)
    }
}

//FUNCTION ELIMINAR LIBRO: 
function eliminarFarmaco(vademecum) {
    verVademecum(vademecum)
    let eliminarSN = parseInt(prompt("Ingrese el código de barra del fármaco que desea eliminar"))
    let vademecumID = vademecum.map(medicamento => medicamento.id)
    console.log(vademecumID)
    let indice = vademecumID.indexOf(eliminarSN)
    console.log(indice)
    vademecum.splice(indice, 1)
    verVademecum(vademecum)

}
function menu() {

    let salirMenu = false

    do {
        let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
    1 - Agregar fármaco
    2 - Borrar fármaco
    3 - Consultar Vademecum
    4 - Buscar por Principio Activo
    5 - Buscar por Nombre Comercial
    0 - Salir del menu`))
        switch (opcionIngresada) {
            case 1:
                agregarFarmaco()

                break
            case 2:
                eliminarFarmaco(vademecum)
                break
            case 3:
                verVademecum(vademecum)
                break
            case 4:
                buscarPorPrincipioActivo(vademecum)
                break
            case 5:
                buscarPorNombreComercial(vademecum)
                break
            case 0:
                console.log(`Gracias por su preferencia, recuerda consultar a tu médico ante cualquier duda`)
                salirMenu = true
                break
            default:
                console.log("Opción no válida, ingrese alguna presente en el menu")
                break
        }
    } while (!salirMenu)
}
menu()