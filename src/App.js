import React from 'react';
import {useState} from 'react';
import Form from './components/FormCustom';
import Card from './components/CardCustom';

import './App.css';

function App() {

  const [citas, setCitas] = useState([])

  return (
      <div >
        <h1 className='textStyle'>Administrador de Pacientes</h1><br/><br/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2 style={{color: "white"}}>Nueva Cita</h2>
             <Form setCitas={setCitas}></Form>
            </div>
            <div className='col-md-6'>
              <h2 style={{color: "white"}}>Administrar tus citas</h2>
              <Card citas={citas} setCitas={setCitas}></Card>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;