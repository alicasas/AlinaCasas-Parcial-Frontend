import React from 'react'

const Form = ({handleSubmit, checkFields}) => {
  
  return (
    <>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
            <label >Ingresa tu nombre</label>
            <input type='text' onChange={(e) => checkFields(e.target.value, 'nombre')}/>
            <label >Ingresa tu apellido</label>
            <input type='text' onChange={(e) => checkFields(e.target.value, 'apellido')}/>
            <label >Ingresa tu edad</label>
            <input type='number' onChange={(e) => checkFields(e.target.value, 'edad')}/>
            <button>Enviar!</button>
        </form>
        </div>
    </>
  )
}

export default Form