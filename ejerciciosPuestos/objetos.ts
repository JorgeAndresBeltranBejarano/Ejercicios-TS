interface Vehicle {
    model: string,
    color : string,
    year : number,
}

interface Motorcycle extends Vehicle {
    maxSpeed : number,
    kilometersTraveled : number,
    brand : string,
}

interface Car extends Vehicle{
    maxSpeed : number,
    kilometersTraveled : number,
    brand : string,
}
class moto implements Motorcycle{
    constructor(
        public model: string,
        public color : string,
        public year : number,
        public maxSpeed : number,
        public kilometersTraveled : number,
        public brand : string, 
    ){}
    imprimirDatos(){
        console.log(`carro = ${this.model} ${this.color} ${this.year} ${this.maxSpeed}km/h ${this.kilometersTraveled} ${this.brand}`);        
    }
}

class carro implements Car {
    constructor(
        public model: string,
        public color : string,
        public year : number,
        public maxSpeed : number,
        public kilometersTraveled : number,
        public brand : string, 
    ){}
    imprimirDatos(){
        console.log(`carro = ${this.model} ${this.color} ${this.year} ${this.maxSpeed}km/h ${this.kilometersTraveled} ${this.brand}`);        
    }
}


const Moto = new moto("Gixxer 150", "Negra", 2019, 120, 10000, "Suzuki");
const Carro  = new carro("Spark GT", "Verde", 2005, 200, 25000, "Chevrolet");


Moto.imprimirDatos()
Carro.imprimirDatos()



