import { createChatBotMessage } from 'react-chatbot-kit';
import LinkList from './LinkList';
import ResponseOptions from './ResponseOptions';
const { REACT_APP_BOT } = process.env

const botName = 'Timberli';

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Hola!! Soy ${botName}, estoy aqui para ayudar!`)],

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
                        url: `${REACT_APP_BOT}/register`, 
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
                    url: `${REACT_APP_BOT}/payment`, 
                    id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "registrado",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Login",
                        url: `${REACT_APP_BOT}/login`, 
                        id: 1,
                    },
                    {
                        text: "Compartir mi proyecto",
                        url: `${REACT_APP_BOT}/newProject`, 
                        id: 1,
                    },
                    {
                        text: "Votar y/o favear",
                        url: `${REACT_APP_BOT}/home`, 
                        id: 2,
                    },
                ],
            },
        },
        {
            widgetName: "noRegistrado",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Ver proyectos",
                        url: `${REACT_APP_BOT}/home`, //hay que acomodar para el deploy, solo estoy probando
                        id: 1,
                    },
                    {
                        text: "Ver comunidad",
                        url: `${REACT_APP_BOT}/community`, //hay que acomodar para el deploy, solo estoy probando
                        id: 2,
                    },
                    {
                        text: "Registrate",
                        url: `${REACT_APP_BOT}/register`, //hay que acomodar para el deploy, solo estoy probando
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "timberli",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Conocenos",
                        url: `${REACT_APP_BOT}/about`, //hay que acomodar para el deploy, solo estoy probando
                        id: 1,
                    },
                ],
            },
        },
    ],
};

export default config;