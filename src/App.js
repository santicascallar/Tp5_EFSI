import React from 'react';
import {useState} from 'react';
import Form from './components/FormCustom';
import Card from './components/CardCustom';

import './App.css';

function App() {

  const [citas, setCitas] = useState([])

  return (
      <div>
        <h1 style={{ alignItems: 'center' }}>Administrador de Pacientes</h1><br/><br/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>Nueva Cita</h2>
             <Form setCitas={setCitas}></Form>
            </div>
            <div className='col-md-6'>
              <h2>Administrar tus citas</h2>
              <div className='justify-content-center d-flex'>
              <Card citas={citas} setCitas={setCitas}></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    /*<div>
      <h1>Administración de Pacientes</h1>
      <h2>Crear mi cita</h2>
      <Form setCitas={setCitas}/>
      <Card citas={citas} setCitas={setCitas}></Card>
    </div>*/
  );
}

export default App;
