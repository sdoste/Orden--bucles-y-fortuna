function multiplicar(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    if (number2 > number1){
       //mientras número 1 sea menor que el 2
        while (number1 <= number2){
            //tabla de multiplicar 1-10
            for (i=1; i<11; i++){
                document.write(number1 + " x " + i + " = " + (number1*i) + "<br>");
            }
            //suma+1 a number1 para pasar al siguiente número
            number1++;
            document.write("<br>");
        }
    } else {
        alert("El Número 2 debe ser mayor que el Número 1");
    }
}


function arrays(){
    const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];

    const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];

    // Imprime en consola o pantalla:
    
    //El número 26, 
    document.write(medidas[2][2][1] + "<br>");

    // el numero 134
    document.write(medidas[0][1] + "<br>");

    //el numero 92
    document.write(medidas[2][3] + "<br>");

    // - El nombre "Rosa"
    document.write(nombres[2][1] + "<br>");

    // el nombre "Roberto"
    document.write(nombres[1][2] + "<br>");

    // - Todos los nombres de mascotas, 
    //a) en una línea
    document.write(nombres[0] + "<br>");
    
    //y b) en diferentes líneas
    nombres[0].forEach(function(nombre) { document.write(nombre + "<br>" ) });
    
}

function galleta(){
    const estudiantes = ["Albert", "David", "Carla", "Laia", "Ferdi", "Francisco", "Herman", "Walid", "Rifi", "Juan Carlos", "Sergio"];
    const mensajes = [
        "El éxito llegará cuando menos lo esperes.",
        "No temas a los cambios, abrázalos con valentía.",
        "Tu creatividad te llevará lejos en la vida.",
        "Pronto recibirás buenas noticias.",
        "La perseverancia es la clave del éxito.",
        "La suerte está de tu lado.",
        "Hoy es un buen día para hacer nuevos amigos.",
        "La paciencia es una virtud que te llevará lejos.",
        "Recuerda siempre confiar en ti mismo.",
        "El viaje de mil millas comienza con un solo paso.",
        "Tu generosidad será recompensada en el futuro.",
        "No temas cometer errores, son oportunidades de aprendizaje.",
        "La vida está llena de sorpresas agradables.",
        "Haz de la felicidad tu prioridad.",
        "Tu bondad inspirará a otros a ser mejores.",
        "El éxito llega a aquellos que trabajan duro y nunca se rinden.",
        "Una sonrisa puede abrir muchas puertas.",
        "Sé agradecido por las pequeñas cosas de la vida.",
        "Los obstáculos son solo oportunidades disfrazadas.",
        "La sabiduría es más valiosa que el oro.",
        "Practica la gratitud diariamente.",
        "Sigue tus sueños con determinación.",
        "La sinceridad es el mejor regalo que puedes ofrecer.",
        "Confía en tu intuición para tomar decisiones importantes.",
        "Nunca es tarde para aprender algo nuevo.",
        "La vida está llena de posibilidades infinitas.",
        "Haz del amor tu mayor prioridad.",
        "La amistad es un tesoro invaluable.",
        "El tiempo bien invertido nunca se desperdicia.",
        "Sé amable contigo mismo y con los demás.",
        "La alegría está en las pequeñas cosas de la vida.",
        "El optimismo te llevará lejos.",
        "La felicidad está en el camino, no en la meta.",
        "No hay nada que no puedas lograr con esfuerzo y determinación.",
        "La perseverancia es la llave del éxito.",
        "Tu dedicación dará frutos en el momento adecuado."
      ];
      let randomGalleta = Math.floor(Math.random() * mensajes.length);
      let randomEstudiante = Math.floor(Math.random() * estudiantes.length);

      alert("Vaticinio para " + estudiantes[randomEstudiante] + ": " + mensajes[randomGalleta] );
}
