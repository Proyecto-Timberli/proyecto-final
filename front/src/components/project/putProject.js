import axios from "axios"
const { REACT_APP_CLOUD_NAME, REACT_APP_UPLOAD_PRESET, REACT_APP_API } = process.env

const putProject = async (id, editValue) => {
    let upload_preset = REACT_APP_UPLOAD_PRESET;

    const uploadUrl = editValue.imagen.map(async photo => {

        const formData = new FormData()
        formData.append("file", photo)
        formData.append("upload_preset", upload_preset)

        if (typeof photo === "object") {
            if (photo.type.split("/")[0] === "image") {

                try {
                    const res = await axios.post(`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_NAME}/image/upload`, formData)
                    return res.data.secure_url
                } catch (err) {
                    console.error(err)
                }
            } else {
                try {
                    const res = await axios.post(`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_NAME}/upload`, formData)
                    return res.data.url
                } catch (err) {
                    console.error(err)
                }
            }

        }
    })

    await axios.all(uploadUrl)
        .then(res => {
            editValue.imagen = res
            axios.put(REACT_APP_API + "/api/project", {projectId: id,projectEdit:editValue})
                .then(response => response.data)
                .catch(error => console.error(error))
        }).catch(err => { console.error(err) })

}

export default putProject;