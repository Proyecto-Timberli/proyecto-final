const { User, Project } = require('./src/db.js');
const mokeando = async () => {

  const user_description_1 = "Hola! Esta es mi descripcion generica. Soy una persona muy profesional y me apasiona este rubro! No duden en contratarme, por favor"
  const user_description_2 = "La descripcion generica, pero con un lorem! Claramente no hay mucho mas que contar sobre mí: Auris dapibus feugiat metus et venenatis. Sed in risus turpis. Praesent viverra commodo ipsum, et condimentum velit. Nulla condimentum nunc non vulputate scelerisque. Morbi dignissim ex et erat lacinia ornare. Nulla et quam quam. \n\nMorbi dictum, nulla lacinia vulputate hendrerit, purus felis accumsan nisi, vel vehicula neque nisl ac lectus. Sed egestas velit non convallis imperdiet. Quisque ante eros, sodales vel ligula vel, ornare fermentum erat. Fusce viverra vehicula imperdiet. Morbi nec erat nisl. Cras sed velit ac leo dapibus mollis a a dolor. Maecenas molestie mattis ligula, non vestibulum urna volutpat sed. Ut in convallis velit, sit amet pretium risus. Praesent massa mauris, ullamcorper eu finibus placerat, congue nec magna. Pellentesque posuere, risus nec suscipit rutrum, ligula dolor pretium elit, a iaculis ex ex a est."
  const user_description_3 = "Me gusta la programacion, soy pro activo y intento invocar en la industria, pero en la musical, hice un cover de esta cancion =Nunca quise tanto a nadie como vos, por eso es que empiezo a dudar. Seremos hermanos que nos separaron y nosotros sin saberlo volvimos a encontrar? tu Sangre es roja, la mia tambien, no me equivocom algo tendremos que ver"
  const user_description_4 = "Este es un lorem corto, bueno, tecnicamente no es un lorem"
  const user_description_5 = "Nullam dapibus egestas nibh, at molestie neque pharetra eu. Etiam eget metus a nisi vulputate posuere. \n\n Suspendisse scelerisque lorem et urna hendrerit mattis. Aliquam cursus, libero dapibus ultricies vestibulum, augue ipsum tristique orci, sit amet feugiat purus nisi ac purus. Donec eu tincidunt ex. Duis semper erat quis sagittis ultrices. Nullam ut tristique nisl. Nunc venenatis dolor eu justo molestie, et sodales nulla aliquet. Donec pharetra libero lorem, at finibus libero iaculis vulputate. Duis pharetra non velit eget maximus. Quisque tristique ligula non ligula sagittis, ut vehicula lorem tristique. Aenean vel laoreet eros, nec mattis dolor. Sed et scelerisque eros. Nullam faucibus sit amet nibh ac tempor.\n\n In ut leo tortor. Nunc et ex vitae magna vulputate suscipit. Integer consectetur felis sit amet diam finibus, ut porttitor sem fermentum. Nulla eleifend quam vel sagittis tempus. Mauris consectetur facilisis ipsum porta hendrerit. Cras mauris est, fermentum et lobortis quis, fermentum in nunc. Sed viverra quam id ullamcorper faucibus. Fusce sed urna tincidunt massa posuere viverra."


  const users = [
    {
      name: "Tommy Shelby",
      userName: "Tshelby22",
      mail: "Tshelby@mail.com",
      password: "password",
      image: "https://static.wikia.nocookie.net/peaky-blinders/images/8/8e/Tommys3.jpg/revision/latest?cb=20190715140230",
      description: "Thomas Michael Shelby, OBE, DCM, MM, MP. Manejo distintas tecnologias como: Vue, Angular, Wordpress",
      linkedin: "",
      github: "https://github.com/",
      rol: "Frontend Developer"
    },
    {
      name: "Ada shelby",
      serName: "Ashelby24",
      mail: "adashelby24@mail.com",
      password: "password",
      image: "https://static.wikia.nocookie.net/peaky-blinders/images/d/df/Ada5.jpg/revision/latest?cb=20190924183542",
      description: "Mi nombre es Ada y soy desarrolladora web. Tengo 5 años de experiencia utilizando las siguientes tecnologías: REACT.JS y REACT NATIVE, Redux, MongoDB, MySQL",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
      rol: "Full-Stack Developer"
    },
    {
      name: "Arthur Shelby Jr",
      userName: "AshelbyJr",
      mail: "arturojunior@mail.com",
      password: "password",
      image: "https://cdn-www.comingsoon.net/assets/uploads/2021/05/arthurshelby.jpg",
      description: "Hola! Soy Arturo, ingeniero en sistemas con más de 10 años de experiencia en el mundo IT. Me especializo en backend y manejo distintas tecnologías pero además desarrolle a lo largo de los años muchos soft skills. Si te gustan mis proyectos no dudes en ponerte en contacto!",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
      rol: "Backend Developer"
    },
    {
      name: "Luciano",
      userName: "luciano",
      mail: "luciano@mail.com",
      password: "password",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      image: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg",
      description: "Javascript, HTML y CSS",
    },
    {
      name: "Cristobal",
      userName: "Saposan",
      mail: "cristobal.herreros@gmail.com",
      password: "aVerySecurePassword",
      linkedin: "https://www.linkedin.com/in/crist%C3%B3bal-herreros-viviani-50122b1b7/",
      github: "https://github.com/Sapo-san",
      Description: "Javascript, HTML y CSS. Me manejo con React, Redux, Node.js, Express.js y Sequelize (PostgreSQL). También he trabajado con Ruby on Rails",
      image: "https://avatars.githubusercontent.com/u/35698291?s=400&u=07f6bc6d8944fb3fe1363dd49357bebb0b11732b&v=4",
    },
    {
      name: "Lucas",
      userName: "soylucas",
      mail: "soylucas@hotmail.com",
      password: "contraseña",
      linkedin: "Tengo linkedin!",
      github: "https://github.com/",
      description: "Hola! Soy ingeniero en sistemas con más de 10 años de experiencia en el mundo IT. Me especializo en backend y manejo distintas tecnologías pero además desarrolle a lo largo de los años muchos soft skills. Si te gustan mis proyectos no dudes en ponerte en contacto! Aprendiendo Ruby on Rails y Vue3",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
    },
    {
      name: "María",
      userName: "soymaria",
      mail: "soymaría@gmail.com",
      password: "password",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "Hola a todos! Me considero una persona creativa y resolutiva, que disfruta mucho del trabajo en equipo. soy experta en Javascript y estoy aprendiendo Python. Me inclino mas por el frontend que por el back, pero soy desarrolladora full stack.",
      image: "https://i.pinimg.com/736x/a6/5e/ba/a65ebae219c97f8624f32140e80889a9.jpg",
    },
    {
      name: "Roberto",
      userName: "RRobert",
      mail: "roberto123@hotmail.com",
      password: "papasword",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "Hola! Soy ingeniero en sistemas con más de 10 años de experiencia en el mundo IT. Me especializo en backend y manejo distintas tecnologías pero además desarrolle a lo largo de los años muchos soft skills. Si te gustan mis proyectos no dudes en ponerte en contacto! Aprendiendo Ruby on Rails y Vue3",
      image: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg",
    },
    {
      name: "Anita",
      userType: "suspended",
      userName: "An1",
      mail: "an1t4@gmail.com",
      password: "simplePassword",
      linkedin: "none",
      github: "https://github.com/",
      description: "Hola a todos! Me considero una persona creativa y resolutiva, que disfruta mucho del trabajo en equipo. soy experta en Javascript y estoy aprendiendo Python. Me inclino mas por el frontend que por el back, pero soy desarrolladora full stack.",
      image: "https://i.pinimg.com/736x/a6/5e/ba/a65ebae219c97f8624f32140e80889a9.jpg",
    },

    {
      name: "Julio",
      userName: "JuliusCaesar",
      mail: "juliuscaesar@romanempire.com",
      password: "brutusiwillhavemyrevenge",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "Mi nombre es Julio tengo mucha experiencia en desarrollo web, sobre todo backend. Me encuentro en cosntante capacitación, busco desarrollar mis skills como frontend web y mobile developer.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RNWGgfi3nOLGtj3YnhauaC9HWurFHaJ--V6FrPaWILiaaqKbvZEmIeR5QVdlRpdMFOg&usqp=CAU",

    },
    {
      name: "Alejandro",
      userName: "AlexanderTheGreat",
      mail: "alexander33@gmail.com",
      password: "simplepassword",
      linkedin: "none",
      github: "https://github.com/",
      description: "Hola! Soy ingeniero en sistemas con más de 10 años de experiencia en el mundo IT. Me especializo en backend y manejo distintas tecnologías pero además desarrolle a lo largo de los años muchos soft skills. Si te gustan mis proyectos no dudes en ponerte en contacto! Aprendiendo Ruby on Rails y Vue3",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
    },
    {
      name: "Cleopatra",
      userName: "c1eopatra",
      mail: "queenofegypt@hotmail.com",
      password: "milk-baths",
      linkedin: "none",
      github: "none",
      description: "Hola a todos! Me considero una persona creativa y resolutiva, que disfruta mucho del trabajo en equipo. soy experta en Javascript y estoy aprendiendo Python. Me inclino mas por el frontend que por el back, pero soy desarrolladora full stack. HTML y CSS.",
      image: "https://i.pinimg.com/736x/a6/5e/ba/a65ebae219c97f8624f32140e80889a9.jpg",
    },
    {
      name: "Billy",
      userName: "NotBillGates",
      mail: "iamnotbillgates@microsoft.com",
      password: "i-lied",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "Bienvenidos a mi portfolio profesional. Manejo de todo un poco, pero me especializo en backend. Soy experto en tecnologias como MongoDB, PostgreSQL, NodeJS y expressJS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RNWGgfi3nOLGtj3YnhauaC9HWurFHaJ--V6FrPaWILiaaqKbvZEmIeR5QVdlRpdMFOg&usqp=CAU",

    },
    {
      name: "Bastián",
      userName: "bastyJr",
      mail: "bastianprogrammer@gmail.com",
      password: "randomHashMadeByPasswordManager",
      linkedin: "none",
      github: "https://github.com/",
      description: "Hola! Soy ingeniero en sistemas con más de 10 años de experiencia en el mundo IT. Me especializo en backend y manejo distintas tecnologías pero además desarrolle a lo largo de los años muchos soft skills. Si te gustan mis proyectos no dudes en ponerte en contacto! Aprendiendo Ruby on Rails y Vue3",
      image: "https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/simpson-rock.jpg"
    },
    {
      name: "Micaela Schaberger",
      userName: "mschaberger",
      mail: "micaela.schaberger@gmail.com",
      password: "password",
      image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
      description: "Hola! Soy Micaela, soy licenciada en gestión ambiental y estudiante de desarrollo web Full Stack. SKILLS: HTML | CSS | JavaScript | ReactJS | Redux | Bootstrap, NodeJS | Express | MySQL | PostgreSQL, GIT | SCRUM, ¡No dudes en contactarme! 🚀",
      linkedin: "https://www.linkedin.com/in/micaela-schaberger/",
      github: "https://github.com/mschaberger",
      rol: "Full-Stack Developer"
    },
  ];

  const projects = [
    {
      name: "Henry Food",
      tecnology: "React, Redux, Express.js",
      shortDescription: "Proyecto Henry Foods para mostrar como ejemplo en clases",
      description: "SPA que consume datos de una API y renderiza recetas con algunos datos en el home. Permite buscar recetas, ordenarlas alfabeticamente y por healthscore y filtrar por tipo de dieta. Se puede ingresar al detalle de cada receta donde se muestra mas información. El usuario puede crear su propia receta. ",
      repository: "https://github.com/LucianoMocchegiani/PI_Food",
      score: [5, 3, 3],
      deploying: "https://client-food-project.herokuapp.com/",
      projectType: "Catálogo",
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
      name: "ML 2.0",
      tecnology: "React, Redux, Express.js",
      shortDescription: "Clon de mercado libre :)",
      description: "Se intento copiar lo mas parecido posible la pagina web de ML, imitando el diseño y las funcionalidades. Trabajo realizado en equipo, como parte del proyecto final de un BOOTCAMP de IT.",
      repository: "none",
      score: [4, 1, 2],
      deploying: "https://mercadolibre.com/",
      projectType: "Imitacion",
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
      name: "Armazon 2.0",
      tecnology: "Ruby on Rails",
      shortDescription: "Clon de Amazon",
      description: "Se intento copiar lo mas parecido posible la pagina web de amazon, imitando el diseño y las funcionalidades. Muy desafiante ya que se usaron tecnologias distintas a las que usamos regularmente. Trabajo realizado en equipo, como parte del proyecto final de un BOOTCAMP de IT.",
      repository: "none",
      score: [4, 4, 5],
      deploying: "https://www.amazon.com/",
      projectType: "Imitacion",
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
      shortDescription: "Clon de Facebook/Linked-in",
      description: "En este proyecto se intento clonar Facebook y LinkedIn trantando de respetar las funcionalidades y el diseño. El proyecto se realizo en conjunto con otros desarrolladores web y diseñadores ux/ui",
      repository: "none",
      score: [5, 5, 3],
      deploying: "https://www.facebook.com/",
      projectType: "Imitacion",
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
      shortDescription: "Proyecto creado con create-react-app",
      description: "Este proyecto fue uno de los primeros desarrollos que realice utilizando ReactJS. Se trata de un ejercicio realizado para el bootcamp de SoyHenry",
      repository: "none",
      score: [4, 3, 3],
      deploying: "https://es.reactjs.org/",
      projectType: "Practica",
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
      shortDescription: "Proyecto para aprender a programar con Javascript",
      description: "Este proyecto fue uno de los primeros desarrollos que realice utilizando JavaScript, forma parte de un challenge de la página FreeCodeCamp.",
      repository: "none",
      score: [1, 2, 3],
      deploying: "https://www.soyhenry.com/",
      projectType: "Practica",
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
      shortDescription: "Clon de twitter pero mejor (?)",
      description: "En este proyecto se imitó el diseño y la funcionalidad de Twitter utilizando otras tecnologias.",
      repository: "none",
      score: [3, 3, 3],
      deploying: "https://twitter.com/",
      projectType: "Imitacion",
      imagen: ["https://i.postimg.cc/HkPtV25H/Captura-de-pantalla-de-2022-06-11-19-55-33.png",
        "https://i.postimg.cc/hvXnqnkT/Captura-de-pantalla-de-2022-06-11-19-56-04.png",
        "https://i.postimg.cc/Yqj0pK6X/Captura-de-pantalla-de-2022-06-11-19-56-29.png",
        "https://i.postimg.cc/Bb7vxM0c/Captura-de-pantalla-de-2022-06-11-19-57-05.png",
        "https://i.postimg.cc/C1mMgmzT/Captura-de-pantalla-de-2022-06-11-19-56-48.png"
      ]
    },
    {
      name: "The videogame APP",
      shortDescription: "Catálogo de videojuegos que te permite crear nuevos juegos",
      description: "SPA  ue consume datos de una API y renderiza los juegos con algunos datos en el home. Permite buscar videojuegos, ordenarlos alfabeticamente y por rating y filtrar por género. Se puede ingresar al detalle de cada videojuego e incluye un link que te redirecciona a la página oficial del mismo. El usuario puede crear su propio videojuego. ",
      repository: "https://github.com/mschaberger/the-videogame-app",
      deploying: "",
      score: [3, 4, 2],
      projectType: "Catálogo",
      imagen: ["https://i.postimg.cc/NjPVmYg8/landing-Page.png",
        "https://i.postimg.cc/rp3BXT3y/loader.png",
        "https://i.postimg.cc/TYfZXC7b/homePage.png",
        "https://i.postimg.cc/5yMDy3fZ/game-Create.png",
        "https://i.postimg.cc/pLd4mytX/game-Detail.png",
        "https://i.postimg.cc/0QSL931Y/404game-Not-Found.png",
      ]
    },
    {
      name: "The weather APP",
      shortDescription: "Aplicación creada usando React.js para el bootcamp de IT",
      description: "Se trata de una SPA que consume datos de una API y renderiza el estado del tiempo de distintas ciudades. Se puede ingresar al detalle de cada ciudad en donde se muestra mayor información.",
      repository: "https://github.com/mschaberger/Weather-APP",
      deploying: "",
      score: [2, 1, 1],
      projectType: "Practica",
      imagen: ["https://i.postimg.cc/MpvdBpWW/home-Welcome.png",
        "https://i.postimg.cc/4N8Wn9RL/home-Cards.png",
        "https://i.postimg.cc/RVCPMTyJ/city-Detail.png",
        "https://i.postimg.cc/G3x7wf71/about.png",
      ]
    },
    {
      name: "Timer",
      shortDescription: "Aplicación creada usando React y redux para el bootcamp de IT",
      description: "Se trata de una aplicación muy sencilla, que se realizó a modo de practica para aprender a manejar react hooks.",
      repository: "https://github.com/mschaberger/Counter",
      deploying: "",
      score: [0, 0, 0],
      projectType: "Practica",
      imagen: ["https://i.postimg.cc/7hKNRf3Q/countdown.png",
        "https://i.postimg.cc/BZpNbwrc/counter.png",
      ]
    },
    {
      name: "PV mates",
      shortDescription: "Maquetado HTML y CSS",
      description: "Primer maquetado de HTML y CSS realizado a modo de prueba, no tiene funcionalidades.",
      repository: "https://github.com/mschaberger/pvmates",
      deploying: "",
      score: [0, 4, 0],
      projectType: "Diseño",
      imagen: ["https://i.postimg.cc/qvy1JM4g/maquetado-PV.png"]
    },
    {
      name: "PI-DOGS",
      shortDescription: "Catálogo de perros que te permite crear nuevas razas",
      description: "SPA  que consume datos de una API y renderiza las distintas razas de perros con algunos datos en la página principal. Permite buscar razas, ordenarlas alfabéticamente y por peso y filtrar por temperamento. Se puede ingresar al detalle de cada raza y el usuario puede crear su propia raza. ",
      repository: "https://github.com/mschmidt17/DOGS",
      deploying: "",
      score: [4, 4, 4],
      projectType: "Catálogo",
      imagen: ["https://raw.githubusercontent.com/mschmidt17/DOGS/main/PI.1.png",
        "https://raw.githubusercontent.com/mschmidt17/DOGS/main/PI.2.png",
        "https://raw.githubusercontent.com/mschmidt17/DOGS/main/PI.3.png",
      ]
    },
    {
      name: "APP-CLIMA",
      shortDescription: "Aplicación del clima desarrollada para el bootcamp de desarrollo web",
      description: "Se trata de una SPA que consume datos de una API y renderiza el estado del tiempo de distintas ciudades. Se puede ingresar al detalle de cada ciudad en donde se muestra mayor información.",
      repository: "https://github.com/mschmidt17/APP-CLIMA",
      deploying: "",
      score: [4, 3, 2],
      projectType: "Practica",
      imagen: ["https://raw.githubusercontent.com/mschmidt17/APP-CLIMA/main/src/img/1.png",
        "https://raw.githubusercontent.com/mschmidt17/APP-CLIMA/main/src/img/2.png",
        "https://raw.githubusercontent.com/mschmidt17/APP-CLIMA/main/src/img/3.png",
      ]
    },
  ];

  const comments = [
    { text: "Excelente trabajo! Muy original" },
    { text: "Qué buen proyecto, me gustó mucho la idea." },
    { text: "Fantástico trabajo, impresionado de lo que lograron." },
    { text: "Felicitaciones, has  creado un producto de valor, funcional y creativo" },
    { text: "Muy bueno, muy original , felicidades!" },
    { text: "Me encantó el diseño, como feedback haría el botón de crear más grande para que se visibilice mejor." },
    { text: "Muy bueno todas las tecnologías que se utilizaron, excelente el resultado." },
    { text: "Muy bueno el trabajo, buenisima la implementación pago a través de criptos" },
    { text: "Tremendo proyecto! les quedó genial! felicitaciones!!" },
    { text: "Me gusta el layout, muy sencillo e intuitivo" },
    { text: "Me encantó la paleta de colores!! Pondría más grande el título para que llame la atención del usuario" },
    { text: "Proyecto sencillo pero funcional y responsivo, felicitaciones por lo que lograste!" },
    { text: "¡Felicitaciones! Gran trabajo" },
    { text: "Me gustaría ver como queda con otra paleta de colores, pero me encantó la idea del proyecto!" },
    { text: "Se me hace difícil encontrar los botones para pasar a la siguiente página, modificaría el estilo del paginador. Más allá de eso, me encantó el proyecto! " },
    { text: "Muy buen proyecto, ordenado, intuitivo. Le agregaría el link de la página oficial del videojuego en la página del detalle." },
    { text: "Muy buena LandingPage, sencilla de comprender." },
    { text: "Me gustó mucho la idea del proyecto, le agregaría una NavBar para encontrar más fácil las distintas secciones." },
    { text: "Genial! Muy original! Solo agregaría un ordenador de los más a los menos populares." },
    { text: "Me pareció un proyecto muy prolijo, fácil de usar." },
    { text: "Me gustó mucho este proyecto!!!! Solo lo haría responsivo. " },
    { text: "Qué buen trabajo! Me gustaron mucho las imágenes utilizadas y los colores. El carrusel de la página de inicio quedó increíble." },
    { text: "Excelente!! Lograste una imitación muy buena de la página real." },
    { text: "Muy interesante lo que se logró y las tecnologías utilizadas." },
    { text: "Me encantó el hover de las cards!!! Muy buen proyecto." },
    { text: "Increible este trabajo! De mis favoritos hasta ahora." }
  ];
  const tecnologias = [
    { name: "Java" },
    { name: "C#" },
    { name: "C++" },
    { name: "Javascript" },
    { name: "ReactJs" },
    { name: "ReactNative" },
    { name: "NodeJs" },
    { name: "ExpressJs" },
    { name: "NextJs" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Less" },
    { name: "Sass" },
    { name: "Kotlin" },
    { name: "Swift" },
    { name: "PHP" },
    { name: "Python" },
    { name: "Ruby on rails" },
    { name: "SQL" },
    { name: "PostreSQL" },
    { name: "MySQL" },
    { name: "Redux" },
    { name: "TypeScript" },
    { name: "Cobol" },
    { name: "Spring Boot" },
    { name: ".NET" },
    { name: "Django" },
    { name: "MongoDb" },
    { name: "ExpressJs" },
    { name: "Sequelize" },
    { name: "Vue" },
    { name: "Angular" },
    { name: "Flask" },
    { name: "Flutter" },
    { name: "Xamarin" },
    { name: "Asp.Net" },
    { name: "JQuery" },
    { name: "VisualBasic" },
    { name: "Bootstrap" },
    { name: "Tailwind" },
    { name: "Bulma" },
    { name: "Objetive-C" },
    { name: "Laravel" },
    { name: "Symfony" },
    { name: "Golang" },
    { name: "Wordpress" },
    { name: "C" },
    { name: "Docker" },
    { name: "GraphQL" },
    { name: "Jest" },
    { name: "Heroku" },
    { name: "Amazon Web Services" }
  ];


  projects.map((e) => {
    if (!!e.score) {
      e.scoreStyle = []
      e.scoreFunctionality = []
      e.scoreOriginality = []
      e.scoreStyle.push(e.score[0]);
      e.scoreFunctionality.push(e.score[1])
      e.scoreOriginality.push(e.score[2])
    }
    else { null }



    e.scoreAverage = ((e.scoreStyle.reduce((e, a) => e + a) / e.scoreStyle.length) +
      (e.scoreFunctionality.reduce((e, a) => e + a) / e.scoreFunctionality.length) +
      (e.scoreOriginality.reduce((e, a) => e + a) / e.scoreOriginality.length)) / 3
  })



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

