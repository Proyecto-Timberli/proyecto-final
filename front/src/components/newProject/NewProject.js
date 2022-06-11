import React, { useState } from 'react'
import styles from "./NewProyect.module.css"
import { Formik, FieldArray, Field } from 'formik'
import validate from './validacion'



export default function NewProject() {
    const [input, setInput] = useState({
        name: "",
        Fecha: "",
        tecnologias: "",
        descripcion: "",
        repositorio: "",
        deploy: "",
        imagenF: "",
    })
    const initialValues = {
        name: "",
        Fecha: "",
        tecnologias: "",
        descripcion: "",
        repositorio: "",
        deploy: "",
        imagenF: "",
        Imagen: [],
    }

    const [Imagen, setImagen] = useState([]);


    function handleInputImage(e) {
        e.preventDefault()
        // if (input.image) {
        //     if (!/(http|https|ftp|ftps):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?/.test(input.image)) {
        //         return
        //     }
        //     else if (!/.*(png|jpg|jpeg|gif)$/.test(input.image)) {
        //         return
        //     }
        // }
        if (e.target.value === "") return
        setImagen([e.target.value, ...Imagen])

        // if (e.target.value) return e.target.value = ""
    }
    // function onChangeInput(e) {
    //     // console.log(e.target.files)

    //     setInput({
    //         ...input,
    //         [e.target.name]: e.target.value
    //     })
    // }
    function deletePhoto(e) {
        let indexInput = e.target.id * 1;
        setImagen(Imagen.filter((photo, index) => {
            return index !== indexInput ? photo : false
        }))

    }
    function onSubmit(e, errors, values) {
        e.preventDefault();
        if (Object.keys(errors).length > 0) { return console.log("no se hizo el despacho") }
        console.log("se hizo el despacho")
        const NewProject = {
            Nombre: input.name,
            contenidoMedia: [...Imagen],
            Fecha: input.Fecha,
            Tecnologias: input.tecnologias,
            Descripcion: input.descripcion,
            Repositorio: input.repositorio,
            Deploy: input.deploy
        }
        console.log(NewProject);
        setImagen("");
        setInput({
            name: "",
            Fecha: "",
            tecnologias: "",
            descripcion: "",
            repositorio: "",
            deploy: "",
        })
    }



    return (<>
        <Formik
            initialValues={initialValues}
            validate={values => validate(values, Imagen)}

        >
            {({ values, handleChange, handleBlur, errors, touched }) => (

                <div className={styles.containerAll}>
                    <div className={styles.container}>
                        <div >
                            <form onSubmit={e => e.preventDefault()} className={styles.container_I} >
                                <h1 className={styles.title}>Tell us about your website</h1>
                                <label>
                                    <div className={styles.form}>
                                        <p>website name*</p>
                                        <input
                                            placeholder='Enter the name of your website'
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            className={styles.input}
                                            onBlur={handleBlur}>
                                        </input>

                                        <span className={styles.input_border}></span>
                                    </div>
                                </label>
                                {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}

                                <label>
                                    <div className={styles.form}>

                                        <p>description*</p>
                                        <textarea

                                            className={styles.input}
                                            placeholder='description'
                                            name="descripcion"
                                            value={values.descripcion}
                                            onChange={handleChange}
                                            onBlur={handleBlur}>
                                        </textarea>
                                    </div>
                                </label>
                                {touched.descripcion && errors.descripcion && <p className={styles.error}>{errors.descripcion}</p>}



                                <label>
                                    <div className={styles.form}>
                                        <p>technologies*</p>

                                        <input
                                            placeholder='technologies used'
                                            name="tecnologias"
                                            value={values.tecnologias}
                                            className={styles.input}
                                            onChange={handleChange}
                                            onBlur={handleBlur}>
                                        </input>
                                        <span className={styles.input_border}></span>
                                    </div>
                                </label>
                                {touched.tecnologias && errors.tecnologias && <p className={styles.error}>{errors.tecnologias}</p>}

                                <label>
                                    <div className={styles.form}>

                                        <p>repository</p>
                                        <input
                                            placeholder='repository url'
                                            name="repositorio"
                                            value={values.repositorio}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={styles.input}>

                                        </input>
                                        <span className={styles.input_border}></span>
                                    </div>
                                </label>
                                {touched.repositorio && errors.repositorio && <p className={styles.error}>{errors.repositorio}</p>}
                                <label>
                                    <div className={styles.form}>

                                        <p>deploy</p>
                                        <input
                                            placeholder='deploy url'
                                            name="deploy"
                                            value={values.deploy}
                                            className={styles.input}
                                            onChange={handleChange}
                                            onBlur={handleBlur}>
                                        </input>
                                        <span className={styles.input_border}></span>
                                    </div>
                                </label>
                                {touched.deploy && errors.deploy && <p className={styles.error}>{errors.deploy}</p>}
                                <input
                                    className={styles.inputprueba}
                                    name="Imagen"
                                    placeholder="Enter the URL of the image"
                                    value={values.Imagen}
                                    onChange={e => {
                                        handleChange(e);
                                        }}
                                    onBlur={e => { handleBlur(e); values.Imagen = "" }}
                                    onKeyDown={e => {
                                        // values.Imagen = "";
                                        e.preventDefault()
                                        handleInputImage(e)
                                    }}
                                />

                                {touched.Imagen && errors.Imagen && <p className={styles.error}>{errors.Imagen}</p>}

                                {/*-----------------------------------------------------DIV ORIGINAL PARA SUBIR LOS ARCHIVOS SIN LINK, NO BORRAR -----------------------------------*/}
                                {/* <aside id="modal" className="modal">
                        <div className="content-modal">
                        <header>
                                <label htmlFor="input_images">
                                    upload photos of your project
                                    <input id="input_images" className={styles.inputImages} type="file" name="imagen" onChange={changeImagen} multiple hidden />
                                </label>
                            </header>
                            </div>
                    </aside> */}
                                {/*-----------------------------------------------------DIV ORIGINAL PARA SUBIR LOS ARCHIVOS SIN LINK, NO BORRAR -----------------------------------*/}


                                {/*-----------------------------------------------------DIV ORIGINAL PARA SUBIR LOS ARCHIVOS SIN LINK, NO BORRAR -----------------------------------*/}

                                {Imagen[0] ? (
                                    <div className={styles.containerImagesPreviewDemo}>
                                        {Imagen.map((photo, index) => {
                                            return (

                                                <img
                                                    className={styles.imagePreviewDemo}
                                                    key={index}
                                                    id={index}
                                                    src={photo}
                                                    alt="foto"
                                                    onClick={(e) => deletePhoto(e)}
                                                ></img>
                                            )
                                        })}
                                    </div>) : (
                                    <div className={styles.divImage}>
                                        You currently have no photos added
                                    </div>
                                )}

                                {/*                        
                        <div id="imagen"></div>
                        {Imagen[0] ? (
                            <div className={styles.containerImagesPreview} >
                            {Imagen.map((e, index) => {
                                return (
                                    <img
                                        className={styles.imagePreview}
                                            key={index}
                                            src={URL.createObjectURL(e)}
                                            id={index}
                                            alt=""
                                            onClick={e => deletePhoto(e)} />
                                            )
                                })}
                            </div>
                        ) : <div className={styles.divImage}>
                        You currently have no photos added
                        </div>}
                    <button onClick={e => onSubmit(e)}>Publicar</button> */}
                                {/*-----------------------------------------------------DIV ORIGINAL PARA SUBIR LOS ARCHIVOS SIN LINK, NO BORRAR -------------------------------------------*/}
                                <button name="buttonSubmit" disabled={JSON.stringify(initialValues) === JSON.stringify(values)} onBlur={handleBlur} onClick={e => onSubmit(e, errors, values)} >Publicar</button>



                            </form>
                        </div>
                        <div>
                            <img src="https://cdn-icons.flaticon.com/png/512/3541/premium/3541461.png?token=exp=1654720622~hmac=48310e00e66c357d1492959ed0fc25d3"
                                alt="foto"
                                className={styles.image}></img>
                        </div>
                    </div >
                </div>
            )}
        </Formik>
    </>
    )
}
