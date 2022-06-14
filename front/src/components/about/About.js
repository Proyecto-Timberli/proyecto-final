import React from 'react';
import './about.css';
import teamWork from '../../images/teamWork.gif'
import profilePic from '../../images/profilePic.jpeg'
import linkedIn from '../../images/logotipo-de-linkedin.png'
import gitHub from '../../images/signo-de-github.png'
import { scroll } from "../../functions";

export default function About() {
    scroll()
    return (
        <div className='containerAbout'>
            <div className='headerAbout'>
                <div className='textHeaderA'>
                    <h1>Sobre Timberli</h1>
                    <p className='textAbout'>Es un proyecto que surge como idea para el trabajo final del bootcamp de desarrollo web full stack de SoyHenry.</p>
                </div>
                <div className='imageHeaderA'>
                    <img src={teamWork} alt='imagen Header About' className='imagenAbout' />
                </div>
            </div>

            <div className='vision-mision-box'>
                <div className='vision'>
                    <h3>VISION</h3>
                    <p className='vision-text'>Ser la plataforma que los desarrolladores eligen para mostrar sus ideas innovadoras, encontrar inspiración e interactuar con la comunidad. </p>
                </div>
                <div className='vision'>
                    <h3>MISION</h3>
                    <p className='vision-text'>Permitir que los desarrolladores den a conocer sus proyectos y a la vez conecten con colegas y reclutadores de la comunidad IT.</p>
                </div>
            </div>

            <div className='team-box'>
                <p className='team-title'>Conocé al equipo</p>
                <div className='team-members'>

                    <div className='team-member'>
                        <img src={profilePic} alt='' className='memberImage' />
                        <p className='member-name'>Lucas Luna Clarasó</p>
                        <p className='member-prof'>Full stack dev.</p>
                        <div className='member-social'>
                            <a href='https://www.linkedin.com/in/lucas-luna-claras%C3%B3-03a846203/' className='member-github'> <img src={linkedIn} width={30} alt='' /></a>
                            <a href='https://github.com/lucaslunacl' className='member-github'><img src={gitHub} width={30} alt='' /></a>
                        </div>
                    </div>

                    <div className='team-member'>
                        <img src={profilePic} alt='' className='memberImage' />
                        <p className='member-name'>Andres Gomez</p>
                        <p className='member-prof'>Full stack dev.</p>
                        <div className='member-social'>
                            <a href='https://www.linkedin.com/in/andres-gomez-guardamagna-32ab29234/' className='member-github'> <img src={linkedIn} width={30} alt='' /></a>
                            <a href='https://github.com/TheAndresG' className='member-github'><img src={gitHub} width={30} alt='' /></a>
                        </div>
                    </div>

                    <div className='team-member'>
                        <img src={profilePic} alt='' className='memberImage' />
                        <p className='member-name'>Cristobal Herreros</p>
                        <p className='member-prof'>Full stack dev.</p>
                        <div className='member-social'>
                            <a href='https://www.linkedin.com/in/crist%C3%B3bal-herreros-viviani-50122b1b7/' className='member-github'> <img src={linkedIn} width={30} alt='' /></a>
                            <a href='https://github.com/Sapo-san' className='member-github'><img src={gitHub} width={30} alt='' /></a>
                        </div>
                    </div>

                    <div className='team-member'>
                        <img src={profilePic} alt='' className='memberImage' />
                        <p className='member-name'>Luciano Mocchegiani</p>
                        <p className='member-prof'>Full stack dev.</p>
                        <div className='member-social'>
                            <a href='https://www.linkedin.com/in/luciano-mocchegiani-268bb921a/' className='member-github'> <img src={linkedIn} width={30} alt='' /></a>
                            <a href='https://github.com/LucianoMocchegiani' className='member-github'><img src={gitHub} width={30} alt='' /></a>
                        </div>
                    </div>

                    <div className='team-member'>
                        <img src={profilePic} alt='' className='memberImage' />
                        <p className='member-name'>Juan Pablo Rodriguez</p>
                        <p className='member-prof'>Full stack dev.</p>
                        <div className='member-social'>
                            <a href='https://www.linkedin.com/in/juan-pablo-rodriguez-392a35234/' className='member-github'> <img src={linkedIn} width={30} alt='' /></a>
                            <a href='https://github.com/' className='member-github'><img src={gitHub} width={30} alt='' /></a>
                        </div>
                    </div>

                    <div className='team-member'>
                        <img src={profilePic} alt='' className='memberImage' />
                        <p className='member-name'>Micaela Schaberger</p>
                        <p className='member-prof'>Full stack dev.</p>
                        <div className='member-social'>
                            <a href='https://www.linkedin.com/in/micaela-schaberger/' className='member-github'> <img src={linkedIn} width={30} alt='' /></a>
                            <a href='https://github.com/mschaberger' className='member-github'><img src={gitHub} width={30} alt='' /></a>
                        </div>
                    </div>

                    <div className='team-member'>
                        <img src={profilePic} alt='' className='memberImage' />
                        <p className='member-name'> Roberto Vargas </p>
                        <p className='member-prof'>Full stack dev.</p>
                        <div className='member-social'>
                            <a href='https://www.linkedin.com/' className='member-github'> <img src={linkedIn} width={30} alt='' /></a>
                            <a href='https://github.com/' className='member-github'> <img src={gitHub} width={30} alt='' /></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}