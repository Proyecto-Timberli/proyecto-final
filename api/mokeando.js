const { User, Project } = require('./src/db.js');
const mokeando = async () => {

  const user_description_1 = "Hola! Esta es mi descripcion generica. Soy una persona muy profesional y me apasiona este rubro! No duden en contratarme, por favor"
  const user_description_2 = "La descripcion generica, pero con un lorem! Claramente no hay mucho mas que contar sobre mí: Auris dapibus feugiat metus et venenatis. Sed in risus turpis. Praesent viverra commodo ipsum, et condimentum velit. Nulla condimentum nunc non vulputate scelerisque. Morbi dignissim ex et erat lacinia ornare. Nulla et quam quam. \n\nMorbi dictum, nulla lacinia vulputate hendrerit, purus felis accumsan nisi, vel vehicula neque nisl ac lectus. Sed egestas velit non convallis imperdiet. Quisque ante eros, sodales vel ligula vel, ornare fermentum erat. Fusce viverra vehicula imperdiet. Morbi nec erat nisl. Cras sed velit ac leo dapibus mollis a a dolor. Maecenas molestie mattis ligula, non vestibulum urna volutpat sed. Ut in convallis velit, sit amet pretium risus. Praesent massa mauris, ullamcorper eu finibus placerat, congue nec magna. Pellentesque posuere, risus nec suscipit rutrum, ligula dolor pretium elit, a iaculis ex ex a est."
  const user_description_3 = "Me gusta la programacion, soy pro activo y intento invocar en la industria, pero en la musical, hice un cover de esta cancion =Nunca quise tanto a nadie como vos, por eso es que empiezo a dudar. Seremos hermanos que nos separaron y nosotros sin saberlo volvimos a encontrar? tu Sangre es roja, la mia tambien, no me equivocom algo tendremos que ver"
  const user_description_4 = "Este es un lorem corto, bueno, tecnicamente no es un lorem"
  const user_description_5 = "Nullam dapibus egestas nibh, at molestie neque pharetra eu. Etiam eget metus a nisi vulputate posuere. \n\n Suspendisse scelerisque lorem et urna hendrerit mattis. Aliquam cursus, libero dapibus ultricies vestibulum, augue ipsum tristique orci, sit amet feugiat purus nisi ac purus. Donec eu tincidunt ex. Duis semper erat quis sagittis ultrices. Nullam ut tristique nisl. Nunc venenatis dolor eu justo molestie, et sodales nulla aliquet. Donec pharetra libero lorem, at finibus libero iaculis vulputate. Duis pharetra non velit eget maximus. Quisque tristique ligula non ligula sagittis, ut vehicula lorem tristique. Aenean vel laoreet eros, nec mattis dolor. Sed et scelerisque eros. Nullam faucibus sit amet nibh ac tempor.\n\n In ut leo tortor. Nunc et ex vitae magna vulputate suscipit. Integer consectetur felis sit amet diam finibus, ut porttitor sem fermentum. Nulla eleifend quam vel sagittis tempus. Mauris consectetur facilisis ipsum porta hendrerit. Cras mauris est, fermentum et lobortis quis, fermentum in nunc. Sed viverra quam id ullamcorper faucibus. Fusce sed urna tincidunt massa posuere viverra."


  const users = [
    {
      name: "Luciano",
/*       userName: "luciano", */
      mail: "luciano@mail.com",
      password: "password",
      linkedin: "none",
      github: "none",
      stack: "Javascript, HTML y CSS",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_1,
    },
    {
      name: "Cristobal",
/*       userName: "Saposan", */
      mail: "cristobal.herreros@gmail.com",
      password: "aVerySecurePassword",
      linkedin: "https://www.linkedin.com/in/crist%C3%B3bal-herreros-viviani-50122b1b7/",
      github: "https://github.com/Sapo-san",
      stack: "Javascript, HTML y CSS. Me manejo con React, Redux, Node.js, Express.js y Sequelize (PostgreSQL). También he trabajado con Ruby on Rails",
      image: "https://avatars.githubusercontent.com/u/35698291?s=400&u=07f6bc6d8944fb3fe1363dd49357bebb0b11732b&v=4",
      description: user_description_2,
    },
    {
      name: "Lucas",
/*       userName: "soylucas", */
      mail: "soylucas@hotmail.com",
      password: "contraseña",
      linkedin: "Tengo linkedin!",
      github: "none",
      stack: "Ruby on Rails y Vue3",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_3,
    },
    {
      name: "María",
/*       userName: "soymaria", */
      mail: "soymaría@gmail.com",
      password: "password",
      linkedin: "none",
      github: "Tengo hitgun",
      stack: "Javascript y React",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_4,
    },
    {
      name: "Roberto",
/*       userName: "RRobert", */
      mail: "roberto123@hotmail.com",
      password: "papasword",
      linkedin: "!!!",
      github: "none",
      stack: "Python",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_5,
    },
    {
      name: "Anita",
/*       userName: "An1", */
      mail: "an1t4@gmail.com",
      password: "simplePassword",
      linkedin: "none",
      github: "1234124",
      stack: "Javascript, Python",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_1,
    },
    {
      name: "Consuelo",
/*       userName: "Coni", */
      mail: "conilalaurita@hotmail.com",
      password: "averysimplepassword",
      linkedin: "Hola!",
      github: "adios",
      stack: "Javascript, HTML y CSS",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_2,
    },
    {
      name: "Julio",
/*       userName: "JuliusCaesar", */
      mail: "juliuscaesar@romanempire.com",
      password: "brutusiwillhavemyrevenge",
      linkedin: "none",
      github: "none",
      stack: "none",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_3,
    },
    {
      name: "Alejandro",
/*       userName: "AlexanderTheGreat", */
      mail: "alexander33@gmail.com",
      password: "simplepassword",
      linkedin: "none",
      github: "none",
      stack: "none",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
    },
    {
      name: "Cleopatra",
/*       userName: "c1eopatra", */
      mail: "queenofegypt@hotmail.com",
      password: "milk-baths",
      linkedin: "none",
      github: "none",
      stack: "Javascript, React. HTML y CSS.",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_4,
    },
    {
      name: "notBill",
/*       userName: "NotBillGates", */
      mail: "iamnotbillgates@microsoft.com",
      password: "i-lied",
      linkedin: "none",
      github: "none",
      stack: "De todo un poco",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      description: user_description_5,
    },
    {
      name: "Bastián",
/*       userName: "bastyJr", */
      mail: "bastianprogrammer@gmail.com",
      password: "randomHashMadeByPasswordManager",
      linkedin: "none",
      github: "none",
      stack: "Python y Javascript",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"
    }


  ]
  const projects = [
    {
      name: "Henry Food",
      tecnology: "React, Redux, Express.js",
      description: "Proyecto Henry Foods para mostrar como ejemplo en clases",
      repository: "https://github.com/LucianoMocchegiani/PI_Food",
      score: [5, 3, 3],
      deploying: "https://client-food-project.herokuapp.com/",
      imagen: ["https://i.postimg.cc/rpLvYMnK/Captura-de-pantalla-de-2022-06-11-19-45-04.png",
        "https://i.postimg.cc/HsqKVTCB/Captura-de-pantalla-de-2022-06-11-19-45-06.png",
        "https://i.postimg.cc/nVwNfvS8/Captura-de-pantalla-de-2022-06-11-19-46-05.png",
        "https://i.postimg.cc/sx18ZXX0/Captura-de-pantalla-de-2022-06-11-19-46-33.png",
        "https://i.postimg.cc/8PJ9pjx7/Captura-de-pantalla-de-2022-06-11-19-46-52.png",
        "https://i.postimg.cc/VkXht2f1/Captura-de-pantalla-de-2022-06-11-19-47-28.png",
        "https://i.postimg.cc/hvwY8BQ4/Captura-de-pantalla-de-2022-06-11-19-48-17.png"
      ]
    },
    {
      name: "E-commerce genérico",
      tecnology: "React, Redux, Express.js",
      description: "E-commerce genérico, clon de mercado libre :)",
      repository: "none",
      score: [4, 1, 2],
      deploying: "https://mercadolibre.com/",
      imagen: ["https://i.postimg.cc/qv4kzPyV/Captura-de-pantalla-de-2022-06-11-20-10-50.png",
        "https://i.postimg.cc/HLtdwB0c/Captura-de-pantalla-de-2022-06-11-20-11-10.png",
        "https://i.postimg.cc/xdFYpq7n/Captura-de-pantalla-de-2022-06-11-20-11-16.png",
        "https://i.postimg.cc/RVcSCS3L/Captura-de-pantalla-de-2022-06-11-20-11-23.png",
        "https://i.postimg.cc/sfmGj4t2/Captura-de-pantalla-de-2022-06-11-20-11-35.png",
        "https://i.postimg.cc/B6cL1TbM/Captura-de-pantalla-de-2022-06-11-20-12-08.png",
        "https://i.postimg.cc/CMnMtHSt/Captura-de-pantalla-de-2022-06-11-20-11-56.png"
      ]
    },
    {
      name: "E-commerce genérico 2",
      tecnology: "Ruby on Rails",
      description: "E-commerce genérico, clon de Amazon",
      repository: "none",
      score: [4, 4, 5],
      deploying: "https://www.amazon.com/",
      imagen: ["https://i.postimg.cc/J49rMy4n/Captura-de-pantalla-de-2022-06-11-20-12-58.png",
        "https://i.postimg.cc/nh4Jx0PR/Captura-de-pantalla-de-2022-06-11-20-12-37.png",
        "https://i.postimg.cc/wxw38Tmy/Captura-de-pantalla-de-2022-06-11-20-13-06.png",
        "https://i.postimg.cc/FKbsP9vK/Captura-de-pantalla-de-2022-06-11-20-13-13.png",
        "https://i.postimg.cc/cCxK7v8Z/Captura-de-pantalla-de-2022-06-11-20-13-17.png"
      ]
    },
    {
      name: "ProfileLibrary",
      tecnology: "React, Redux, Express.js",
      description: "Red Social genérica, clon de Facebook/Linked-in",
      repository: "none",
      score: [5, 5, 3],
      deploying: "https://www.facebook.com/",
      imagen: ["https://i.postimg.cc/6517R56J/Captura-de-pantalla-de-2022-06-11-20-10-08.png",
        "https://i.postimg.cc/2yS6bgPS/Captura-de-pantalla-de-2022-06-11-20-09-37.png",
        "https://i.postimg.cc/Z5HJ3wx9/Captura-de-pantalla-de-2022-06-11-20-09-21.png",
        "https://i.postimg.cc/0NNPC7VV/Captura-de-pantalla-de-2022-06-11-20-09-15.png",
        "https://i.postimg.cc/k5C7RkSP/Captura-de-pantalla-de-2022-06-11-20-09-13.png"
      ]
    },
    {
      name: "React project",
      tecnology: "React",
      description: "Proyecto creado con create-react-app",
      repository: "none",
      score: [4, 3, 3],
      deploying: "https://es.reactjs.org/",
      imagen: ["https://i.postimg.cc/sgQMJd1B/Captura-de-pantalla-de-2022-06-11-20-15-37.png",
        "https://i.postimg.cc/jdjwLJb4/Captura-de-pantalla-de-2022-06-11-20-15-40.png",
        "https://i.postimg.cc/xCR8d9pZ/Captura-de-pantalla-de-2022-06-11-20-15-44.png",
        "https://i.postimg.cc/26m3m1Gv/Captura-de-pantalla-de-2022-06-11-20-15-47.png",
        "https://i.postimg.cc/Jhjt9NNM/Captura-de-pantalla-de-2022-06-11-20-15-50.png"
      ]
    },
    {
      name: "Hello World.js",
      tecnology: "React, Redux, Express.js",
      description: "Proyecto para aprender a programar con Javascript",
      repository: "none",
      score: [1, 2, 3],
      deploying: "https://www.soyhenry.com/",
      imagen: ["https://i.postimg.cc/VkWkgfmk/Captura-de-pantalla-de-2022-06-11-20-14-20.png",
        "https://i.postimg.cc/Bn0v2LWz/Captura-de-pantalla-de-2022-06-11-20-14-22.png",
        "https://i.postimg.cc/g0ckBC2q/Captura-de-pantalla-de-2022-06-11-20-14-31.png",
        "https://i.postimg.cc/zvxyxqnh/Captura-de-pantalla-de-2022-06-11-20-14-35.png",
        "https://i.postimg.cc/FRR5jms8/Captura-de-pantalla-de-2022-06-11-20-14-50.png",
        "https://i.postimg.cc/FHM7WWJT/Captura-de-pantalla-de-2022-06-11-20-14-55.png",
        "https://i.postimg.cc/Pxrh2YK6/Captura-de-pantalla-de-2022-06-11-20-14-59.png"
      ]
    },
    {
      name: "BlueBird",
      tecnology: "Ruby on Rails",
      description: "Clon de twitter pero mejor (?)",
      repository: "none",
      score: [3, 3, 3],
      deploying: "https://twitter.com/",
      imagen: ["https://i.postimg.cc/HkPtV25H/Captura-de-pantalla-de-2022-06-11-19-55-33.png",
        "https://i.postimg.cc/hvXnqnkT/Captura-de-pantalla-de-2022-06-11-19-56-04.png",
        "https://i.postimg.cc/Yqj0pK6X/Captura-de-pantalla-de-2022-06-11-19-56-29.png",
        "https://i.postimg.cc/Bb7vxM0c/Captura-de-pantalla-de-2022-06-11-19-57-05.png",
        "https://i.postimg.cc/C1mMgmzT/Captura-de-pantalla-de-2022-06-11-19-56-48.png"
      ]
    }
  ]
  for (let i = 0; i < users.length; i++) {
    let arrayProjects = []
    for (let j = 0; j < projects.length; j++) {
      arrayProjects.push(await Project.create(projects[j]))
    }
    let user = await User.create(users[i])
    await user.addProjects(arrayProjects)
  }
}
module.exports = mokeando

