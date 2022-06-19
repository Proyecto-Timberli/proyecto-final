// let expresionForUrl = /^(ftp|http|https):\/\/[^ "]+$/
const expresionForOnlyLetters = /^(?=.*?[A-Za-z])[A-Za-z+]+$/
var regular = /^[a-zA-Z0-9-.&, ]*$/


export default function validate(values, stateImage) {
    let errores = {};
    if (!values.name) {
        errores.name = "Por favor ingresa un nombre"
    } else if (!expresionForOnlyLetters.test(values.name.split(" ").join(""))) {
        errores.name = "El nombre solamente puede contener letras"
    }

    if (!values.shortDescripcion) {
        errores.shortDescripcion = "Por favor ingresa una descripcion"
    } else if (values.shortDescripcion.split(" ").join("").length < 6) {
        errores.shortDescripcion = "La shortDescripcion debe tener minimo 6 caracteres"
    }
    if (!values.tecnologias) {
        errores.tecnologias = "Por favor ingresa minimo una tecnologia"
    } else if (!regular.test(values.tecnologias)) {
        errores.tecnologias = " solo puede contener letras, numeros, espacios, puntos y comas"
    }

    // if (!values.repositorio) {
    //         errores.repositorio = "Por favor ingresa un link al repositorio"
    //     } else if (!expresionForUrl.test(values.repositorio)) {
    //         errores.repositorio = "Por favor ingresa un link valido"
    //     }
    // if (!values.deploy) {
    //     errores.deploy = "Por favor ingresa un link al deploy"
    // } else if (!expresionForUrl.test(values.deploy)) {
    //     errores.deploy = "Por favor ingresa un link valido"
    // }
    if (!values.Imagen[0] && !stateImage[0]) {
        errores.Imagen = "Por favor ingresa una imagen"
    }


    return errores;
}