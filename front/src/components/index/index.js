import React, { Fragment } from 'react';
import LandingPage from './landingPage/LandingPage';
import Inicio from './inicio/inicio.js';
import { useSelector } from 'react-redux';



const Index = () => {
    const userId = useSelector(state => state.loggedUserId)

    return (
        <Fragment>
            {userId ? <Inicio /> : <LandingPage />}
        </Fragment>
    );
}

export default Index;