const fs = require('fs');
const colors = require('colors');

let listartabla = (base, limite = 10) => { //10 es un valor por defecto

    console.log('***************************************************'.green);
    console.log(`esta es la tabla del ${base} al ${limite}`.blue);
    console.log('***************************************************'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }
}
let creararchivo = (base, limite = 10) => { //esto es una funcion que me recibe la base aca puedo poner al inicio module.export.crararchivo
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor ${base} no es un numero`);
            return;

        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}- al${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla ${base}-al${limite}`)

        });
    });
}
module.exports = { //exportar para poder usar 
    creararchivo,
    listartabla
}