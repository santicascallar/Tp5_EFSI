import React from 'react'
import { Card, Button } from 'react-bootstrap';

const CardCustom = ({citas, setCitas}) => {

    const eliminarCita = (i) => {
        const newCitas = [...citas];
        newCitas.splice(i, 1);
        setCitas(newCitas);
      }
    
      return (
        <div className='scroll'> {citas.map((cita, i) =>
          <Card className='mb-3 me-3' style={{ width: '32.5rem' }} key={i}>
            <Card.Body>
              <p><strong>Mascota: </strong><span>{cita.paciente.nombre}</span></p>
              <p><strong>Dueño: </strong><span>{cita.paciente.nombreDueño}</span></p>
              <p><strong>Fecha: </strong><span>{cita.paciente.fecha}</span></p>
              <p><strong>Hora: </strong><span>{cita.paciente.hora}</span></p>
              <p><strong>Sintomas: </strong><span>{cita.paciente.sintomas}</span></p>
              
              <Button variant="primary" type="submit" className="w-100 boton2" onClick={() => {eliminarCita(i)}}>
                Eliminar
              </Button>
            </Card.Body>
          </Card>
        )}</div>
      );
}

export default CardCustom;