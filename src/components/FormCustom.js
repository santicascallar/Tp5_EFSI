import React, { Fragment } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormCustom = function ({setCitas}) {

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
        if (!paciente) {
          console.log("completa")
        }else{
        setCitas(prev => [...prev, {
        paciente
        }])
        setPaciente("")
      }
    }

    return (
        <Fragment>
        <form onSubmit={formPaciente}>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Mascota</Form.Label>
            <Form.Control type="text" placeholder="Nombre Mascota" name="nombre" onChange={formularioPaciente}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Dueño</Form.Label>
            <Form.Control type="text" placeholder="Nombre Dueño" name="nombreDueño" onChange={formularioPaciente}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" placeholder="Fecha" name="fecha" onChange={formularioPaciente}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time" placeholder="Hora" name="hora" onChange={formularioPaciente}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Sintomas</Form.Label>
            <Form.Control type="text" placeholder="Sintomas" name="sintomas" onChange={formularioPaciente}/>
            </Form.Group>

            <Button variant="primary" type="submit">Agregar Cita</Button>
        </form>
        </Fragment>
    )
}

export default FormCustom;