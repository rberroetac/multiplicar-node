const argv = require('./config/yargs').argv;
const colors = require('colors');

// cuando const o let van acompañados de llaves es una destructuración.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.numBase, argv.limite);
        break;
    case 'crear':
        //llamado a la funcion en archivo multiplicar.js
        crearArchivo(argv.numBase, argv.limite)
            .then(archivo => console.log(`Ha sido creado el archivo ${archivo}.`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}

//console.log(argv2);
// let parametro = argv[2];
// let numBase = parametro.split('=')[1]