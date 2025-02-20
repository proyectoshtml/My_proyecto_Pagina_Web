document.addEventListener("DOMContentLoaded", function () {
    const preguntas = [
        {
            pregunta: "¿Qué es el Derecho Informático?",
            opciones: [
                "El uso de tecnología en los tribunales",  
                "La rama del derecho que regula los efectos jurídicos de la relación entre el derecho y las tecnologías de la información",
                "Un software de gestión para abogados"
            ],
            respuesta: 1
        },
        {
            pregunta: "¿Cuál es un principio del Derecho Informático?",
            opciones: ["Transparencia", "Monopolio", "Opacidad"],
            respuesta: 0
        },
        {
            pregunta: "¿Qué protege la ciberseguridad?",
            opciones: ["Sistemas y datos contra ataques", "Solo el hardware", "Únicamente la información gubernamental"],
            respuesta: 0
        }
    ];

    let indicePregunta = 0;
    let puntaje = 0;
    const contenedor = document.createElement("div");
    contenedor.id = "quiz-container";
    document.body.appendChild(contenedor);

    function mostrarPregunta() {
        contenedor.innerHTML = "";
        if (indicePregunta < preguntas.length) {
            let preguntaActual = preguntas[indicePregunta];
            let preguntaElemento = document.createElement("h3");
            preguntaElemento.textContent = preguntaActual.pregunta;
            contenedor.appendChild(preguntaElemento);
            
            preguntaActual.opciones.forEach((opcion, index) => {
                let boton = document.createElement("button");
                boton.textContent = opcion;
                boton.onclick = () => verificarRespuesta(index);
                contenedor.appendChild(boton);
            });
        } else {
            contenedor.innerHTML = `<h2>¡Gracias por jugar!</h2><p>Tu puntaje: ${puntaje}/${preguntas.length}</p>`;
        }
    }

    function verificarRespuesta(indiceSeleccionado) {
        if (indiceSeleccionado === preguntas[indicePregunta].respuesta) {
            puntaje++;
        }
        indicePregunta++;
        mostrarPregunta();
    }

    mostrarPregunta();
});
