
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('hola') || lowerCaseMessage.includes('como va') || lowerCaseMessage.includes('todo bien')) {
            return this.actionProvider.handleHello();
        } else if (lowerCaseMessage.includes('proyecto') || lowerCaseMessage.includes('trabajos'))  {
            return this.actionProvider.handlePublicarProyecto();
        } else if (lowerCaseMessage.includes('registrarme') || lowerCaseMessage.includes('registro') || lowerCaseMessage.includes('registrar'))  {
            return this.actionProvider.handleNoRegistrado();
        } else if (lowerCaseMessage.includes('registrado') || lowerCaseMessage.includes('login') || lowerCaseMessage.includes('log in')) {
            return this.actionProvider.handleRegistrado();
        } else if (lowerCaseMessage.includes('precio') || lowerCaseMessage.includes('valor') || lowerCaseMessage.includes('cuesta') || lowerCaseMessage.includes('sale') || lowerCaseMessage.includes('pagar') || lowerCaseMessage.includes('pago')) {
            return this.actionProvider.handleContribuciones();
        } else if (lowerCaseMessage.includes('timberli') || lowerCaseMessage.includes('equipo') || lowerCaseMessage.includes('persona') || lowerCaseMessage.includes('robot') || lowerCaseMessage.includes('llamas') || lowerCaseMessage.includes('nombre')) {
            return this.actionProvider.handleTimberli();
        } else if (lowerCaseMessage.includes('gracias') || lowerCaseMessage.includes('adios') || lowerCaseMessage.includes('chau')) {
            return this.actionProvider.handleSaludo();
        } else {
           return this.actionProvider.handleDefault();
        }


    }
}

export default MessageParser;

