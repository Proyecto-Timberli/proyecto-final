import React, { useState } from 'react'
import styles from "./NewProyect.module.css"
import { Formik } from 'formik'
import validate from './validacion'
import postProject from './functionForPost/PostProject'
import imagen from "./images/plataforma.png"
import { scroll } from "../../../functions";
import ModalTechnologies from "./modalTechnologies.js"
import { BiUpload } from "react-icons/bi";
import { AiOutlineSelect } from "react-icons/ai";

export default function NewProject() {
    scroll()
    let userid = window.localStorage.getItem('userid')
    let token = window.localStorage.getItem('usertoken')

    const initialValues = {
        name: "",
        Fecha: "",
        tecnologias: [],
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
        setImagen(Array.from(e.target.files).concat(Imagen))
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
        setCreacion(true);
        const NewProject = {
            name: values.name,
            imagen: Imagen,
            tecnology: techs,
            description: values.descripcion,
            shortDescripcion: values.shortDescripcion,
            repository: values.repositorio || "",
            deploying: values.deploy || "",
            userid: userid
        }
        NewProject.tecnology.push(values.tecnologias)
        console.log(NewProject);
        setTimeout(() => { setCreacion(false); }, 3000)
        postProject(NewProject)
        resetForm()
        setImagen([]);
    }
    const [techs, setTechs] = useState([])
    const [desplegarTechs, setDesplegarTechs] = useState(false)
    return (<>
        {!token ? <div className={styles.containerAllDiv}>
            <h1 className={styles.container}>Tiene que iniciar sesion para poder crear un proyecto</h1>
        </div> :
            <Formik
                initialValues={initialValues}
                validate={values => validate(values, Imagen)}

            >
                {({ values, handleChange, handleBlur, errors, touched, resetForm }) => (

                    <div className={styles.containerAll}>
                        <div className={styles.container}>
                            <div>
                                <h1 className={styles.title}>Comparti tu proyecto</h1>
                                <form onSubmit={e => e.preventDefault()} className={styles.container_I} >
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
                                    <div className={styles.errorcontainer}>
                                        {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
                                    </div>
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
                                    <div className={styles.errorcontainer}>
                                        {touched.shortDescripcion && errors.shortDescripcion && <p className={styles.error}>{errors.shortDescripcion}</p>}
                                    </div>
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
                                    <div className={styles.errorcontainer}>
                                        {/* {touched.descripcion && errors.descripcion && <p className={styles.error}>{errors.descripcion}</p>} */}
                                    </div>
                                    <div className={styles.form}>
                                        <div
                                            className={styles.files}
                                            onClick={() => setDesplegarTechs(true)}><AiOutlineSelect />Tecnologias utilizadas
                                        </div>
                                        <span className={styles.input_border}></span>
                                    </div>
                                    <div className={styles.errorcontainer}>
                                        {touched.tecnologias && errors.tecnologias && <p className={styles.error}>{errors.tecnologias}</p>}
                                    </div>
                                    {desplegarTechs &&
                                        <div>
                                            <ModalTechnologies
                                                techs={techs}
                                                funcionSet={setTechs}
                                                desplegar={setDesplegarTechs}
                                            />
                                        </div>
                                    }
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
                                    <div className={styles.errorcontainer}>
                                        {touched.repositorio && errors.repositorio && <p className={styles.error}>{errors.repositorio}</p>}
                                    </div>
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
                                    <div className={styles.errorcontainer}>
                                        {touched.deploy && errors.deploy && <p className={styles.error}>{errors.deploy}</p>}
                                    </div>

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
                                        <div className={styles.cargarimagen}>
                                            <label htmlFor="input_images">
                                                <BiUpload />  Cargar imagenes
                                                <input hidden accept='image/*,video/*' id="input_images" type="file" name="imagen" onChange={handleInputImage} multiple />
                                            </label>
                                        </div>
                                    </aside>
                                    <div className={styles.errorcontainer}>
                                        {/* {touched.Imagen && errors.Imagen && <p className={styles.error}>{errors.Imagen}</p>} */}
                                    </div>

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
                                                console.log(e)
                                                if (e.type.split('/')[0] === 'image') {

                                                    return (
                                                        <img
                                                            className={styles.imagePreview}
                                                            key={index}
                                                            src={URL.createObjectURL(e)}
                                                            id={index}
                                                            alt=""
                                                            onClick={e => deletePhoto(e)} />
                                                    )
                                                } else {
                                                    return (
                                                        <video
                                                            className={styles.imagePreview}
                                                            key={index}
                                                            src={URL.createObjectURL(e)}
                                                            id={index}
                                                            alt=""
                                                            autoPlay={true}
                                                            onClick={e => deletePhoto(e)} />
                                                    )
                                                }
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
                                    <div className={styles.errorcontainer}>
                                        {creacion && <div className={styles.exito}>Proyecto creado con exito</div>}
                                        {errorSubmit && <div className={styles.error}>Completa de forma correcta los campos</div>}
                                    </div>
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
