
// quitamos export default
 class  Pizza{
constructor(masa,tamano,ingredientes){
this.masa=masa;
this.tamano=tamano;
this.ingredientes= ingredientes;
}//

preparar(){
console.log(`Preparando Pizza ${this.tamano},${this.masa},${this.ingredientes}`);
return this;
} // fin método

hornear(){
console.log('La pizza se está horneando');
return this;
 }// fin método

 empacar(){
     console.log('Empacando pizza...!');
     console.log('Pizza Lista para ser enviada...!');
     
     return this;
 }

 

}
// fin de la clase Pizza
// Crear los Obje
/*
const pedidoPollo = new Pizza("Maza delgada","Grande",["Queso","pollo","Champiñones"]);
console.log(pedidoPollo.preparar());
console.log(pedidoPollo.hornear());
console.log(pedidoPollo.empacar());

// nueva línea
console.log('--------------------Otro Pedido----------------')
const pedidoCham = new Pizza("Maza delgada","Grande",["Queso","pollo","Champiñones","Jamón"]);
console.log(pedidoCham.preparar());
console.log(pedidoCham.hornear());
console.log(pedidoCham.empacar());
*/



export default Pizza;
