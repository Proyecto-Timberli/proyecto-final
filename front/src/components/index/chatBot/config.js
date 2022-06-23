import { createChatBotMessage } from 'react-chatbot-kit';
import LinkList from './LinkList';
import ResponseOptions from './ResponseOptions';

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
                        url: `http://localhost:3000/register`, //hay que acomodar para el deploy, solo estoy probando
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
                    url: `http://localhost:3000/payment`, //hay que acomodar para el deploy, solo estoy probando
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
                        url: `http://localhost:3000/login`, //hay que acomodar para el deploy, solo estoy probando
                        id: 1,
                    },
                    {
                        text: "Compartir mi proyecto",
                        url: `http://localhost:3000/newProject`, //hay que acomodar para el deploy, solo estoy probando
                        id: 1,
                    },
                    {
                        text: "Votar y/o favear",
                        url: `http://localhost:3000/home`, //hay que acomodar para el deploy, solo estoy probando
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
                        url: `http://localhost:3000/home`, //hay que acomodar para el deploy, solo estoy probando
                        id: 1,
                    },
                    {
                        text: "Ver comunidad",
                        url: `http://localhost:3000/community`, //hay que acomodar para el deploy, solo estoy probando
                        id: 2,
                    },
                    {
                        text: "Registrate",
                        url: `http://localhost:3000/register`, //hay que acomodar para el deploy, solo estoy probando
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
                        url: `http://localhost:3000/about`, //hay que acomodar para el deploy, solo estoy probando
                        id: 1,
                    },
                ],
            },
        },
    ],
};

export default config;