const fs = require('fs'); //Importo lib
const colors = require('colors');

 const crearArch = async(base = 5, listar = false , hasta = 10) => {
    
    try {

        let consola = '';
        let salida = '';
        
        for( let i=1; i<=hasta ; i++){
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        if( listar )
            console.log(consola);

        fs.writeFileSync(`./tablas-multiplicar/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creada`;
        
    } catch (err) {
        throw err
    }
}; 

/* const crearArch = (base) => {
    
    return new Promise( (resolve, reject) => {
        
        let salida = "";
        
        for( let i=1; i<=10 ; i++){
            salida += `${base} * ${i} = ${base * i}\n`;
        }
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        resolve(`tabla-${base}.txt creada`);
    });

};  */



//Exportacion de la funcion
module.exports = { 
    crearArch //Exporto crearArch
}