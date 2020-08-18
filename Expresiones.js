function primeraMulti(x2,x){
        return x2*x;
}
function primeraOp(xg,x5){
        return xg-x5;
}
function segundaMulti(xy,xz){
        return xy*xz;
}
function segundaOp(primeraOp,segundaMulti){
        return primeraOp*segundaMulti;       
}
function terceraMulti(x7,y){
        return x7*y;       
}
function cuartaMulti(x3,z){
        return x3*z;       
}
function terceraOp(terceraMulti,cuartaMulti){
        return terceraMulti-cuartaMulti;       
}
function operaciónFinal(segundaOp,terceraOp){
        return segundaOp+terceraOp;       
}
console.log(primeraMulti(2,4));
console.log(primeraOp(8,5));
console.log(segundaMulti(6,2));
console.log(segundaOp(3,12));
console.log(terceraMulti(7,3));
console.log(cuartaMulti(3,1));
console.log(terceraOp(21,3));
console.log(operaciónFinal(36,63));

