document.addEventListener("DOMContentLoaded", () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: "coca de vidrio",
            precio: 30,
            imagen: "coca.jpg"
        }, {
            id: 2,
            nombre: "cerveza victoria",
            precio: 20,
            imagen: "cerveza.jpg"
        }, {
            id: 3,
            nombre: "agua",
            precio: 8,
            imagen: "agua.jpg"
        }, {
            id: 4,
            nombre: "pinguinos",
            precio: 40,
            imagen: "pinguinos.jpg"
        }
    ]
    let carrito = []
    const divisa = "$"
    const DOMitems = document.querySelector("#items")
    const DOMcarrito = document.querySelector("#carrito")
    const DOMtotal = document.querySelector("#Total")

    //funcionalidad

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {


            const miNodo = document.createElement("div")
            miNodo.classList.add("card", "col-sm-4")

            const miNodoCardBody = document.createElement("div")
            miNodoCardBody.classList.add("card-body")

            const miNodoTitle = document.createElement("h5")
            miNodoTitle.classList.add("card-title")
            miNodoTitle.textContent = info.nombre

            const miNodoImagen = document.createElement("img")
            miNodoImagen.classList.add("card-img-top")
            miNodoImagen.setAttribute("src", info.imagen)

            const miNodoPrecio = document.createElement("p")
            miNodoPrecio.classList.add("card-text")

            const miNodoBoton = document.createElement("button")
            miNodoBoton.classList.add("btn", "btn-primary")
            miNodoBoton.textContent = "+"
            miNodoBoton.setAttribute("marcador", info.id)
            miNodoBoton.addEventListener("click", anadirProductosAlCarrito)

          //vamos a juntar todos los elementos creados
            miNodo.appendChild(miNodoImagen)
            miNodoCardBody.appendChild(miNodoTitle)
            miNodoCardBody.appendChild(miNodoPrecio)
            miNodoCardBody.appendChild(miNodoBoton)
            miNodoCardBody.appendChild(miNodoCardBody)

            DOMitems.appendChild(miNodo)

        })
    }
    //funicionalidades
    function renderizarProductos() {

    }
    function renderizarCarrito() {
        //limpiar carrito
        DOMcarrito.textContent = ""
        //creamos un carrito sin duplicados
        const carritoSinDuplicados = [...new Set(carrito)]
        carritoSinDuplicados.forEach((item) => {
        console.log (item)
            const miItem = baseDeDatos.filter((itemBaseDeDatos) => {
                return itemBaseDeDatos.id === parseInt(item) //conventirmos item en numero entero

            })
            //contar los elementos o numero de unidades por producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total

            }, 0)

            //creamos el nodo del item para el carrito
            const miNodo = document.createElement("li")
            console.log(miItem)
            miNodo.classList.add("list-group-item", "text-right", "mx-2")
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem [0].nombre} -> ${miItem [0].precio} ${divisa}`
            //agregamos boton para eliminar item del carrito
            DOMcarrito.appendChild(miNodo)
        })
            DOMtotal.textContent = calcularTotal()
    }

    function anadirProductosAlCarrito(evento) {
        //agregamos al carrito el marcador del elemento selecionado
            carrito.push(evento.target.getAtribute("marcador"))
            renderizarCarrito()
    }
    function calcularTotal () {
      return carrito.reduce( (total, item) => {
        const miItem = baseDeDatos.filter((productoDeLaBaseDeDatos) => {
            return item === productoDeLaBaseDeDatos.id
        } )
            return total + miItem (0).precio
    }, 0)


    renderizarProductos()
    renderizarCarrito ()



}) 