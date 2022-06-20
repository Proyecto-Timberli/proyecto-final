import React, { Fragment } from 'react';
import LandingPage from './landingPage/LandingPage';
import Inicio from './inicio/inicio.js';



const Index = () => {
    const logged = false
    return (
        <Fragment>
            {logged ? <Inicio /> : <LandingPage />}
        </Fragment>
    );
}

export default Index;