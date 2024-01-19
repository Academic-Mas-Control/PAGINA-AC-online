       // Cargar el archivo JSON
       fetch("news-json/news7.json")
       .then(response => response.json())
       .then(data => {
           // Actualizar el contenido en el HTML
           document.getElementById("imgfluid").src = data.img;
           document.getElementById("editor").textContent = data.editor;

           const titleElement = document.getElementById("title");
           titleElement.innerHTML = data.title; // Use innerHTML to render HTML within the title

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
               textoElement.innerHTML = seccion.texto;

               const texto1Element = document.createElement("p");
               texto1Element.textContent = seccion.texto1;
               texto1Element.classList.add("display-3"); // Agrega la clase "display-4"
               texto1Element.style.marginBottom = "5px"; // Agrega estilo margin-bottom: 5px

               const texto2Element = document.createElement("p");
               texto2Element.textContent = seccion.texto2;
               texto2Element.classList.add("display-4"); // Agrega la clase "display-4"

               const puntosElement = document.createElement("ul");

               seccion.puntos.forEach(punto => {
                   const puntoElement = document.createElement("li");
                   puntoElement.innerHTML = punto;
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

           // Aquí dentro puedes acceder a data.content2 y realizar las operaciones que necesites.
           const content2 = document.getElementById("content2");
           data.content2.forEach(parrafo => {
               const parrafoElement = document.createElement("p");
               parrafoElement.textContent = parrafo;
               content2.appendChild(parrafoElement);
           });
       });