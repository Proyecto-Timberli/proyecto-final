import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUserById } from '../../../redux/actions/actionCreators'
import './displayUserSettings.css'

const DisplayUserSettings = ({ userData }) => {

  const dispatcher = useDispatch()

  const [userSettings, setUserSettings] = useState(
    {
      name: userData.name,
      stack: userData.stack,
      linkedin: userData.linkedin,
      github: userData.github,
      // imagen??
      short_description: userData.short_description,
      description: userData.description
    }
  )

  const [saveMsg, setSaveMsg] = useState()

  return (
    <div className='userSettingsContainer'>
      <h3>Edita tu información aquí:</h3>

      <div className='userSettings-firstGroup'>

        <div className='userSettings-fg-inputContainer'>
          <p>Edita tu nombre:</p>
          <input type="text"
          className='userSettings-textInput'
          value={userSettings.name}
          onChange={e => {
            setUserSettings({
              ...userSettings,
              name: e.target.value
            })
          }}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Edita tu stack:</p>
          <input type="text" 
          className='userSettings-textInput'
          value={userSettings.stack} onChange={e => {
            setUserSettings({
              ...userSettings,
              stack: e.target.value
            })
          }}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Enlace a LinkedIn:</p>
          <input type="text"
          className='userSettings-textInput'
          value={userSettings.linkedin}
          onChange={e => {
            setUserSettings({
              ...userSettings,
              linkedin: e.target.value
            })
          }}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Enlace a Github:</p>
          <input type="text"
          className='userSettings-textInput'
          value={userSettings.github}
          onChange={e => {
            setUserSettings({
              ...userSettings,
              github: e.target.value
            })
          }}></input>

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
          <input type="text"
          className='userSettings-textInput'
          value={userSettings.short_description}
          onChange={e => {
            setUserSettings({
              ...userSettings,
              short_description: e.target.value
            })
          }}></input>
        </div>

        <div className='userSettings-sg-inputContainer'>
          <p>Edita tu descripción (Sección "Sobre mi"):</p>
          <textarea className='userSettings-textArea' 
          value={userSettings.description}
          onChange={e => {
            setUserSettings({
              ...userSettings,
              description: e.target.value
            })
          }}></textarea>

        </div>
      </div>
      <button className="userSettings-saveButton"
        onClick={e => {
          e.preventDefault()

          const url = 'http://localhost:3001/api/user/'

          const config = {
            headers: { 
              Authorization: `Bearer ${localStorage.getItem('usertoken')}`
            }
          }

          let body = {
            userId: userData.id,
            userEdit: userSettings
          }

          axios.put(url, body, config).then(
            res => {

              console.log(res.data)

              if (res.data.status === "success") {
                setSaveMsg(<p className='save-message-ok'>Cambios Guardados.</p>)
                getUserById(userData.id)(dispatcher)

              } else {
                setSaveMsg(<p className='save-message-err'>Error: {res.data.msg}</p>) 
              }
            }
          ).catch(err => {
            console.log(err)
            setSaveMsg(err.message)
          })

        }}>Guardar Cambios</button>
        {saveMsg}
    </div>
  )
}

export default DisplayUserSettings