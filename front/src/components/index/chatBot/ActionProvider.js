import 'react-chatbot-kit/build/main.css'

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }
  
    handleHello() {
        const greetingMessage = this.createChatBotMessage('Con que te puedo ayudar?', 
        {
            widget: "responseOptions",
        });
        this.updateChatbotState(greetingMessage);
    }

    handleTimberli() {
      const message = this.createChatBotMessage('Queres saber mas sobre mi y el equipo?',
        {
          widget:"timberli",
        }
      );
      this.updateChatbotState(message);
    }

    handlePublicarProyecto = () => {
        const message = this.createChatBotMessage("Para publicar un proyecto, es necesario que te registres:",
          {
            widget: "publicarProyecto",
          }
        );
        this.updateChatbotState(message);
    };

    handleContribuciones = () => {
        const message = this.createChatBotMessage("Buenas noticias, la plataforma es totalmente gratuita! Pero aceptamos contribuciones para mejorar nuestro servicio: ",
          {
            widget: "contribuciones",
          }
        );
        this.updateChatbotState(message);
    };
    
    handleRegistrado = () =>{
        const message = this.createChatBotMessage("Una vez registrado, podes compartir tus trabajos (no hay limite), guardar tus proyectos favoritos y dejar reviews en los trabajos de otros usuarios:",
            {
              widget: "registrado",
            }
          );
          this.updateChatbotState(message);
    };

    handleNoRegistrado = () =>{
        const message = this.createChatBotMessage("Sin estar registrado, podes ver miles de proyectos y conocer a los miembros de la comunidad:",
            {
              widget: "noRegistrado",
            }
          );
          this.updateChatbotState(message);
    };

    handleSaludo = () => {
      const message = this.createChatBotMessage("Un gusto ayudarte! Espero verte pronto.");
      this.updateChatbotState(message);

    }


    updateChatbotState(message) {
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}
  
export default ActionProvider;
