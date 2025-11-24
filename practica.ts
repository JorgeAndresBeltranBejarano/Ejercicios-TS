
interface vehicle {
    brand : string;
    maxSpeed : number
}

interface motorCycle extends vehicle{
    model : string;
    Year : number;
}


class moto implements motorCycle{
    constructor(
        public brand : string,
        public maxSpeed : number,
        public model : string,
        public Year : number,
    ){}
}

let Moto = new moto("yamaha",150,"fz",2020); 
console.log(Moto);
