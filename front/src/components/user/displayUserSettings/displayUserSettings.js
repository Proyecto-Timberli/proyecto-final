import React from 'react'
import './displayUserSettings.css'

const DisplayUserSettings = ({ userData }) => {
  return (
    <div className='userSettingsContainer'>
      <h3>Edita tu información aquí:</h3>

      <div className='userSettings-firstGroup'>
        <div className='userSettings-fg-inputContainer'>
          <p>Edita tu nombre:</p>
          <input type="text" className='userSettings-textInput' ></input>
        </div>
        <div className='userSettings-fg-inputContainer'>
          <p>Edita tu stack:</p>
          <input type="text" className='userSettings-textInput' ></input>
        </div>
        <div className='userSettings-fg-inputContainer'>
          <p>Enlace a LinkedIn</p>
          <input type="text" className='userSettings-textInput' ></input>
        </div>
        <div className='userSettings-fg-inputContainer'>
          <p>Enlace a Github</p>
          <input type="text" className='userSettings-textInput' ></input>
        </div>
      </div>
      <div className='userSettings-secondGroup'>
        <div className='userSettings-sg-inputContainer'>
          <p>Sube una imagen para tu perfil:</p>
          <input type="text" className='userSettings-textInput' ></input>
        </div>
      </div>
      <div className='userSettings-secondGroup'>
        <div className='userSettings-sg-inputContainer'>
          <p>Edita tu descripción (corta):</p>
          <input type="text" className='userSettings-textInput' ></input>
        </div>
        <div className='userSettings-sg-inputContainer'>
          <p>Edita tu descripción (Sección "Sobre mi"):</p>
          <textarea className='userSettings-textArea' ></textarea>
        </div>
      </div>
    </div>
  )
}

export default DisplayUserSettings