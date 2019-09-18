const argv = require('./config/yargs').argv;
const colors = require('colors');


const { creararchivo, listartabla } = require('./tablas/multiplicar/multiplicar'); //destructuracion con llaves luego de un let o const

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;
    case 'crear':

        creararchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:${archivo.green}`))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');

}

//let parametro = argv[2];
//let base = parametro.split('=')[1]