const fs = require('fs');

let tarearPorhacer = [];


const cargarDB = () => {
        try {
            tarearPorhacer = require('../Modelo/data.json');
        } catch (error) {
            tarearPorhacer = [];
        }

    }
    /////////////////////////////////////////////////////////////
const guardarDB = () => {
        let data = JSON.stringify(tarearPorhacer);
        fs.writeFile('Modelo/data.json', data, (err) => {
            if (err) throw new Error('no se pudo guardar', err);
        });

    }
    //////////////////////////////////////////////////////////////////
let crear = (descripcion) => {
        cargarDB();
        let tarea = {
            descripcion,
            completado: false
        }

        tarearPorhacer.push(tarea);
        guardarDB();
        return tarea;

    }
    //////////////////////////////////////////////////////////////////////////
const getLista = () => {
    cargarDB();
    return tarearPorhacer;
}

////////////////////////////////////////////////////////////////////////////////
const actulizar = (descripcion, completado = true) => {
        cargarDB();
        let index = tarearPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
        if (index >= 0) {
            tarearPorhacer[index].completado = completado;
            guardarDB();
            return true;
        }
        return false;
    }
    /////////////////////////////////////////////////////////////////////////////////

const borrar = (descripcion) => {
        cargarDB();
        let nuevoListado = tarearPorhacer.filter(tarea => tarea.descripcion !== descripcion);
        if (tarearPorhacer.length === nuevoListado.length) {
            return false;
        } else {
            tarearPorhacer = nuevoListado;
            guardarDB();
            return true;
        }

    }
    ////////////////////////////////////////////////////////////////////////////////
module.exports = {
    crear,
    getLista,
    actulizar,
    borrar
}