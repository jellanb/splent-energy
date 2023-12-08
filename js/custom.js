// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/
function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarMapa, errorEnGeolocalizacion);
    } else {
        alert('La geolocalización no es soportada por este navegador.');
    }
}

function mostrarMapa(posicion) {
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;

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

obtenerUbicacion();