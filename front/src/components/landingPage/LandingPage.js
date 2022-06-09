import React from "react";
import './landingPage.css';
import { Link } from 'react-router-dom';
import imageLanding from '../../images/landingImageW.png';
import boxOneImage from '../../images/Clip_brainstorm_by_Icons8.gif';
import boxTwoImage from '../../images/landingImage.jpeg';
import boxThreeImage from '../../images/developers-gif-showcase.gif';


export default function LandingPage () {
    return(
        <div className="landingWrapper">
            <div className="landingTop">
                <div className="landingWelcome"> 
                    <h1>EXPLORE AND SHARE <br></br> YOUR PROJECTS.</h1>
                    <Link to='/home'>
                        <button className="btn-explore"> EXPLORE </button>
                    </Link>
                    <Link to='/register'>
                        <button className="btn-share"> SHARE </button>
                    </Link>
                    <Link to='/login'>
                        <button className="btn-login"> LOG IN </button>
                    </Link>
                </div>
                <div className="landingImage">
                    <img src={ imageLanding } className='imageL'alt='aca va la imagen'/>
                </div>
            </div>
            
            <div className="landingBody">
                <div className='intro'>
                    <h2>Why timberli?</h2>
                    <div className="sections">
                        <section className="section">
                            <h3>Explore portfolios </h3>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </section>
                        <section className="section"> 
                            <h3>Share your work</h3>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </section>
                        <section className="section">
                            <h3>Interact with developers</h3>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </section>
                    </div>
                </div>
                <div className="box-one">
                    <img src={ boxOneImage } className='imageBox1' alt='aca va la imagen'/>
                    <section className="boxSection">
                        <h2>What will you find?</h2>
                        <hr className="lineLanding"></hr>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link to='/home'>
                            <button className="btn-login"> Discover projects </button>
                        </Link>
                    </section>
                </div>

                <div className="box-two">
                    <section className="boxSection">
                        <h2>It's worth it</h2>
                        <hr className="lineLanding"></hr>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link to='/register'>
                            <button className="btn-login"> Leave your mark </button>
                        </Link>
                    </section>
                    <img src={ boxTwoImage } className='imageBox2' alt='aca va la imagen'/>
                </div>

                <div className="box-three">
                    <img src={ boxThreeImage } className='imageBox3' alt='aca va la imagen'/>
                    <section className="boxSection"> 
                        <h2>About us?</h2>
                        <hr className="lineLanding"></hr>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link to='/about'>
                            <button className="btn-login"> Learn more </button>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
};
