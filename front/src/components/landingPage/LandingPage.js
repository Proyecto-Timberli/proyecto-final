import React  from "react";
import './landingPage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import imageLanding from '../../images/landingImageW.png';
import boxOneImage from '../../images/Clip_brainstorm_by_Icons8.gif';
import boxTwoImage from '../../images/landingImage.jpeg';
import boxThreeImage from '../../images/developers-gif-showcase.gif';
import { scroll } from "../../functions";


export default function LandingPage() {
    scroll()
    const logged = useSelector((state) => state.loggedUserId);

    return (
        <div className="landingWrapper">
                <div className="landingTop">
                    {logged ?
                    <div className="landingWelcome">
                        <h1>Explorá miles de <br></br>proyectos y <br></br>compartí los tuyos.</h1>
                        <Link to='/home'>
                            <button className="btn-explore"> VER TODOS </button>
                        </Link>
                    </div>
                    :
                    <div className="landingWelcome">
                        <h1>Explorá miles de <br></br>proyectos y <br></br>compartí los tuyos.</h1>
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
                

            <div className="landingBody">
                <div className='intro'>
                    <p className="landing-title">¿POR QUÉ TIMBERLI?</p>
                    <div className="sections">
                        <section className="section">
                            <h2>Explorá portfolios </h2>
                            <p className="text">La plataforma te permite ver otros proyectos y también podes ingresar al perfil de un usuario y ver todo su portfolio. Puedes buscar a tus desarrolladores favoritos y usarlos de inspiración!</p>
                        </section>
                        <section className="section">
                            <h2>Compartí tus trabajos</h2>
                            <p className="text">Créate un usuario y forma parte de esta comunidad! Vas a aumentar la visualización de tus proyectos, recibir feedback y participar en la votación de los mejores proyectos semanales.</p>
                        </section>
                        <section className="section">
                            <h2>Conectá con la comunidad</h2>
                            <p className="text">Recibi feedback de personas del rubro y puntuación para todos tus proyectos. Se califica el diseño, funcionalidad y originalidad.</p>
                        </section>
                    </div>
                </div>
                <div className="box-one">
                    <img src={boxOneImage} className='imageBox1' alt='aca va la imagen' />
                    <section className="boxSection">
                        <h2>¿Qué vas a encontrar?</h2>
                        <hr className="lineLanding"></hr>
                        <p className="text">Conocé los proyectos de tus colegas y déjate llevar por la creatividad. Lo que encuentres simplemente podría sorprenderte e inspirarte.</p>
                        <Link to='/home'>
                            <button className="btn-login"> Descubrí </button>
                        </Link>
                    </section>
                </div>

                <div className="box-two">
                    <section className="boxSection">
                        <h2>Dejá tu marca</h2>
                        <hr className="lineLanding"></hr>
                        <p className="text">Con tanto que explorar, proyectos reales que crear y el apoyo de la comunidad, la plataforma Timberli te permite compartir tus proyectos, obtener feedback y lograr un crecimiento real.</p>
                        <Link to='/register'>
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
                        <p className="text">Es la plataforma donde los usuarios vienen para mostrar sus ideas innovadoras, encontrar inspiración, feedback constructivo  y conectar con la comunidad. <br></br> ¿Querés saber más?</p>
                        <Link to='/about'>
                            <button className="btn-login"> Conocenos </button>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
};
