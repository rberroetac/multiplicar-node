const opciones = {
    numBase: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 12
    }
}

// Requires.
const argv = require('yargs')
    .command('listar', 'Impmrime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo en la carpeta tablas.', opciones)
    .help()
    .argv;

module.exports = {
    argv
}