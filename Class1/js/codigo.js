class Libros{
    constructor(nombreLibro, autor, editorial, genero){
    this.nombreLibro = nombreLibro;
    this.autor = autor;
    this.editorial = editorial;
    this.genero = genero;
    }

    mostrarLibro() {
        return this.nombreLibro, this.autor, this.editorial, this.genero;
    }
}

const lib1 = new Libros('don quijote','cuando que','hola','comedia');
const lib2 = new Libros('sherlock holmes','artur conal doile','hola','comedia');
const lib3 = new Libros('la prision de black rock','cuando que','hola','comedia');
const lib4 = new Libros('comedia negra','cuando que','hola','comedia');
const lib5 = new Libros('don quijote','cuando que','hola','comedia');

console.log(lib1.mostrarLibro());
console.log(lib2.mostrarLibro());
console.log(lib3.mostrarLibro());
console.log(lib4.mostrarLibro());
console.log(lib5.mostrarLibro());

const libr = [lib1,lib2,lib3,lib4,lib5];

function filtraporautor(libros, nombre_autor){

        return libr == nombre_autor;
}
console.log(filtraporautor('cuando que'))