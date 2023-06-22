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
function verVademecum(array) {
    console.log(`Nuestro vademecum es: `)
    for (let medicamento of array) {
        console.log(medicamento.sn, medicamento.pactivo, medicamento.nombre, medicamento.dosis, medicamento.presentacion, medicamento.categoria)
    }
}

//BUSCAR POR PRINCIPIO ACTIVO

function buscarPorPrincipioActivo(array) {
    let principioBuscado = prompt("Ingrese el principio activo que desea buscar")
    let busqueda = array.find(
        (principioAbuscado) => principioAbuscado.pactivo.toUpperCase() === principioBuscado.toUpperCase()
    )
    //condicional para que al usuario no le aparezca undefined por consola, pasamos msj más prolijo
    if (busqueda == undefined) {
        console.log(`El principio Activo: ${principioBuscado} no está en nuestro Vademecum`)
    } else {
        console.log(busqueda)
    }
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