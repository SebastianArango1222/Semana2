class Funciones {
    constructor(Primero, Segundo, Tercero, Cuarto) {
        this.Primero = Primero;
        this.Segundo = Segundo;
        this.Tercero = Tercero;
        this.Cuarto = Cuarto;
    }
    

    Función() {
        console.log(`Los estudiantes pueden:`);
        return this;
    } // fin Función

    Función2() {
        console.log(`Los administradores pueden:`);
        return this;
    } // fin Función2


}

// Crear los Objetos
console.log('<----------------Estudiantes---------------------->')
const usuarioEstudiante = new Funciones("Observar las propuestas de los candidatos", "Valorar dando like o dislike", "Ingresar/Registrarse(si no se ha hecho con anterioridad).");
console.log(usuarioEstudiante.Función());

console.log('<----------------Administradores----------------------<>')
const usuarioAdmin = new Funciones("Hacer seguimiento sobre la valoración de las personas con respecto a sus propuestas", "Actualizar sus historias publicando fotos y descripciones sobre lo que se ha hecho", "Publicar propuestas de los candidatos(teniendo en cuenta claro si son de contraloría o personería", "Ingresar/Registrarse(si no se ha hecho con anterioridad)");
console.log(usuarioAdmin.Función2());

console.log('<----------------Usuario común(Profesores, coordinador, rector)---------------------->')
const usuarioDefault= new Funciones("Observar las propuestas de los candidatos", "Valorar dando like o dislike", "Ingresar/Registrarse(si no se ha hecho con anterioridad)");
console.log(usuarioDefault.Función());
