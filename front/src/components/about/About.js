import React from 'react';
import './about.css';
import teamWork from '../../images/teamWork.gif'

export default function About() {
    return(
        <div className='containerAbout'>
            <div className='headerAbout'>
                <div className='textHeaderA'>
                    <h1>Sobre Timberli</h1>
                    <p className='textAbout'>Timberli es un proyecto que surge como idea para el trabajo final del bootcamp de desarrollo web full stack de SoyHenry.</p>
                </div>
                <div className='imageHeaderA'>
                    <img src={teamWork} alt='imagen Header About' className='imagenAbout'/>
                </div>
            </div>

            <div className='vision-mision-box'>
                <div className='vision'>
                    <h3>VISION</h3>
                    <p className='vision-text'>Ser la plataforma que los desarrolladores eligen para mostrar sus ideas innovadoras, encontrar inspiración e interactuar con la comunidad. </p>
                </div>
                <div className='vision'>
                    <h3>MISION</h3>
                    <p className='vision-text'>Permitir que los desarrolladores den a conocer sus proyectos y a la vez conecten con otros colegas y reclutadores de la comunidad IT a través de experiencias intuitivas y participativas.</p>
                </div>
            </div>

            <div className='team-box'>
                <h2>Conocé al equipo</h2>
                <div className='team-members'>
                    <div className='team-member'>
                        <img src='' alt='' className='memberImage'/>
                        <h4>Lucas Luna Clarasó</h4>
                        <p>Full stack dev.</p>
                        <a href='https://www.linkedin.com/in/lucas-luna-claras%C3%B3-03a846203/'>Linkedin</a>
                        <a href='https://github.com/lucaslunacl'>GitHub</a>
                    </div>
                    <div className='team-member'>
                        <img src='' alt='' className='memberImage'/>
                        <h4>Andres Gomez</h4>
                        <p>Full stack dev.</p>
                        <a href='https://www.linkedin.com/in/andres-gomez-guardamagna-32ab29234/'>Linkedin</a>
                        <a href='https://github.com/TheAndresG'>GitHub</a>
                    </div>
                    <div className='team-member'>
                        <img src='' alt='' className='memberImage'/>
                        <h4>Cristobal Herreros</h4>
                        <p>Full stack dev.</p>
                        <a href='https://www.linkedin.com/in/crist%C3%B3bal-herreros-viviani-50122b1b7/'>Linkedin</a>
                        <a href='https://github.com/Sapo-san'>GitHub</a>
                    </div>
                    <div className='team-member'>
                        <img src='' alt='' className='memberImage'/>
                        <h4>Luciano Mocchegiani</h4>
                        <p>Full stack dev.</p>
                        <a href='https://www.linkedin.com/in/luciano-mocchegiani-268bb921a/'>Linkedin</a>
                        <a href='https://github.com/LucianoMocchegiani'>GitHub</a>
                    </div>
                    <div className='team-member'>
                        <img src='' alt='' className='memberImage'/>
                        <h4>Juan Pablo Rodriguez</h4>
                        <p>Full stack dev.</p>
                        <a href='https://www.linkedin.com/in/juan-pablo-rodriguez-392a35234/'>Linkedin</a>
                        <a href='https://github.com/'>GitHub</a>
                    </div>
                    <div className='team-member'>
                        <img src='' alt='' className='memberImage'/>
                        <h4>Micaela Schaberger</h4>
                        <p>Full stack dev.</p>
                        <a href='https://www.linkedin.com/in/micaela-schaberger/'>Linkedin</a>
                        <a href='https://github.com/mschaberger'>GitHub</a>
                    </div>
                    <div className='team-member'>
                        <img src='' alt='' className='memberImage'/>
                        <h4>Roberto Vargas</h4>
                        <p>Full stack dev.</p>
                        <a href='https://www.linkedin.com/'>Linkedin</a>
                        <a href='https://github.com/'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}