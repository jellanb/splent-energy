// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

var latitud = undefined;
var longitud = undefined;
function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarMapa, errorEnGeolocalizacion);
    } else {
        alert('La geolocalización no es soportada por este navegador.');
    }
}

function mostrarMapa(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    const ubicacion = { lat: latitud, lng: longitud };

    const mapa = new google.maps.Map(document.getElementById('googleMap'), {
        center: ubicacion,
        zoom: 15 // Puedes ajustar el nivel de zoom según tu preferencia
    });

    const marcador = new google.maps.Marker({
        position: ubicacion,
        map: mapa
    });
}

function errorEnGeolocalizacion(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Se denegó la solicitud de geolocalización.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('La información de ubicación no está disponible.');
            break;
        case error.TIMEOUT:
            alert('Se agotó el tiempo para obtener la ubicación.');
            break;
        case error.UNKNOWN_ERROR:
            alert('Ocurrió un error desconocido al obtener la ubicación.');
            break;
    }
}




if (latitud && longitud) {
    obtenerUbicacion();
}

//init logic cart

let cartCounter;
const cartContent = document.getElementById('cartContent');
const cartCounterElement = document.getElementById('cartCounter');

const cartInfo = JSON.parse(localStorage.getItem('items'));
console.log(cartInfo)
if  (cartInfo !== null) {
    const cartInfo = JSON.parse(localStorage.getItem('items'));
    cartCounter = cartInfo.length;
    cartCounterElement.textContent = cartCounter
} else {
    cartCounter = 0
}

function mostrarCarrito() {
    let basePath = window.location.pathname
    let path = basePath.substring(basePath.lastIndexOf('/'));
    if (path === "/index.html") {
        window.location.href = "pages/cart-details.html"
    } else {
        window.location.href = "cart-details.html"
    }

    //cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
}

function agregarAlCarrito(productId) {
    cartCounter++;
    const {id, description, price} = getProductInformationById(productId)
    const productInfo = {cartCounter: cartCounter, id, description, price};
    const item = [];
    if (JSON.parse(localStorage.getItem('items')) !== null) {
        console.log(localStorage.getItem('items'))
        const cartInfo = JSON.parse(localStorage.getItem('items'));
        cartInfo.forEach((product) => {
            item.push(product);
        });
        item.push(productInfo);
        console.log(item);
        localStorage.setItem('items', JSON.stringify(item));
    } else {
        item.push(productInfo)
        localStorage.setItem('items', JSON.stringify(item));
    }

    cartCounterElement.textContent = cartCounter;
    // Aquí podrías agregar lógica para añadir elementos al carrito

    const notification = document.getElementById('cartNotification');
    notification.style.display = 'block';

// Ocultar la notificación después de un tiempo
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Ocultar después de 3 segundos (3000 milisegundos)
}

function getProductInformationById(productId) {
    if (productId === 1000871) {
        return {
            id: 1000871,
            description: 'Impresora 80 mm',
            price: 35000,
        }
    }
    if (productId === 1000872) {
        return {
            id: 1000872,
            description: 'Kit accesorios 58 mm',
            price: 110000,
        }
    }
    if (productId === 1000873) {
        return {
            id: 1000873,
            description: 'Kit accesorios 80 mm',
            price: 110000,
        }
    }
    if (productId === 1000874) {
        return {
            id: 1000874,
            description: 'Kit punto de venta básico',
            price: 260000,
        }
    }
    if (productId === 1000875) {
        return {
            id: 1000875,
            description: 'Kit punto de venta mejorado',
            price: 280000,
        }
    }
    if (productId === 1000876) {
        return {
            id: 1000876,
            description: 'Kit punto de venta full',
            price: 310000,
        }
    }
    if (productId === 1000877) {
        return {
            id: 1000877,
            description: 'Kit 4 camaras + DRV + elementos de instalación',
            price: 210000,
        }
    }
    if (productId === 1000878) {
        return {
            id: 1000878,
            description: 'Kit 8 camaras + DRV + elementos de instalación',
            price: 310000,
        }
    }
    if (productId === 1000879) {
        return {
            id: 1000879,
            description: 'Kit 4 camarás + AP + elementos de instalación',
            price: 353000,
        }
    }
    if (productId === 1000880) {
        return {
            id: 1000880,
            description: 'Sistema de alarma de seguridad para el hogar o negocio.',
            price: 260000,
        }
    }
}
//end logic cart

//init logic to load cart details
const labelTotalPrice = document.getElementById('totalPrice');
const tabla = document.getElementById('table');
const tbody = document.getElementById('tbody');
let totalPrice = 0;

if (localStorage.getItem('items') !== null) {
    const cartInfo = JSON.parse(localStorage.getItem('items'));
    cartInfo.forEach(data => {
        console.log(data)
        totalPrice += data.price;
        const fila = document.createElement('tr'); // Crear una fila

        // Crear celdas y asignarles los valores de los datos
        const id = document.createElement('td');
        id.textContent = data.id;

        const description = document.createElement('td');
        description.textContent = data.description;

        const price = document.createElement('td');
        price.textContent = data.price;

        const totalByProduct = document.createElement('td');
        totalByProduct.textContent = data.price;

        const deleteProductButton = document.createElement('button');
        deleteProductButton.textContent = 'Eliminar';
        deleteProductButton.name = 'cartDeleteProduct';
        deleteProductButton.addEventListener('click', function (event) {
            localStorage.setItem('items', JSON.stringify(cartInfo.filter((prod) => prod.id != id.textContent)));
            window.location.reload();
        });

        // Agregar las celdas a la fila
        fila.appendChild(id);
        fila.appendChild(description);
        fila.appendChild(price);
        fila.appendChild(totalByProduct);
        fila.appendChild(deleteProductButton)

        // Agregar la fila al tbody de la tabla
        tbody.appendChild(fila);
    });
    tabla.appendChild(tbody);
    labelTotalPrice.textContent = totalPrice;
}
//end logic to load cart details

//init logic to valid al field in cart details
function formValidation() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('apellido').value;
    const direction = document.getElementById('direccion').value;
    const email = document.getElementById('correo').value;
    const phoneNumber = document.getElementById('telefono').value;

    // Validar si los campos están vacíos
    if (
        nombre.trim() === '' ||
        correo.trim() === '' ||
        direction.trim() === '' ||
        email.trim() === '' ||
        phoneNumber.trim() === ''
    ) {
        alert('Por favor, completa todos los campos.');
        return false; // Evita que se envíe el formulario
    }

    // Puedes agregar otras validaciones según tus requisitos, como validar el formato del correo, etc.

    return true; // Permite enviar el formulario si la validación pasa
}
//end logic to valid al field in cart details

function handleClearCart() {
    localStorage.setItem('items', null);
    cartCounter = 0;
    window.location = 'cart-details.html'
}

function handlePayCart() {
    if (formValidation()) {
        if (JSON.parse(localStorage.getItem('items')) !== null) {
            const cartInfo = JSON.parse(localStorage.getItem('items'));
            let mensaje = "Hola Asistente virtual de KPC Tech solution, estoy interesado en los productos"
            cartInfo.forEach((product) => {
                mensaje.concat(",", product.description, "de precio", product.price)
            });
            let telefono = "939528646"; // Número de teléfono al que quieres enviar el mensaje
            let mensajeCodificado = encodeURIComponent(mensaje);
            let url = "https://wa.me/" + telefono + "?text=" + mensajeCodificado;
            window.location.href = url;
        } else {
           console.log("Carro vacio")
        }
    }
}