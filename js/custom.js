//https://es.xhamster.com/videos/husband-hides-in-bedroom-films-wife-fucking-another-dude-pt1-8935912?_ga=2.178424227.640757612.1719881371-984263817.1719881371 13:20

const PRODUCTSLIST = [
    { code: 1000871, type:"liquids", description: 'Colágeno Marino 1000ml', sku: 'RSA-0020232-2022', price: 155.000, img:'../images/f6d1e112c801670734d98d3b849e1133_fill.jpg' },
    { code: 1000872, type:"liquids", description: 'Clorofila 1000ml', sku: 'RSA-003697-2017', price: 155.000, img:'../images/d2d2d59674b3e940184d8d9237857d5a_400x400_fill.jpg' },
    { code: 1000873, type:"liquids", description: 'SkillMax 800g', sku: 'RSA-005078-2017', price: 155.000, img:'../images/bfa070a778a7dda916100191267618ae_400x400_fill.png' },
    { code: 1000874, type:"liquids", description: 'Mega C-Brin 1000ml', sku: 'RSA-003872-2017', price: 155.000, img:'../images/7df01f64b070bbef4ad50f0aa3287a33_600x600_fill.jpg' },
    { code: 1000875, type:"liquids", description: 'Ultra C-Brin 800g', sku: 'RSA-005078-2017', price: 155.000, img:'../images/514806d885c0e27a9d1c49960bf68225_400x400_fill.jpg' },
    { code: 1000876, type:"liquids", description: 'Bilogin 1000ml', sku: 'RSA-003872-2017', price: 155.000, img:'../images/2b1473508e5a43017c960d8cbfe9fb64_400x400_fill.jpg' },
    { code: 1000877, type:"liquids", description: 'Guana Max 1000ml', sku: 'RSA-003872-2017', price: 155.000, img:'../images/3e5e911bcb7b6ceec6da7902eb6baded_400x400_fill.jpg' },
    { code: 1000878, type:"liquids", description: 'Limpia Plusss Licencia', sku: 'N.D.F.N No.629', price: 25.000, img:'../images/4d535d160ad2fe604e55a91d0cf72847_400x400_fill.jpg' },
    { code: 1000878, type:"liquids", description: 'LimpiaPlusss Licencia', sku: 'N.D.F.N No.629', price: 25.000, img:'../images/d59976e3e7049493cf03b53d7d284aeb_400x400_fill.jpg' },
    { code: 1000880, type:"liquids", description: 'Moringa 800g', sku: 'RSA-005078-2017', price: 155.000, img:'../images/7c078f1b2af54d0c3b6cd0b900fc9625_400x400_fill.jpg' },
    { code: 1000881, type:"liquids", description: 'Svel-fit 800g', sku: 'RSA-005078-2017', price: 155.000, img:'../images/5274b30a5cd1c0cea30ed40b0e401410_fill.jpg' },
    { code: 1000882, type:"liquids", description: 'Transfer_Plus 800g', sku: 'RSA-005078-2017', price: 155.000, img:'../images/25e366da06bd5a9fb36b3614348a3322_fill.jpg' },
    { code: 1000883, type:"liquids", description: 'Transfer_Plus 1000g', sku: 'RSA-005078-2017', price: 155.000, img:'../images/25e366da06bd5a9fb36b3614348a3322_fill.jpg' },
    { code: 1000884, type:"liquids", description: 'Took-protein 1500g', sku: 'RSA-005078-2017', price: 170.000, img:'../images/db458077818470a0cc359f2788422b5b_fill.jpg' },
    { code: 1000885, type:"liquids", description: 'Colágeno 800g', sku: 'RSA-005078-2017', price: 155.000, img:'../images/eda7b19b247d44e1ec13cb28ad67b15c_fill.jpg' },
    { code: 1000886, type:"liquids", description: 'Ganoderma 1000ml', sku: 'RSAD13I913315', price: 155.000, img:'../images/83a59fb87a41280865b5ec9f5f73f4e3_fill.jpg' },
    { code: 1000887, type:"liquids", description: 'Colageno 1000ml', sku: 'RSA-004697-2017', price: 155.000, img:'../images/c00a398d90328894b54eec3b226bccce_fill.jpg' },
    { code: 1000888, type:"liquids", description: 'Energy Kids 1000g', sku: 'RSA-005078-2017', price: 155.000, img:'../images/8dbfc8c50250b3cc7cd9e30e5b384979_fill.jpg' },
    { code: 1000889, type:"liquids", description: 'Prost-max 1000ml', sku: 'RSA-003697-2017', price: 155.000, img:'../images/e6988c0c3a6908ffee308942fa75e20a_fill.jpg' },
    { code: 1000889, type:"liquids", description: 'Fibra Líquida 1000ml', sku: 'RSA-003697-2017', price: 155.000, img:'../images/8bea2e56ffc19160ae6c25aae88852d3_fill.jpg' },
    { code: 1000890, type:"liquids", description: 'Calcimax 1000ml', sku: 'RSAD15I31614', price: 155.000, img:'../images/1946ab336762305f29e27bc5d7e0160d_fill.png' },
]


// to get current year
function getYear() {
    const currentDate = new Date();
    document.querySelector("#displayYear").innerHTML = currentDate.getFullYear().toString();
}

getYear();

/** google_map js **/

let latitude;
let longitude;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGoogleLocation, GeolocationError);
    } else {
        alert('La geolocalización no es soportada por este navegador.');
    }
}

function showGoogleLocation(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    const location = { lat: latitude, lng: longitude };

    const map = new google.maps.Map(document.getElementById('googleMap'), {
        center: location,
        zoom: 15 // Puedes ajustar el nivel de zoom según tu preferencia
    });
    new google.maps.Marker({
        position: location,
        map: map
    });
}

function GeolocationError(error) {
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
        case error.unknown:
            alert('Ocurrió un error desconocido al obtener la ubicación.');
            break;
    }
}

if (latitude && longitude) {
    getLocation();
}

//init logic cart

let cartCounter = 0;
const cartCounterElement = document.getElementById('cartCounter');

const cartInfo = JSON.parse(localStorage.getItem('items'));
if  (!!cartInfo) {
    cartCounter = cartInfo.length;
    cartCounterElement.textContent = cartCounter
} else {
    cartCounter = 0
}

function showCar() {
    let basePath = window.location.pathname
    let path = basePath.substring(basePath.lastIndexOf('/'));
    if (path === "/index.html") {
        window.location.href = "pages/cart-details.html"
        renderPagination();
    } else {
        window.location.href = "cart-details.html"
    }

    //cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
}

function addToCar(productId) {
    cartCounter++;
    const {code: id, description, price} = PRODUCTSLIST.find((p) => p.code === productId)
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
//end logic cart

//init logic to load cart details
const labelTotalPrice = document.getElementById('totalPrice');
const tabla = document.getElementById('table');
const tbody = document.getElementById('tbody');
let totalPrice = 0;
let paginationQuantity = 3;
let currentPage = 1;

/*
function rendererProductsTable(page) {
    if (localStorage.getItem('items') !== null) {
        const cartInfo = JSON.parse(localStorage.getItem('items'));
        const start = (page - 1) * paginationQuantity;
        const end = start + paginationQuantity;
        cartInfo.forEach(data => {
            totalPrice += data.price;
            const fila = document.createElement('tr');

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
                localStorage.setItem('items', JSON.stringify(cartInfo.filter((prod) => prod.id !== data.id)));
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
        renderPagination();
    }
//end logic to load cart details
}
*/


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
        sendWhatsAppMessage();
        /*if (JSON.parse(localStorage.getItem('items')) !== null) {
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
        }*/
    }
}

function sendWhatsAppMessage() {
    const cartInfo = JSON.parse(localStorage.getItem('items'));
    let productsText = "Hola quiero informacion para esta lista de Productos:\n";
    cartInfo.forEach(data => {
        productsText += data.description + "\n";
        productsText += data.price + "\n";
    });

    const phoneNumber = "+573219146901"; // Reemplaza con el número de teléfono destino
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(productsText)}`;

    window.open(whatsappUrl, '_blank');
}

function renderPagination() {
    const products = JSON.parse(localStorage.getItem('items'));
    const totalPage = Math.ceil(products.length / paginationQuantity);
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    for (let i = 1; i <= totalPage; i++) {
        const boton = document.createElement('button');
        boton.innerText = i.toString();
        if (i === currentPage) {
            boton.classList.add('active');
        }
        boton.addEventListener('click', () => {
            currentPage = i;
            //rendererProductsTable(currentPage);
        });
        paginationDiv.appendChild(boton);
    }
}

function rendererProducts(basePath) {
    let path = basePath.substring(basePath.lastIndexOf('/'));
    console.log(path);
    if (path === "/products.html") {
        let rowsStart = 0;
        let rowsEnd = 3;
        for (const product of PRODUCTSLIST) {
            if (rowsStart === 0 && rowsEnd === 3) {
                const rowProducts = PRODUCTSLIST.slice(rowsStart, rowsEnd);
                loadProductsRow(rowProducts);
            }
            rowsStart = rowsStart +1;

            if (rowsStart === rowsEnd) {
                rowsEnd = rowsEnd + 3;
                const rowProducts = PRODUCTSLIST.slice(rowsStart, rowsEnd);
                loadProductsRow(rowProducts);
            }
        }
    }
    if (path === "/products-puntos-venta.html") {
        loadProductsRow(PRODUCTSLIST.filter((prod) => prod.type === "liquids"));
    }
    if (path === "/products-cameras.html") {
        loadProductsRow(PRODUCTSLIST.filter((prod) => prod.type === "liquids"));
    }
    if (path === "/products-security.html") {
        loadProductsRow(PRODUCTSLIST.filter((prod) => prod.type === "liquids"));
    }
    if (path === "/purgants.html") {
        loadProductsRow(PRODUCTSLIST.filter((prod) => prod.type === "liquids"));
    }
}

function loadProductsRow(products) {
    const tbodyProducts = document.getElementById('tbody-products');
    const tr = document.createElement('tr');
    const divRow = document.createElement('div');
    divRow.className = 'row';
    for (const product of products) {
        const td = document.createElement('td');
        const divCol = document.createElement('div');
        const divBox = document.createElement('div');
        const divImg = document.createElement('div');
        const img = document.createElement('img');
        const divDetailBox = document.createElement('div');
        const h5 = document.createElement('h5');
        const p = document.createElement('p');
        const divBtn = document.createElement('div');
        const btn = document.createElement('button');
        const b = document.createElement('b');


        divCol.className = "col-md-6 col-lg-4";
        divBox.className = "box";
        divImg.className = "img-box";
        img.src = product.img;
        divDetailBox.className = "detail-box";
        divBtn.className = "btn-box";
        btn.className = "btn-dark";

        btn.addEventListener('click', () => {addToCar(product.code)});
        h5.innerText = product.description;
        b.innerText = "$"+ product.price + ".000";
        btn.innerText = "Agregar al carro";

        divDetailBox.appendChild(h5);
        p.appendChild(b);
        divDetailBox.appendChild(p);
        divDetailBox.appendChild(divBtn);
        divImg.appendChild(img);
        divBtn.appendChild(btn);
        divBox.appendChild(divImg);
        divBox.appendChild(divDetailBox);
        divCol.appendChild(divBox);
        divRow.appendChild(divCol);

        td.appendChild(divRow);
        tr.appendChild(td);
    }
    tbodyProducts.appendChild(tr);
}

function rendererCarDetails(basePath) {
    let path = basePath.substring(basePath.lastIndexOf('/'));
    if (path === "/cart-details.html") {
        const cartInfo = JSON.parse(localStorage.getItem('items'));
        cartInfo.forEach(data => {
            totalPrice += data.price;
            const fila = document.createElement('tr');

            const id = document.createElement('td');
            id.textContent = data.id;

            const description = document.createElement('td');
            description.textContent = data.description;

            const price = document.createElement('td');
            price.textContent = data.price + ".000";

            const totalByProduct = document.createElement('td');
            totalByProduct.textContent = data.price + ".000";

            const deleteProductButton = document.createElement('button');
            deleteProductButton.textContent = 'Eliminar';
            deleteProductButton.name = 'cartDeleteProduct';
            deleteProductButton.addEventListener('click', function (event) {
                event.preventDefault();
                try {
                    const items = cartInfo.filter((prod) => prod.id !== data.id);
                    console.log(JSON.stringify(items));
                    localStorage.setItem('items', JSON.stringify(items));
                    window.location.reload();
                } catch (error) {
                    console.log(error)
                }

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
        labelTotalPrice.textContent = totalPrice + ".000";
    }
}

rendererProducts(window.location.pathname);
rendererCarDetails(window.location.pathname);
