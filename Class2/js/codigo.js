class auto {
    constructor(marca,modelo,año,puertas){
        this.marca = marca; 
        this.modelo = modelo;
        this.año = año;
        this.puertas = puertas; 
    }

    acelerar(){
        console.log('acelerando');
    }
    subirVidrios(){
        console.log('subiendo vidrio');
    }
}

class autoGas extends auto{
    acelerar(){
     console.log('a gas');
    }
}

class autoNafta extends auto{
    acelerar(){
     console.log('a gasolina');
    }
}

class autoElectrico extends auto{
    acelerar(){
     console.log('a electricidad');
    }
}

let autoN = new autoNafta("maxus","t60","2021","4 puertas");
let autoE = new autoElectrico("tesla","osan","2021","5 puertas");