import { createChatBotMessage } from 'react-chatbot-kit';
import LinkList from './LinkList';
import ResponseOptions from './ResponseOptions';

const botName = 'Timberli';

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Soy ${botName}! Estoy aca para ayudar.`)],

    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#376B7E',
        },
    },

    widgets: [
        {
            widgetName: "responseOptions",
            widgetFunc: (props) => <ResponseOptions {...props} />,
        },
        {
            widgetName: "publicarProyecto",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
              options: [
                {
                  text: "Registrate",
                  url:
                    `http://localhost:3000/register`, //hay que acomodar para el deploy, solo estoy probando
                  id: 1,
                },
              ],
            },
        },
        {
            widgetName: "contribuciones",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
              options: [
                {
                  text: "Contribuir",
                  url:
                    `http://localhost:3000/payment`, //hay que acomodar para el deploy, solo estoy probando
                  id: 1,
                },
              ],
            },
        },
    ],
};

export default config;