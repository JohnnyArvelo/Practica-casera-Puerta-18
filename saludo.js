var Persona = /** @class */ (function () {
    function Persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    Persona.prototype.CualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    Persona.prototype.CualEsTuAnio = function () {
        return "Naciste en " + this.nacimiento;
    };
    ;
    Persona.prototype.CualEsTuEdad = function () {
        var edad = 2022 - this.nacimiento;
        return "Tienes unos " + edad + " Años.";
    };
    ;
    Persona.prototype.CualEsTuGeneracion = function () {
        if (this.nacimiento < 1975) {
            return "Eres un Baby Boomer";
        }
        ;
        if (this.nacimiento >= 1975 && this.nacimiento < 1999) {
            return "Eres un Milenial";
        }
        ;
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Eres un Centenial";
        }
        ;
        if (this.nacimiento >= 2010) {
            return "Eres de la Generacion Z";
        }
        ;
    };
    ;
    return Persona;
}());
;
//Datos para la Class 
var fede = new Persona(1982, "Federico Fernandez");
console.log(fede.CualEsTuNombre());
console.log(fede.CualEsTuAnio());
console.log(fede.CualEsTuEdad());
console.log(fede.CualEsTuGeneracion());
//Datos sobre mi nombre y fecha de nacimiento
var nombre = "johnny arvelo";
var nacimiento = 1999;
console.log("hola " + nombre + " desde typescript");
