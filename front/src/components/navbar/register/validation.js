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
        errors.name = '*Debes ingresar tu nombre'
    }else if (formData.name.length > 20){
        console.log("entra sssssssssssssssssssss")
        errors.name = '*caracteres excedidos'
    }else if (!/^[a-z ,.'-]+$/i.test(formData.name)){
        errors.name = '*No puede contener simbolos'
    } 

    if (!formData.email) {
        errors.email = "*Debes ingresar tu correo"
    }else if (!mailRegex.test(formData.email)) {
        errors.email = "*El formato no es valido"
    }

    if (!formData.password) {
        errors.password = "*Debes ingresar una contraseña"
    }else if (!passwordRegex.test(formData.password)) {
        errors.password = "*Debe contener 8 caracteres, una mayúscula, una minúscula y un número"
    }

    if (!formData.repeat_password) {
        errors.repeat_password = "*Debes repetir tu contraseña"
    }else if (formData.password !== formData.repeat_password) {
        errors.repeat_password = "*Las contraseñas no coinciden"
    }
    if (!formData.tos) {
        errors.tos = "*No has aceptado nuestros términos y condiciones"
    }

    return errors
}