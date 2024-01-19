// Cargar el archivo JSON
fetch("../news/news-json/news1.json")
.then(response => response.json())
.then(data => {
    // Actualizar el contenido en el HTML
    document.getElementById("imgfluid").src = data.img;
    document.getElementById("editor").textContent = data.editor;

    const titleElement = document.getElementById("title");
    titleElement.textContent = data.title;

    document.getElementById("fecha").textContent = data.fecha;

    const content = document.getElementById("content");

    data.content.forEach(parrafo => {
        const parrafoElement = document.createElement("p");
        parrafoElement.textContent = parrafo;
        content.appendChild(parrafoElement);
    });

    const seccionesContainer = document.getElementById("secciones");

    data.secciones.forEach(seccion => {
        const seccionElement = document.createElement("div");
        seccionElement.classList.add("seccion");

        const subtituloElement = document.createElement("h3");
        subtituloElement.textContent = seccion.subtitulo;

        const textoElement = document.createElement("p");
        textoElement.textContent = seccion.texto

        const texto1Element = document.createElement("display-3");
        texto1Element.textContent = seccion.texto1;

        const texto2Element = document.createElement("display-4");
        texto2Element.textContent = seccion.texto2;

        const puntosElement = document.createElement("ul");

        seccion.puntos.forEach(punto => {
            const puntoElement = document.createElement("li");
            puntoElement.textContent = punto;
            puntosElement.appendChild(puntoElement);
        });

        const contettituloElement = document.createElement("a");
        contettituloElement.href = seccion.contettitulo;

        seccionElement.appendChild(subtituloElement);
        seccionElement.appendChild(textoElement);
        seccionElement.appendChild(puntosElement);
        seccionElement.appendChild(texto1Element);
        seccionElement.appendChild(texto2Element);
        seccionElement.appendChild(contettituloElement);
        seccionesContainer.appendChild(seccionElement);
    });
});