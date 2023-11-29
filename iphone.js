function showBuySuccessMessage(productName) {
    // Crear un elemento de ventana emergente
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = "¡Producto comprado con éxito!<br>Producto: " + productName;

    // Agregar el elemento al cuerpo del documento
    document.body.appendChild(popup);

    // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
    setTimeout(function () {
        // Quitar el elemento de la ventana emergente del cuerpo del documento
        document.body.removeChild(popup);
    }, 3000);
}
