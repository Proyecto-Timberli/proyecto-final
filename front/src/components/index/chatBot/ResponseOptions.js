import React from "react";
import './css/responseOptions.css';

const ResponseOptions = (props) => {
    const options = [
        { 
            text: "La plataforma es gratuita?", 
            handler: props.actionProvider.handleContribuciones, 
            id: 1 },
        { 
            text: "Como publico mi proyecto?", 
            handler: props.actionProvider.handlePublicarProyecto,
            id: 2 
        },
        { 
            text: "Ya estoy registrado, como sigo?", 
            handler: props.actionProvider.handleRegistrado, 
            id: 3 },
        { 
            text: "Que puedo hacer sin resgistrarme?", 
            handler: props.actionProvider.handleNoRegistrado, 
            id: 4 
        },
    ];
    
    const optionsMarkup = options.map((option) => (
        <button
          className="learning-option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
    ));
    
    return (
        <div className="learning-options-container"> {optionsMarkup} </div>
    );
};

export default ResponseOptions;