import React from 'react'

const form = () => {
    return (
        <form>
            <label>Nombre Mascota</label>
            <input type="text" name="nombreP"/>
            <label>Nombre Dueño</label>
            <input type="text" name="nombreD"/>
            <label>Fecha</label>
            <input type="date" name="fecha"/>
            <label>Hora</label>
            <input type="time" name="hora"/>
            <label>Sintomas</label>
            <input type="text" name="sintomas"/>

            <button type="submit">Agregar Cita</button>
        </form>
    )
}

export default form;