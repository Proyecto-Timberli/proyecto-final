/**
 *  ¿Validación de contraseña?
 *  almenos 8 caracteres
 *  almenos una mayuscula, almenos una minuscula, al menos un numero
 *  puede contenet caracteres especiales
 */

const mailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ 


export default function validation(formData) {
    
    let errors = {}

    if (!formData.name) {
        errors.name = "Debes ingresar tu nombre"
    }

    if (!formData.email) {
        errors.email = "Debes ingresar tu correo"
    }

    if (!mailRegex.test(formData.email)) {
        errors.email = "Debes ingresar un correo válido"
    }

    if (!formData.password) {
        errors.password = "Debes ingresar una contraseña"
    }

    if (!passwordRegex.test(formData.password)) {
        console.log()
        errors.password = "Tu contraseña debe tener almenos: 8 caracteres, una mayúscula, una minúscula y un número"
    }

    if (formData.password !== formData.repeat_password) {
        errors.repeat_password = "Las contraseñas no coinciden"
    }

    if (!formData.repeat_password) {
        errors.repeat_password = "No has repetido tu contraseña"
    }

    if (!formData.tos) {
        errors.tos = "No has aceptado nuestros términos y condiciones"
    }

    return errors
}