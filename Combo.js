import Pizza from './Pizza.js';

class Combo extends Pizza{
    // constructor de la clase Combo
    constructor(combo,cantidad,tamaño,masa,ingredientes,bebida,postre){//mecanismo para crear objetos y que al crear objetos puede enviar parametros de entrada
        // constructor de la clase padre (clase base), clase de la cual se está heredando
        super(tamaño,masa,ingredientes);
        this.combo = combo;
        this.cantidad = cantidad
        this.tamaño = tamaño;
        this.bebida = bebida;
        this.postre = postre;
        this.ingredientes = ingredientes;
        this.masa = masa;

      }//fin del constructor de la clase

      elegirCombo(){
        this.preparar();
        this.hornear();
        this.empacar();
        console.log(`Pedido: Combo ${this.combo} - ${this.cantidad} - ${this.Pizza} - Pizza ${this.tamaño} - ${this.ingredientes} - ${this.bebida} - ${this.postre}`);

        
      }//fin de elegirCombo
}//fin de la clase Combo

const Pedido1 = new Combo("Personal",2,"Mediana","Masa Delgada",["Queso","Jamón","Champiñones"],"Coca-Cola","Tres Leches");
console.log(Pedido1.elegirCombo());
export default Combo;