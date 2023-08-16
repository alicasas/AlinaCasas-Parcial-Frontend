/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'


function App() {
  const [persona, setPersona] = useState({
    nombre: '',
    apellido: '',
    edad: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    errorNombre: '',
    errorApellido: '',
    errorEdad: ''
  })

  const checkFields = (value, label) => {
    if (label === "nombre") {
      value = value.trim()
      if (value.length < 3) {
        setErrorMessage({...errorMessage, errorNombre: 'Tu nombre debe ser de al menos 3 caracteres'})
      } else {
        setErrorMessage({...errorMessage, errorNombre: ''})
        setPersona({...persona, nombre: value})
      }
    }

    if (label === "apellido") {
      if (value.length < 3) {
        setErrorMessage({...errorMessage, errorApellido: 'Tu apellido debe ser de al menos 3 caracteres'})
      } else {
        setErrorMessage({...errorMessage, errorApellido: ''})
        setPersona({...persona, apellido: value})
      }
    } 
    if (label === "edad") {
      value = value.trim()
      if (+value <= 0 || +value > 120 ) {
        setErrorMessage({...errorMessage, errorEdad: 'Deberias tener entre 1 y 120 años no?'})
      } else {
        setErrorMessage({...errorMessage, errorEdad: ''})
        setPersona({...persona, edad: value})
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {errorNombre, errorApellido, errorEdad} = errorMessage
    if (errorNombre.length === 0 && errorApellido.length === 0 && errorEdad.length === 0) {
      setError(false)
      setShow(true)
    } else {
      setError(true)
      setShow(false)
      console.log(persona);
    }
  }
  return (
    <>
      <h1>PARCIAL FRONT 3</h1>
      <div className="container">
        <Form handleSubmit={handleSubmit} checkFields={checkFields}/>
      {show && <Card persona={persona}/>}
      {error && <div><p>{errorMessage.errorNombre}</p> <p>{errorMessage.errorApellido}</p> <p>{errorMessage.errorEdad}</p></div>}
      </div>
    </>
  )
  
}

export default App
