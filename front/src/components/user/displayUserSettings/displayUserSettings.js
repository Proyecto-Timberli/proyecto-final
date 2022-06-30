import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUserById } from '../../../redux/actions/actionCreators'
import './displayUserSettings.css'

const { REACT_APP_CLOUD_NAME, REACT_APP_UPLOAD_PRESET, REACT_APP_API } = process.env



const DisplayUserSettings = ({ userData }) => {

  const dispatcher = useDispatch()

  if (typeof userData.stack === "object") {

    userData.stack = userData.stack?.join(", ")
  }

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

  function onChange(e) {
    e.preventDefault()
    setUserSettings({
      ...userSettings,
      [e.target.name]: e.target.value
    })
  }
  function onChangeImage(e) {
    e.preventDefault()
    console.log(e.target.files[0])
    setUserSettings({
      ...userSettings,
      [e.target.name]: e.target.files[0]
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
            onChange={e => { onChange(e) }}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Edita tu stack:</p>
          <input type="text"
            className='userSettings-textInput'
            value={userSettings.stack}
            name="stack"
            onChange={e => { onChange(e) }}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Enlace a LinkedIn:</p>
          <input type="text"
            className='userSettings-textInput'
            value={userSettings.linkedin}
            name="linkedin"
            onChange={e => { onChange(e) }}></input>
        </div>

        <div className='userSettings-fg-inputContainer'>
          <p>Enlace a Github:</p>
          <input type="text"
            className='userSettings-textInput'
            value={userSettings.github}
            name="github"
            onChange={e => { onChange(e) }}></input>

        </div>
      </div>

      <div className='userSettings-secondGroup'>

        <div className='userSettings-sg-inputContainer'>
          <p>Sube una imagen para tu perfil:</p>

          <input accept='image/*' id="file" type="file" name="image" onChange={e => { onChangeImage(e) }} />
          {/* 
          <input type="text" value={userSettings.image} className='userSettings-textInput'
            name="image"
            onChange={e => { onChange(e) }}></input> */}
        </div>

      </div>

      <div className='userSettings-secondGroup'>

        <div className='userSettings-sg-inputContainer'>
          <p>Edita tu descripción (corta):</p>
          <input type="text"
            className='userSettings-textInput'
            value={userSettings.short_description}
            name="short_description"
            onChange={e => { onChange(e) }}></input>
        </div>

        <div className='userSettings-sg-inputContainer'>
          <p>Edita tu descripción (Sección "Sobre mi"):</p>
          <textarea className='userSettings-textArea'
            value={userSettings.description}
            name="description"
            onChange={e => { onChange(e) }}></textarea>

        </div>
      </div>
      <button className="userSettings-saveButton"
        onClick={async e => {
          e.preventDefault()
          const formData = new FormData()
          formData.append("file", userSettings.image)
          formData.append("upload_preset", REACT_APP_UPLOAD_PRESET)
          try {
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_NAME}/image/upload`, formData)
            userSettings.image = res.data.secure_url
          } catch (err) {
            console.error(err)
          }
          const url = REACT_APP_API + "/api/user"

          const config = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('usertoken')}`
            }
          }
          console.log(userSettings)
          if (typeof userSettings.stack === "object") {
            userSettings.stack = userSettings.stack.join(',')
          }
          userSettings.stack = userSettings.stack.split(',')
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