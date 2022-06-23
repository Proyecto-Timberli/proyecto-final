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
        const greetingMessage = this.createChatBotMessage('Hola!! Decime en que te puedo ayudar:', 
        {
            widget: "responseOptions",
        });
        this.updateChatbotState(greetingMessage);
    }

    handlePublicarProyecto = () => {
        const message = this.createChatBotMessage(
          "Para publicar un proyecto, es necesario que te registres:",
          {
            widget: "publicarProyecto",
          }
        );
        this.updateChatbotState(message);
    };

    handleContribuciones = () => {
        const message = this.createChatBotMessage(
          "Buenas noticias, la plataforma es totalmente gratuita! Pero si aceptamos contribuciones para mejorar nuestro servicio: ",
          {
            widget: "contribuciones",
          }
        );
        this.updateChatbotState(message);
    };
    
    updateChatbotState(message) {
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}
  
export default ActionProvider;
