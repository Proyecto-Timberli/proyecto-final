let expresionForUrl =/^(ftp|http|https):\/\/[^ "]+$/
const expresionForOnlyLetters = /^(?=.*?[A-Za-z])[A-Za-z+]+$/



export default function validate(values,stateImage) {
    let errores = {};
    if (!values.name) {
        errores.name = "Por favor ingresa un nombre"
    }else if(!expresionForOnlyLetters.test(values.name.split(" ").join(""))){
        errores.name = "El nombre solamente puede contener letras"
    }

    if(!values.descripcion){
        errores.descripcion= "Por favor ingresa una descripcion"
    }else if(values.descripcion.split(" ").join("").length<15){
        errores.descripcion= "La descripcion debe tener minimo 15 caracteres"
    }
    if(!values.tecnologias){
        errores.tecnologias= "Por favor ingresa minimo una tecnologia"
    }
    if(!values.repositorio){
        errores.repositorio= "Por favor ingresa un link al repositorio"
    }else if(!expresionForUrl.test(values.repositorio)){
        errores.repositorio= "Por favor ingresa un link valido"
    }
    if(!values.deploy){
        errores.deploy= "Por favor ingresa un link al deploy"
    }else if(!expresionForUrl.test(values.deploy)){
        errores.deploy= "Por favor ingresa un link valido"
    }
    if(!values.Imagen[0]&&!stateImage[0]){
        errores.Imagen= "Por favor ingresa una imagen"
    }


    return errores;
}