import React, { useState } from 'react'
import styles from "./NewProyect.module.css"





export default function NewProject() {
    const [input, setInput] = useState({
        name: "",
        Fecha: "",
        tecnologias: "",
        descripcion: "",
        repositorio: "",
        deploy: "",
    })

    const [Imagen, setImagen] = useState("");

    //OBTENIENDO LA IMAGEN
    const changeImagen = e => {
        setImagen([...e.target.files, ...Imagen]);
        console.log(e.target.files);
        console.log(Imagen);

    }

    function onChangeInput(e) {
        console.log(e.target.files)

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function deletePhoto(e) {
        let indexInput = e.target.id * 1;
        setImagen(Imagen.filter((photo, index) => {
            return index !== indexInput ? photo : false
        }))

    }
    function onSubmit(e) {
        e.preventDefault();
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
    return (<div className={styles.containerAll}>
        <div className={styles.container}>
            <div >
                <form className={styles.container_I}>
                    <h1>Tell us about your website</h1>
                    <label>
                        <div className={styles.form}>
                            <p>website name*</p>
                            <input
                                placeholder='Enter the name of your website'
                                name="name"
                                value={input.name}
                                onChange={e => onChangeInput(e)}
                                className={styles.input}>
                            </input>
                            <span className={styles.input_border}></span>
                        </div>
                    </label>


                    <label>
                        <p>description*</p>
                        <textarea

                            placeholder='description'
                            name="descripcion"
                            value={input.descripcion}
                            onChange={e => onChangeInput(e)}>
                        </textarea>
                    </label>



                    <label>
                        <div className={styles.form}>
                            <p>technologies*</p>

                            <input
                                placeholder='technologies used'
                                name="tecnologias"
                                value={input.tecnologias}
                                onChange={e => onChangeInput(e)}
                                className={styles.input}>
                            </input>
                            <span className={styles.input_border}></span>
                        </div>
                    </label>

                    <label>
                        <div className={styles.form}>

                            <p>repository</p>
                            <input
                                placeholder='repository url'
                                name="repositorio"
                                value={input.repositorio}
                                onChange={e => onChangeInput(e)}
                                className={styles.input}>

                            </input>
                            <span className={styles.input_border}></span>
                        </div>
                    </label>
                    <label>
                        <div className={styles.form}>

                            <p>deploy</p>
                            <input
                                placeholder='deploy url'
                                name="deploy"
                                value={input.deploy}
                                onChange={e => onChangeInput(e)}
                                className={styles.input}>

                            </input>
                            <span className={styles.input_border}></span>
                        </div>
                    </label>

                    <aside id="modal" className="modal">
                        <div className="content-modal">
                            <header>
                                <label htmlFor="input_images">
                                    upload photos of your project
                                    <input id="input_images" className={styles.inputImages} type="file" name="imagen" onChange={changeImagen} multiple hidden />
                                </label>
                            </header>
                        </div>
                    </aside>
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
                    <button onClick={e => onSubmit(e)}>Publicar</button>



                </form>
            </div>
            <div>
                <img src="https://cdn-icons.flaticon.com/png/512/3541/premium/3541461.png?token=exp=1654720622~hmac=48310e00e66c357d1492959ed0fc25d3"
                    alt="foto"
                    className={styles.image}></img>
            </div>
        </div >
    </div>
    )
}
