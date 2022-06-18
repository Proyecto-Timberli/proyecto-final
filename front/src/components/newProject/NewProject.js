import React, { useState } from 'react'
import styles from "./NewProyect.module.css"
import { useDispatch, useSelector, } from 'react-redux'
import { Formik } from 'formik'
import validate from './validacion'
import postProject from './functionForPost/PostProject'
import imagen from "../../images/plataforma.png"
import { scroll } from "../../functions";

export default function NewProject() {
    scroll()
    const dispatch = useDispatch()
    const logged = useSelector((state) => state.loggedUserId)
    const initialValues = {
        name: "",
        Fecha: "",
        tecnologias: "",
        descripcion: "",
        shortDescripcion: "",
        repositorio: "",
        deploy: "",
        imagenF: "",
        Imagen: [],
    }

    const [Imagen, setImagen] = useState([]);
    const [creacion, setCreacion] = useState(false);
    const [errorSubmit, setErrorSubmit] = useState(false);

    function handleInputImage(e) {
        e.preventDefault()

        if (e.target.value === "") return
        setImagen([e.target.files[0], ...Imagen])
    }

    function deletePhoto(e) {
        let indexInput = e.target.id * 1;
        setImagen(Imagen.filter((photo, index) => {
            return index !== indexInput ? photo : false
        }))

    }

    async function onSubmit(e, errors, values, resetForm) {
        e.preventDefault();
        if (Object.keys(errors).length > 0 || JSON.stringify(values) === JSON.stringify(initialValues)) {
            setErrorSubmit(true)
            return
        }
        setErrorSubmit(false)
        const NewProject = {
            name: values.name,
            imagen: Imagen,
            tecnology: values.tecnologias,
            description: values.descripcion,
            shortDescripcion: values.shortDescripcion,
            repository: values.repositorio || "",
            deploying: values.deploy || "",
            userid: "1",
            score: [0]
        }

        setCreacion(true);
        setTimeout(() => { setCreacion(false); }, 3000)
        postProject(NewProject)
        resetForm()
        setImagen("");
    }

    return (<>
        {!logged ? <div className={styles.containerAllDiv}>
            <h1 className={styles.container}>Tiene que iniciar sesion para poder crear un proyecto</h1>
        </div> :
            <Formik
                initialValues={initialValues}
                validate={values => validate(values, Imagen)}

            >
                {({ values, handleChange, handleBlur, errors, touched, resetForm }) => (

                    <div className={styles.containerAll}>
                        <div className={styles.container}>
                            <div >
                                <form onSubmit={e => e.preventDefault()} className={styles.container_I} >
                                    <h1 className={styles.title}>Comparti tu proyecto</h1>
                                    <label>
                                        <div className={styles.form}>
                                            <input
                                                placeholder='Nombre de tu website'
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
                                            <textarea
                                                className={styles.input}
                                                placeholder='Ingresa una descripcion corta'
                                                name="shortDescripcion"
                                                value={values.shortDescripcion}
                                                onChange={handleChange}
                                                onBlur={handleBlur}>
                                            </textarea>
                                        </div>
                                    </label>
                                    {touched.shortDescripcion && errors.shortDescripcion && <p className={styles.error}>{errors.shortDescripcion}</p>}
                                    <label>
                                        <div className={styles.form}>
                                            <textarea
                                                className={styles.input}
                                                placeholder='Ingresa una descripcion'
                                                name="descripcion"
                                                value={values.descripcion}
                                                onChange={handleChange}
                                                onBlur={handleBlur}>
                                            </textarea>
                                        </div>
                                    </label>
                                    {/* {touched.descripcion && errors.descripcion && <p className={styles.error}>{errors.descripcion}</p>} */}



                                    <label>
                                        <div className={styles.form}>
                                            <input
                                                placeholder='Tecnologias utilizadas'
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
                                            <input
                                                placeholder='URL del repositorio'
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
                                            <input
                                                placeholder='URL del deploy'
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
                                    {/* <input
                                        className={styles.inputprueba}
                                        name="Imagen"
                                        disabled={Imagen[0] ? true : false}
                                        placeholder="URL de la imagen"
                                        value={values.Imagen}
                                        onChange={e => {
                                            handleChange(e);

                                        }}
                                        onBlur={e => {
                                            handleBlur(e);
                                            handleInputImage(e)
                                            values.Imagen = ""
                                        }}
                                        onKeyDown={e => {
                                            values.Imagen = "";
                                            handleInputImage(e)
                                        }}
                                    /> */}


                                    {/*-----------------------------------------------------DIV ORIGINAL PARA SUBIR LOS ARCHIVOS SIN LINK, NO BORRAR -----------------------------------*/}
                                    <aside id="modal" className={styles.files}>
                                        <div >
                                            <label htmlFor="input_images">
                                                upload photos of your project
                                                <input hidden accept='image/*' id="input_images" type="file" name="imagen" onChange={handleInputImage} multiple />
                                            </label>
                                        </div>
                                    </aside>
                                    {touched.Imagen && errors.Imagen && <p className={styles.error}>{errors.Imagen}</p>}
                                    {/*-----------------------------------------------------DIV ORIGINAL PARA SUBIR LOS ARCHIVOS SIN LINK, NO BORRAR -----------------------------------*/}




                                    {/* {Imagen[0] ? (
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
                                    )} */}
                                    {/*-----------------------------------------------------DIV ORIGINAL PARA SUBIR LOS ARCHIVOS SIN LINK, NO BORRAR -----------------------------------*/}

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

                                    {/*-----------------------------------------------------DIV ORIGINAL PARA SUBIR LOS ARCHIVOS SIN LINK, NO BORRAR -------------------------------------------*/}
                                    <button
                                        className={styles.btnProyecto}
                                        name="buttonSubmit"
                                        // disabled={JSON.stringify(initialValues) === JSON.stringify(values)}
                                        onBlur={handleBlur}
                                        onClick={e => onSubmit(e, errors, values, resetForm)}
                                    >Publicar</button>

                                    {creacion && <div className={styles.exito}>Proyecto creado con exito</div>}
                                    {errorSubmit && <div className={styles.error}>Completa de forma correcta los campos</div>}
                                </form>
                            </div>
                            <div>
                                <img src={imagen}
                                    alt="foto"
                                    className={styles.image}></img>
                            </div>
                        </div >
                    </div>
                )}
            </Formik>
        }
    </>
    )
}
