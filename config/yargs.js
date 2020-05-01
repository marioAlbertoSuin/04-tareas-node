const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'completado'

}
const argv = require('yargs')
    .command('crear', 'Crear una tarea', { descripcion })
    .command('actualizar', 'actualiza una tarea', { descripcion, completado })
    .command('borrar', 'borra una tarea', { descripcion }).argv;


module.exports = {
    argv
}