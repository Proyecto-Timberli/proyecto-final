import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUserById } from '../../../redux/actions/actionCreators'
import './displayUserSettings.css'
const { REACT_APP_API } = process.env


const DisplayUserSettings = ({ userData }) => {

  const dispatcher = useDispatch()

  const [userSettings, setUserSettings] = useState(
    {
      name: userData.name,
      stack: userData.stack,
      linkedin: userData.linkedin,
      github: userData.github,
       image: userData.image,
      short_description: userData.short_description,
      description: userData.description
    }
  )

  function onChange(e){
e.preventDefault()
setUserSettings({
  ...userSettings,
  [e.target.name]: e.target.value
})
  } 

  const [saveMsg, setSaveMsg] = useState()

  return (
    <div className='userSettingsContainer'>
      <h3 className='titulo-userSettings'>Edita tu información:</h3>

      <div className='userSettings-firstGroup'>

        <div className='userSettings-fg-inputContainer'>
          <p>Edita tu nombre:</p>
          <input type="text"
          className='userSettings-textInput'
          value={userSettings.name}
          name="name"
          onChange={e => {onChange(e)}}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Edita tu stack:</p>
          <input type="text" 
          className='userSettings-textInput'
          value={userSettings.stack} 
          name="stack"
          onChange={e => {onChange(e)}}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Enlace a LinkedIn:</p>
          <input type="text"
          className='userSettings-textInput'
          value={userSettings.linkedin}
          name="linkedin"
          onChange={e => {onChange(e)}}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Enlace a Github:</p>
          <input type="text"
          className='userSettings-textInput'
          value={userSettings.github}
          name="github"
          onChange={e => {onChange(e)}}></input>

        </div>
      </div>

      <div className='userSettings-secondGroup'>

        <div className='userSettings-sg-inputContainer'>
          <p>Sube una imagen para tu perfil:</p>

      {/*Cargar imagen-Archivo <input accept='image/*' type="file" name="image" onChange={}  /> */}

          <input type="text" value={userSettings.image} className='userSettings-textInput' 
           name="image"
           onChange={e => {onChange(e)}}></input>
        </div>

      </div>

      <div className='userSettings-secondGroup'>

        <div className='userSettings-sg-inputContainer'>
          <p>Edita tu descripción (corta):</p>
          <input type="text"
          className='userSettings-textInput'
          value={userSettings.short_description}
          name="short_description"
          onChange={e => {onChange(e)}}></input>
        </div>

        <div className='userSettings-sg-inputContainer'>
          <p>Edita tu descripción (Sección "Sobre mi"):</p>
          <textarea className='userSettings-textArea' 
          value={userSettings.description}
          name="description"
          onChange={e => {onChange(e)}}></textarea>

        </div>
      </div>
      <button className="userSettings-saveButton"
        onClick={e => {
          e.preventDefault()

          const url = REACT_APP_API + "/api/user/"

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