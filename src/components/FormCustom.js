import React, { Fragment } from 'react'
import { useState } from 'react';

const FormCustom = function () {

    const [paciente, setPaciente] = useState({
        nombre: '',
        nombreDueño: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const formularioPaciente = (event) => {
        //console.log(event.target.value);
        setPaciente({
            ...paciente,
            [event.target.name] : event.target.value
        })
    }

    const formPaciente = (event) => {
        event.preventDefault(); //evitar que se reinicie la pagina cada vez que apretamos el boton
        console.log(paciente.nombre)
    }

    return (
        <Fragment>
        <form onSubmit={formPaciente}>
            <label>Nombre Mascota</label>
            <input type="text" name="nombre" onChange={formularioPaciente}/>

            <label>Nombre Dueño</label>
            <input type="text" name="nombreDueño"onChange={formularioPaciente}/>

            <label>Fecha</label>
            <input type="text" name="fecha"onChange={formularioPaciente}/>

            <label>Hora</label>
            <input type="text" name="hora"onChange={formularioPaciente}/>

            <label>Sintomas</label>
            <input type="text" name="sintomas"onChange={formularioPaciente}/>

            <button type="submit">Agregar Cita</button>
        </form>
        </Fragment>
    )
}

//https://www.youtube.com/watch?v=8KuVE5JN8JQ

export default FormCustom;