import React, { useEffect, useState } from "react";
import './landingPage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import imageLanding from './images/landingImageW.png';
import boxOneImage from './images/landingProjects.png';
import boxTwoImage from './images/landingCommunity.png';
import boxThreeImage from './images/landingAbout.png';
import { scroll } from "../../../functions";
import Chatbot from "../chatBot/ChatBot";


export default function LandingPage() {

    useEffect(() => {
        scroll()
    }, [])

    const logged = useSelector((state) => state.loggedUserId);

    const [botState, setBotState] = useState(false)

    const cambiarState = () => {
        if (botState === true) {
            setBotState(false)
        }
        else { setBotState(true) }
    }

    return (
        <div className="landingWrapper">
            <div className="landingTop">
                {logged ?
                    <div className="landingWelcome">
                        <h1>Explora miles de <br></br>proyectos y <br></br>comparti los tuyos.</h1>
                        <Link to='/home'>
                            <button className="btn-explore"> VER TODOS </button>
                        </Link>
                    </div>
                    :
                    <div className="landingWelcome">
                        <h1>Explora miles de <br></br>proyectos y <br></br>comparti los tuyos.</h1>
                        <Link to='/home'>
                            <button className="btn-explore"> VER TODOS </button>
                        </Link>
                        <Link to='/register'>
                            <button className="btn-share"> COMPARTIR </button>
                        </Link>
                        <Link to='/login'>
                            <button className="btn-login"> LOG IN </button>
                        </Link>
                    </div>
                }
                <div className="landingImage">
                    <img src={imageLanding} className='imageL' alt='aca va la imagen' />
                </div>
            </div>

            {botState ?
                <div>
                    <div className="caja-activada" onClick={e => cambiarState()}> CERRAR </div>
                    <div className="chatbot-landing" >
                        <Chatbot className='chatbot-style' />
                    </div> 
                </div>
                : <div className="caja-boton" onClick={e => cambiarState()}> Necesitas ayuda? </div> }

            <div className="landingBody">
                <div className='intro'>
                    <p className="landing-title">??POR QU?? TIMBERLI?</p>
                    <div className="sections">
                        <section className="section">
                            <h2>Explor?? portfolios </h2>
                            <p className="text">La plataforma te permite ver miles de proyectos, guardar tus favoritos e ingresar al perfil de un usuario y ver todo su trabajo. <br/> Encontr?? tus desarrolladores favoritos y ??salos de inspiraci??n!</p>
                        </section>
                        <section className="section">
                            <h2>Compart?? tus trabajos</h2>
                            <p className="text"> Hace m??s visibles tus proyectos mostrando im??genes y videos y recibiendo feedback de otros usuarios. <br/> Registrate y forma parte de esta comunidad! </p>
                        </section>
                        <section className="section">
                            <h2>Conect?? con la comunidad</h2>
                            <p className="text">Deja tu review en otros proyectos y recib?? feedback y puntuaci??n para tus trabajos. Se puede puntuar el dise??o, la funcionalidad y la originalidad.</p>
                        </section>
                    </div>
                </div>
                <div className="box-one">
                    <img src={boxOneImage} className='imageBox1' alt='aca va la imagen' />
                    <section className="boxSection">
                        <h2>??Qu?? vas a encontrar?</h2>
                        <hr className="lineLanding"></hr>
                        <p className="text">La plataforma te permite compartir tus proyectos de manera integral, podes incluir el link a la p??gina oficial y al repositorio, y adem??s incluir im??genes y videos para obtener m??s visibilidad y lograr un crecimiento real.</p>
                        <Link to='/home'>
                            <button className="btn-login"> Descubr?? </button>
                        </Link>
                    </section>
                </div>

                <div className="box-two">
                    <section className="boxSection">
                        <h2>Dej?? tu marca</h2>
                        <hr className="lineLanding"></hr>
                        <p className="text">Desarrolladores del mundo comparten sus trabajos en Timberli, interactuando con la comunidad y recibiendo feedback constructivo para sus proyectos. Conoc?? a tus colegas y d??jate llevar por la creatividad. Lo que encuentres podr??a sorprenderte e inspirarte.</p>
                        <Link to='/community'>
                            <button className="btn-login"> Forma parte </button>
                        </Link>
                    </section>
                    <img src={boxTwoImage} className='imageBox2' alt='aca va la imagen' />
                </div>

                <div className="box-three">
                    <img src={boxThreeImage} className='imageBox3' alt='aca va la imagen' />
                    <section className="boxSection">
                        <h2>Sobre Timberli</h2>
                        <hr className="lineLanding"></hr>
                        <p className="text">Es la plataforma donde los usuarios vienen para mostrar sus ideas innovadoras, encontrar inspiraci??n, feedback constructivo  y conectar con la comunidad. <br/> ??Quer??s saber m??s?</p>
                        <Link to='/about'>
                            <button className="btn-login"> Conocenos </button>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
};
