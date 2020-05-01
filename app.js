const argv = require('./config/yargs').argv;
const tareas = require('./Controlador/tareas-por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion)

        break;
    case 'actualizar':
        console.log('actualizar');
        let resp = tareas.actulizar(argv.descripcion, argv.completado)
        console.log(resp);
        break;
    case 'borrar':
        console.log('borrar');
        let borrar = tareas.borrar(argv.descripcion)
        console.log(borrar);
        break;
    case 'listar':
        console.log('listar');
        let lista = tareas.getLista();
        for (let tarea of lista) {
            console.log(tarea.descripcion);
            console.log(tarea.completado);

        }
        break;
    default:
        console.log("comando no reconocido");
}