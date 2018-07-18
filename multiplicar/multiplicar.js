// Requires.
const fs = require('fs');
const colors = require('colors');

let listarTabla = (numBase, limite) => {

    for (base = 1; base <= limite; base++) {
        //console.log(numBase + ' * ' + base + ' = ' + numBase * base);
        console.log(`${numBase} * ${base} = ${numBase*base} \n`);
    }

}



let crearArchivo = (numBase, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(numBase)) {
            reject(`${numBase} no es un numero.`);
            return;
        }
        let contenido = '';
        for (base = 1; base <= limite; base++) {
            //console.log(numBase + ' * ' + base + ' = ' + numBase * base);
            contenido += (`${numBase} * ${base} = ${numBase*base} \n`);
        }

        // codigo para crear y guardar archivo.
        fs.writeFile(`tablas/tabla-${numBase}-con-limite-${limite}.txt`, contenido, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${numBase}-limite-${limite}.txt`.green);
        });
    });
}

// para publicarlo en otro archivo se debe exportat con modulos.
module.exports = {
    crearArchivo,
    listarTabla
}