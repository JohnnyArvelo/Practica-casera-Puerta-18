export class Persona{
    private nombre:string;
    private nacimiento:number;
    constructor (anioNacimiento:number, nombre:string){
        this.nacimiento=anioNacimiento;
        this.nombre=nombre;
    };

public CualEsTuNombre():string{
    return "Mi nombre es " + this.nombre.split(" ");
};

public CualEsTuAnio(){
    return "Naciste en " + this.nacimiento;
};

public CualEsTuEdad(){
    const edad:number= 2022 - this.nacimiento;
    return "Tienes unos " + edad + " Años.";
};

public CualEsTuGeneracion(){
    if (this.nacimiento < 1975 ){
        return "Eres un Baby Boomer";
    };

    if(this.nacimiento >= 1975 && this.nacimiento < 1999){
        return "Eres un Milenial";
    };

    if (this.nacimiento>= 1999 && this.nacimiento < 2010){
        return "Eres un Centenial";
    };

    if(this.nacimiento >=2010){
        return "Eres de la Generacion Z";
    };
};
};