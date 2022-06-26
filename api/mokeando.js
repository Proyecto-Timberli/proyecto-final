const { User, Project, Contributions } = require('./src/db.js');
const mokeando = async () => {

  const user_description_1 = "Hola! Esta es mi descripcion generica. Soy una persona muy profesional y me apasiona este rubro! No duden en contratarme, por favor"
  const user_description_2 = "La descripcion generica, pero con un lorem! Claramente no hay mucho mas que contar sobre mí: Auris dapibus feugiat metus et venenatis. Sed in risus turpis. Praesent viverra commodo ipsum, et condimentum velit. Nulla condimentum nunc non vulputate scelerisque. Morbi dignissim ex et erat lacinia ornare. Nulla et quam quam. \n\nMorbi dictum, nulla lacinia vulputate hendrerit, purus felis accumsan nisi, vel vehicula neque nisl ac lectus. Sed egestas velit non convallis imperdiet. Quisque ante eros, sodales vel ligula vel, ornare fermentum erat. Fusce viverra vehicula imperdiet. Morbi nec erat nisl. Cras sed velit ac leo dapibus mollis a a dolor. Maecenas molestie mattis ligula, non vestibulum urna volutpat sed. Ut in convallis velit, sit amet pretium risus. Praesent massa mauris, ullamcorper eu finibus placerat, congue nec magna. Pellentesque posuere, risus nec suscipit rutrum, ligula dolor pretium elit, a iaculis ex ex a est."
  const user_description_3 = "Me gusta la programacion, soy pro activo y intento invocar en la industria, pero en la musical, hice un cover de esta cancion =Nunca quise tanto a nadie como vos, por eso es que empiezo a dudar. Seremos hermanos que nos separaron y nosotros sin saberlo volvimos a encontrar? tu Sangre es roja, la mia tambien, no me equivocom algo tendremos que ver"
  const user_description_4 = "Este es un lorem corto, bueno, tecnicamente no es un lorem"
  const user_description_5 = "Nullam dapibus egestas nibh, at molestie neque pharetra eu. Etiam eget metus a nisi vulputate posuere. \n\n Suspendisse scelerisque lorem et urna hendrerit mattis. Aliquam cursus, libero dapibus ultricies vestibulum, augue ipsum tristique orci, sit amet feugiat purus nisi ac purus. Donec eu tincidunt ex. Duis semper erat quis sagittis ultrices. Nullam ut tristique nisl. Nunc venenatis dolor eu justo molestie, et sodales nulla aliquet. Donec pharetra libero lorem, at finibus libero iaculis vulputate. Duis pharetra non velit eget maximus. Quisque tristique ligula non ligula sagittis, ut vehicula lorem tristique. Aenean vel laoreet eros, nec mattis dolor. Sed et scelerisque eros. Nullam faucibus sit amet nibh ac tempor.\n\n In ut leo tortor. Nunc et ex vitae magna vulputate suscipit. Integer consectetur felis sit amet diam finibus, ut porttitor sem fermentum. Nulla eleifend quam vel sagittis tempus. Mauris consectetur facilisis ipsum porta hendrerit. Cras mauris est, fermentum et lobortis quis, fermentum in nunc. Sed viverra quam id ullamcorper faucibus. Fusce sed urna tincidunt massa posuere viverra."


  const users = [
    {
      name: "Tommy Shelby",
      userType: "suspended",
      mail: "Tshelby@mail.com",
      password: "password",
      image: "https://www.losandes.com.ar/resizer/JYi2hpIvlUhn-uZTzC34D-UZXEo=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MMLEOSMQZREZDERPUO7WRD4VNI.jpg",
      description: "Thomas Michael Shelby, OBE, DCM, MM, MP. Manejo distintas tecnologias como: Vue, Angular, Wordpress",
      linkedin: "",
      github: "https://github.com/",
      short_description: "Frontend Developer"
    },
    {
      name: "Ada shelby",
      mail: "adashelby24@mail.com",
      password: "password",
      image: "https://www.looper.com/img/gallery/why-ada-shelby-from-peaky-blinders-looks-so-familiar/l-intro-1615148175.jpg",
      description: "Mi nombre es Ada y soy desarrolladora web. Tengo 5 años de experiencia utilizando las siguientes tecnologías: REACT.JS y REACT NATIVE, Redux, MongoDB, MySQL",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
      short_description: "Full-Stack Developer"
    },
    {
      name: "Arthur Shelby Jr",
      mail: "arturojunior@mail.com",
      password: "password",
      image: "https://cdn-www.comingsoon.net/assets/uploads/2021/05/arthurshelby.jpg",
      description: "Hola! Soy Arturo, ingeniero en sistemas con más de 10 años de experiencia en el mundo IT. Me especializo en backend y manejo distintas tecnologías pero además desarrolle a lo largo de los años muchos soft skills. Si te gustan mis proyectos no dudes en ponerte en contacto!",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
      short_description: "Backend Developer"
    },
    {
      name: "Luciano",
      mail: "luciano@mail.com",
      password: "password",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      image: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg",
      description: "Javascript, HTML y CSS",
    },
    {
      name: "Cristobal",
      mail: "cristobal.herreros@gmail.com",
      password: "aVerySecurePassword",
      linkedin: "https://www.linkedin.com/in/crist%C3%B3bal-herreros-viviani-50122b1b7/",
      github: "https://github.com/Sapo-san",
      Description: "Javascript, HTML y CSS. Me manejo con React, Redux, Node.js, Express.js y Sequelize (PostgreSQL). También he trabajado con Ruby on Rails",
      image: "https://avatars.githubusercontent.com/u/35698291?s=400&u=07f6bc6d8944fb3fe1363dd49357bebb0b11732b&v=4",
    },
    {
      name: "Lucas",
      mail: "soylucas@hotmail.com",
      password: "contraseña",
      linkedin: "Tengo linkedin!",
      github: "https://github.com/",
      description: "Hola! Soy ingeniero en sistemas con más de 10 años de experiencia en el mundo IT. Me especializo en backend y manejo distintas tecnologías pero además desarrolle a lo largo de los años muchos soft skills. Si te gustan mis proyectos no dudes en ponerte en contacto! Aprendiendo Ruby on Rails y Vue3",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
    },
    {
      name: "María",
      mail: "soymaría@gmail.com",
      password: "password",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "Hola a todos! Me considero una persona creativa y resolutiva, que disfruta mucho del trabajo en equipo. soy experta en Javascript y estoy aprendiendo Python. Me inclino mas por el frontend que por el back, pero soy desarrolladora full stack.",
      image: "https://i.pinimg.com/736x/a6/5e/ba/a65ebae219c97f8624f32140e80889a9.jpg",
    },
    {
      name: "Roberto",
      userType: "suspended",
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
      userType: "suspended",
      mail: "juliuscaesar@romanempire.com",
      password: "brutusiwillhavemyrevenge",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "Mi nombre es Julio tengo mucha experiencia en desarrollo web, sobre todo backend. Me encuentro en cosntante capacitación, busco desarrollar mis skills como frontend web y mobile developer.",
      image: "https://pbs.twimg.com/media/ECD1E7hVUAAZmpX.jpg",

    },
    {
      name: "Alejandro",
      userType: "suspended",
      mail: "alexander33@gmail.com",
      password: "simplepassword",
      linkedin: "none",
      github: "https://github.com/",
      description: "Hola! Soy ingeniero en sistemas con más de 10 años de experiencia en el mundo IT. Me especializo en backend y manejo distintas tecnologías pero además desarrolle a lo largo de los años muchos soft skills. Si te gustan mis proyectos no dudes en ponerte en contacto! Aprendiendo Ruby on Rails y Vue3",
      image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      short_description: "Recluiter IT"
    },
    {
      name: "Cleopatra",
      userType: "suspended",
      mail: "queenofegypt@hotmail.com",
      password: "milk-baths",
      linkedin: "none",
      github: "none",
      description: "Hola a todos! Me considero una persona creativa y resolutiva, que disfruta mucho del trabajo en equipo. soy experta en Javascript y estoy aprendiendo Python. Me inclino mas por el frontend que por el back, pero soy desarrolladora full stack. HTML y CSS.",
      image: "https://imdermatologico.com/wp-content/uploads/2018/05/cleopatra-complejo.jpg",
    },
    {
      name: "notBill",
      mail: "iamnotbillgates@microsoft.com",
      password: "i-lied",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "Bienvenidos a mi portfolio profesional. Manejo de todo un poco, pero me especializo en backend. Soy experto en tecnologias como MongoDB, PostgreSQL, NodeJS y expressJS",
      image: "https://thumbs.dreamstime.com/b/cara-humana-gen%C3%A9rica-del-hombre-vista-delantera-futurista-81662768.jpg",
      short_description: "Generic Person"
    },
    {
      name: "Bastián",
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
      short_description: "Full-Stack Developer"
    },
    {
      name: "Juan Garcia",
      mail: "ElJuanGarcia@mail.com",
      password: "password",
      image: "https://fotos02.deia.eus/mmp/2020/04/16/690x278/bin45938709con21041783-ok.jpg",
      description: "Soy licenciado de filosofia, la vida me llevo a estudiar y aprender sobre otras ramas, y ahi fue donde descubri mi amor por la programacio, sobre todo, con PHP y Phyton",
      linkedin: "www.Linkeding.com",
      github: "",
      userType: "user",
      short_description: "Back-end Ejoyer"
    },
    {
      name: "Daniel",
      mail: "DanielDiseño@mail.com",
      password: "password",
      image: "https://www.cippec.org/wp-content/uploads/2020/11/foto-juan-camisassa-e1605808262604.jpg",
      description: "Me encanta el arte, soy amante del diseño desde muy joven, por eso apenas termine mi lic. en diseño grafico, decidí hacer mi sueño realidad y crear paginas webs!",
      linkedin: "",
      github: "www.github.com",
      userType: "user",
      short_description: "Front-end Devaloper"
    },
    {
      name: "Oscar caleñas",
      userName: "mixwell",
      mail: "oscar_Caleñas@gmail.com",
      password: "contraseña",
      image: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
      description: "Desarrolador de software y diseñador web con experiencia en el desarrollo de aplicaciones web y en el diseño de interfaces de usuario.",
      linkedin: "",
      github: "",
      short_description: "Desarrollador web y diseñador de interfaces de usuario.",
    },
    {
      name: "Bruno Mars",
      userName: "BruMars",
      mail: "bruno_mars",
      password: "KPXZQZ",
      image: "https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg",
      description: "Apasionado de la programacion y el desarrollo web, siempre con ganas de aprender y seguir creciendo💪",
      linkedin: "https://www.linkedin.com/feed/",
      github: "https://github.com",
      short_description: "Apasionado del desarrollo web y de la programacion.",
    },
    {
      name: "Joaquin",
      mail: "joaquinelmejor@mail.com",
      password: "password",
      description: "Soy estudiante de programacion en la universidad de tucuman, y tambien hago el bootcamp de soyHenry",
      linkedin: "https://www.linkedin.com/feed/",
      github: "https://github.com/",
      userType: "user",
      short_description: "Full-Stack Developer"
    },
    {
      name: "Carlos",
      mail: "carlos_78@mail.com",
      password: "password",
      description: "Hace 2 años me recibí de ingeniero quimico y al entrar a trabajar no me gustó para nada, vi que habia un bootcamp de programación y entré para probar suerte y acá estoy, trabajando para una empresa de USA",
      linkedin: "https://www.linkedin.com/feed/",
      github: "https://github.com/",
      userType: "user",
      short_description: "Full-Stack Developer"
    },
    {
      name: "James Thompson",
      userType: "user",
      mail: "thompson@mail.com",
      password: "password",
      image: "https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg",
      description: "James Thompson, OBE, DCM, MM, MP. Manejo distintas tecnologias como: .NET,Vue,ExpressJ,Javascript,Sequelize,NodeJs",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
      short_description: "Full-Stack Developer"
    },
    {
      name: "DarkNaruto666",
      mail: "darkNaruto666@mail.com",
      password: "password",
      image: "https://i.pinimg.com/550x/0b/3e/2d/0b3e2d6365c72c6496d1be5d4d1968ad.jpg",
      description: "Mi nombre es juan y soy desarrollador web. Tengo 5 años de experiencia utilizando las siguientes tecnologías: REACT.JS y REACT NATIVE, Redux, MongoDB, MySQL",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
      short_description: "Full-Stack Developer"
    },
  ];

  const projects = [
    {
      name: "Henry Food",
      tecnology: ["ReactJs", "Redux", "ExpressJs"],
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
      tecnology: ["ReactJs", "Redux", "ExpressJs"],
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
      tecnology: ["Ruby on rails"],
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
      tecnology: ["ReactJs", "Redux", "ExpressJs"],
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
      tecnology: ["ReactJs"],
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
      tecnology: ["ReactJs", "Redux", "ExpressJs"],
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
      tecnology: ["Ruby on rails"],
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
      score: [2, 4, 1],
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
      score: [1, 4, 3],
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
    {
      name: "Paypal",
      tecnology: ["ReactJs", "Redux", "ExpressJs", "NodeJs", "Sass", "Bootstrap"],
      shortDescription: "La forma fácil y segura de enviar y recibir pagos en línea",
      description: "Nuestra plataforma de pagos en línea ofrece a nuestros usuarios la total confianza para realizar transacciones de una forma innovadora y eficaz, ya sea desde casa, desde el celular o a través de una app.",
      repository: "none",
      score: [4, 2, 4],
      deploying: "https://www.paypal.com/co/webapps/mpp/home?kid=p67128741798&gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoMR3vo2ld3s_ma5IXz1EISWQ0tDu4FKfBLV46EBM2vtyec07ZcpVZMaAkAlEALw_wcB&gclsrc=aw.ds",
      projectType: "Imitacion",
      imagen: ["https://i.postimg.cc/zBYFP2k5/image.png", "https://i.postimg.cc/4NjP93hm/image.png", "https://i.postimg.cc/SR28SW-dV/image.png"]

    },
    {
      name: "Twitch",
      tecnology: ["NextJs", "Redux", "Javascript", "NodeJs", "Less", "Tailwind"],
      shortDescription: "La plataforma de streaming de videojuegos",
      description: "Twitch es una plataforma de streaming de videojuegos que ofrece a los usuarios una experiencia de streaming de videojuegos increíble, con una gran variedad de canales y una gran variedad de juegos.",
      repository: "none",
      score: [1, 3, 4],
      deploying: "https://www.twitch.tv",
      projectType: "Imitacion",
      imagen: ["https://i.postimg.cc/g0p0S17G/image.png", "https://i.postimg.cc/nhgWnJxt/image.png"]
    },
    {
      name: "uiverse.io",
      tecnology: ["HTML", "CSS", "Javascript"],
      shortDescription: "Universo de elementos de interfaz de usuario paraayudarte a sobresalirDe código abierto y de uso gratuito,solo copia y pega!",
      description: "uiverse.io es una plataforma de desarrollo de aplicaciones web y de interfaces de usuario que permite a los desarrolladores crear aplicaciones web y interfaces de usuario de código abierto y de uso gratuito.",
      repository: "none",
      score: [1, 2, 3],
      deploying: "https://uiverse.io",
      projectType: "Imitacion",
      imagen: ["https://i.postimg.cc/66DFvPp0/image.png", "https://i.postimg.cc/Hkj516bq/image.png", "https://i.postimg.cc/LXWwvCBm/image.png"]
    },
    {
      name: "Huemint",
      tecnology: ["Java", "Flutter", "HTML", "CSS", "Javascript"],
      shortDescription: "Huemint es una aplicación que te ayuda a encontrar la mejor paleta de colores para tu sitio web.",
      description: "Huemint utiliza el aprendizaje automático para generar colores para el diseño gráfico. En lugar de generar una paleta plana y dejar que descubras cómo aplicarla, puede generar colores en función de cómo se usará cada color en el diseño final.",
      repository: "none",
      score: [4, 4, 3],
      deploying: "https://huemint.com",
      projectType: "Imitacion",
      imagen: ["https://i.postimg.cc/QC4PRmTd/image.png", "https://i.postimg.cc/mgMXwB8D/image.png", "https://i.postimg.cc/W1M8ZS1q/image.png"]
    },
    {
      name: "Pixabay",
      tecnology: ["HTML", "CSS", "Vue", "Kotlin", "Symfony"],
      shortDescription: "Pixabay es una plataforma de busqueda de imágenes gratuita",
      description: "Pixabay es una plataforma de busqueda de imágenes gratuita que te permite buscar imágenes de cualquier tipo y tamaño, y obtenerlas en formato de archivo de imagen, gráfico o vectorial.",
      repository: "none",
      score: [3, 3, 3],
      deploying: "https://pixabay.com",
      projectType: "Imitacion",
      imagen: ["https://i.postimg.cc/8kwWv9G6/image.png", "https://i.postimg.cc/RhTjC9JG/image.png", "https://i.postimg.cc/sf9XGhpH/image.png"]
    },
    {
      name: "nature",
      tecnology: ["HTML", "CSS", "Javascript", "Flutter"],
      shortDescription: "Nature es una revista de articulos de ciencia y tecnología",
      description: "Nature  es una revista internacional semanal que publica las mejores investigaciones revisadas por pares en todos los campos de la ciencia y la tecnología.",
      repository: "none",
      score: [3, 4, 2],
      deploying: "https://www.nature.com",
      projectType: "Imitacion",
      imagen: ["https://i.postimg.cc/QtNNrXtN/image.png", "https://i.postimg.cc/PrDj9L4z/image.png", "https://i.postimg.cc/DfJdXsnT/image.png"]

    },
    {
      name: "ArtStation",
      tecnology: ["Vue", "NextJs", "Tailwind ", "HTML", "Javascript"],
      shortDescription: "ArtStation es una plataforma de creación de diseño gráfico",
      description: "ArtStation es una plataforma de creación de diseño gráfico que permite a los usuarios crear y compartir diseños gráficos y animados.",
      repository: "none",
      score: [2, 3, 5],
      deploying: "https://www.artstation.com",
      projectType: "Imitacion",
      imagen: ["https://i.postimg.cc/qvDnZMGr/image.png", "https://i.postimg.cc/CKd2W5Ts/image.png", "https://i.postimg.cc/1znQDJtS/image.png"]
    },
    {
      name: "Perflix",
      tecnology: ["ReactJs", "ExpressJs", "Javascript", "Sequelize"],
      shortDescription: "web para ver peliculas y series",
      description: "es una web donde te creas una cuenta pagas la mensualidad y tienes acceso a muchas series y peliculas. ",
      repository: "https://github.com/",
      score: [5, 3, 3],
      deploying: "https://www.netflix.com/",
      projectType: "Entretenimiento",
      imagen: ["https://i.postimg.cc/T2nXhNmB/Captura_de_pantalla_de_2022-06-22_09-53-33.png",
        "https://i.postimg.cc/c4dPCxd8/Captura_de_pantalla_de_2022-06-22_09-53-39.png",
        "https://i.postimg.cc/HWzpWPb3/Captura_de_pantalla_de_2022-06-22_09-53-58.png",
      ]
    },
    {
      name: "Fiscord",
      tecnology: ["Angular", "ExpressJs", "Javascript", "Sequelize"],
      shortDescription: "web para hablar y socializar",
      description: "esta web esta proyectada para uso social se pueden hacer llamadas crear canales para hablar y chatear . ",
      repository: "https://github.com/",
      score: [5, 4, 3],
      deploying: "https://discord.com/",
      projectType: "Social",
      imagen: ["https://i.postimg.cc/wBXCf7VF/Captura_de_pantalla_de_2022-06-22_09-59-23.png",
        "https://i.postimg.cc/76BQd7T1/Captura_de_pantalla_de_2022-06-22_09-58-26.png",
        "https://i.postimg.cc/8Cg8mhhj/Captura_de_pantalla_de_2022-06-22_09-58-53.png"
      ]
    },
    {
      name: "Cradingwiev",
      tecnology: ["Angular", "Javascript", "Django", "Python"],
      shortDescription: "web para hablar y socializar",
      description: "esta web esta proyectada para uso social se pueden hacer llamadas crear canales para hablar y chatear . ",
      repository: "https://github.com/",
      score: [5, 4, 3],
      deploying: "https://es.tradingview.com/",
      projectType: "Social",
      imagen: ["https://i.postimg.cc/0jy1JP7n/Captura_de_pantalla_de_2022-06-22_10-01-53.png",
        "https://i.postimg.cc/fW26r4c4/Captura_de_pantalla_de_2022-06-22_10-01-15.png",
        "https://i.postimg.cc/J0DKFF8m/Captura_de_pantalla_de_2022-06-22_10-03-00.png",
      ]
    },
    {
      name: "AnimeFlr",
      tecnology: ["Angular", "Javascript", "Bootstrap", ".NET"],
      shortDescription: "visualiza tu anime favorito",
      description: "esta web fue diseñada para elegir y ver animes , guardar animes favoritos y comentar cada video. ",
      repository: "https://github.com/",
      score: [5, 4, 5],
      deploying: "https://www3.animeflv.net/",
      projectType: "Entreteniumiento",
      imagen: ["https://i.postimg.cc/fyYZNBjn/Captura_de_pantalla_de_2022-06-22_10-08-33.png",
        "https://i.postimg.cc/MHBZGWwL/Captura_de_pantalla_de_2022-06-22_10-08-37.png",
        "https://i.postimg.cc/Rqrrpfjs/Captura_de_pantalla_de_2022-06-22_10-08-49.png",
      ]
    },
    {
      name: "Cointelegraphhj",
      tecnology: ["ReactJs", "Javascript", "Python", "Django"],
      shortDescription: "mantenete informado sobre el mundo financiero",
      description: "web estilo diario informativo sobre cryptomonedas y el mundo financiero en general. ",
      repository: "https://github.com/",
      score: [4, 4, 4],
      deploying: "https://es.cointelegraph.com/",
      projectType: "Informativo",
      imagen: ["https://i.postimg.cc/sD3471Qs/Captura_de_pantalla_de_2022-06-22_10-09-58.png",
        "https://i.postimg.cc/N0s3nQzc/Captura_de_pantalla_de_2022-06-22_10-10-08.png",
        "https://i.postimg.cc/7PWWN34w/Captura_de_pantalla_de_2022-06-22_10-10-15.png",
        "https://i.postimg.cc/SNLtbw8N/Captura_de_pantalla_de_2022-06-22_10-10-28.png"
      ]
    },
    {
      name: "StarTube",
      tecnology: ["ReactJs", "ExpressJs", "Javascript", "Sequelize", "NodeJs"],
      shortDescription: "web para ver y subir videos",
      description: "Proyectada para que el usuario entree cree su cuenta suba y vea videos a su gusto. ",
      repository: "https://github.com/",
      score: [4, 3, 3],
      deploying: "https://www.youtube.com/",
      projectType: "Entretenimiento",
      imagen: ["https://i.postimg.cc/tCzDMFQs/Captura_de_pantalla_de_2022-06-22_10-05-00.png",
        "https://i.postimg.cc/TPcRykZR/Captura_de_pantalla_de_2022-06-22_10-05-35.png",
        "https://i.postimg.cc/0jhxghJC/Captura_de_pantalla_de_2022-06-22_10-07-54.png"
      ]
    },
    {
      name: "Mangaleon",
      tecnology: [".NET", "Vue", "ExpressJs", "Javascript", "Sequelize", "NodeJs"],
      shortDescription: "web para visualizar mangas",
      description: "Proyectada para buscar y ver el manga que elijas. ",
      repository: "https://github.com/",
      score: [4, 2, 3],
      deploying: "https://www.mangatigre.net/",
      projectType: "Entretenimiento",
      imagen: ["https://i.postimg.cc/CKCKGMfp/Captura_de_pantalla_de_2022-06-22_10-11-00.png",
        "https://i.postimg.cc/fbd96ht8/Captura_de_pantalla_de_2022-06-22_10-11-07.png",
        "https://i.postimg.cc/mDbg8xQz/Captura_de_pantalla_de_2022-06-22_10-11-14.png",
        "https://i.postimg.cc/ncx02058/Captura_de_pantalla_de_2022-06-22_10-11-19.png",
        "https://i.postimg.cc/mDXBjPLJ/Captura_de_pantalla_de_2022-06-22_10-11-22.png"
      ]
    },
    {

      name: "Skere!",
      shortDescription: "De gente Skere! para gente Skere!",
      description: "",
      repository: "",
      deploying: "",
      scoreStyle: [
        1,
        1
      ],
      scoreFunctionality: [
        2,
        3
      ],
      scoreOriginality: [
        1,
        2
      ],
      projectType: "Foro",
      imagen: [
        "https://i.pinimg.com/736x/f7/99/da/f799daf6e032206c41d1374b7c692290.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Chromium_on_Ubuntu.png"
      ]
    },
    {
      name: "Direct-Chat",
      shortDescription: "Una app de chat instanteneo para disfrutar con amigos",
      description: "Con la visionaria idea que tome del 2004, decidí crear un chat para chetear en tiempo real. Tambien podes tirar zumbidos :0",
      repository: "www.chat.com",
      deploying: "",
      scoreStyle: [
        3,
        5,
        1
      ],
      scoreFunctionality: [
        1,
        2,
        2
      ],
      scoreOriginality: [
        1,
        5,
        3
      ],
      projectType: "APP",
      imagen: [
        "https://wwwhatsnew.com/wp-content/uploads/2022/03/crear-chat.jpg",
        "https://helpdesk.bitrix24.es/upload/medialibrary/cf7/zshk2y4qr2x1yci6449hstp6fwztypqk/1.jpg"
      ]
    },
    {
      name: "Fotorum",
      shortDescription: "Una gran coleccion de fotos",
      description: "Una enorme galeria con todas las fotos, podes descargarlas o postear nuevas",
      repository: "",
      deploying: "",
      scoreStyle: [
        4,
        2
      ],
      scoreFunctionality: [
        1,
        4
      ],
      scoreOriginality: [
        1.5,
        2
      ],
      projectType: "Entretenimiento",
    },
    {
      name: "WifiWiki",
      shortDescription: "Encuentra todos los wifis libres en tu zona",
      description: "Anota wifis libres para ganar dinero extra por cada usuario que lo use, o simplemente busca wifis anotados por otros usuario",
      repository: "www.wifi.com",
      deploying: "",
      scoreStyle: [
        3,
        2,
        1
      ],
      scoreFunctionality: [
        1,
        2,
        1
      ],
      scoreOriginality: [
        1,
        5,
        1
      ],
      projectType: "APP",
    },
    {
      name: "InstaLAG",
      shortDescription: "Como instagram, pero con LAG! Disfruta de publicaciones de hace años",
      description: "Alguna vez quisiste publicar algo, pero que se vea recien dentro de 3~5 años? Esta es tu pagina. Totalmente util",
      repository: "",
      deploying: "www.Instagram.com",
      scoreStyle: [
        4,
        2,
        4
      ],
      scoreFunctionality: [
        3,
        2,
        3
      ],
      scoreOriginality: [
        3,
        5,
        2
      ],
      projectType: "Red Social",
    },
    {
      name: "Electro-Music",
      shortDescription: "Buscabas una radio de electronica? Bueno esto es un podcast sobre electronica, casi",
      description: "Queres aprender todo sobre componentes y circuitos electricos? Con Ruben castillo podes completamente en este hermoso podcast con pagina propia!",
      repository: "www.linkfalso123.com",
      deploying: "www.podcast.com",
      scoreStyle: [
        5,
        5,
        4
      ],
      scoreFunctionality: [
        4,
        2,
        4
      ],
      scoreOriginality: [
        3,
        3,
        4
      ],
      projectType: "APP",
    },
    {
      name: "ClipR",
      shortDescription: "Proyecto para descarga de videos/clips de twitch",
      description: "Es un proyecto que tiene como objetivo la descarga de videos/clips de twitch y otras plataformas de videos",
      repository: "",
      deploying: "https://clipr.xyz/",
      scoreStyle: [1, 1],
      scoreFunctionality: [3, 3],
      scoreOriginality: [3, 3],
      projectType: "Descarga de videos",
      imagen: ['https://i.postimg.cc/3rb4dKfj/image.png']
    },


    {
      name: "Tuich",
      shortDescription: "Plataforma de streaming",
      description: "Es una plataforma para poder hacer emisiones en vivo de distintas categorias: Juegos, charlas, apuestas. etc",
      repository: "",
      deploying: "https://www.twitch.tv/",
      scoreStyle: [3, 3],
      scoreFunctionality: [3, 3],
      scoreOriginality: [3, 3],
      projectType: "Plataforma de Stream",
      imagen: ['https://i.postimg.cc/SR7zX8ng/image.png']
    },


    {
      name: "ReCopado!",
      shortDescription: "Foro para opinar y compartir cosas",
      description: "Es un foro para poder opinar de temas serios, graciosos, entre otros y además para compartir cosas",
      repository: "",
      deploying: "https://www.reddit.com/",
      scoreStyle: [1, 2],
      scoreFunctionality: [1, 3],
      scoreOriginality: [3, 3],
      projectType: "Foro",
      imagen: ['https://i.postimg.cc/FKCt4nGZ/image.png']
    },

    {
      name: "MercadoPay",
      shortDescription: "Plataforma para manejo de plata",
      description: "Es una plataforma para manejar tu plata, transferir, comprar, pagar",
      repository: "",
      deploying: "https://www.mercadopago.com.ar/",
      scoreStyle: [3, 3],
      scoreFunctionality: [3, 3],
      scoreOriginality: [3, 3],
      projectType: "Finanzas",
      imagen: ['https://i.postimg.cc/wMfRczkN/image.png']
    },
    {
      name: "buya",
      shortDescription: "Plataforma de streaming",
      description: "Es una plataforma para realizar stream, orientada a los videojuegos",
      repository: "",
      deploying: "https://booyah.live/",
      scoreStyle: [1, 2],
      scoreFunctionality: [3, 3],
      scoreOriginality: [2, 3],
      projectType: "Plataforma de Stream",
      imagen: ['https://i.postimg.cc/qvLq84Mv/image.png']
    }
  ]

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

  function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  projects.map((e) => {
    if (!!e.score) {
      e.scoreStyle = []
      e.scoreFunctionality = []
      e.scoreOriginality = []
      e.scoreStyle.push(Number(e.score[0]));
      e.scoreFunctionality.push(Number(e.score[1]))
      e.scoreOriginality.push(Number(e.score[2]))
    }
    else { null }
  })
  users.map(e => {
    e.stack = []
    for (let i = 0; i < 10; i++) {
      if (numeroRandom(1, 3) == 1) {
        let tecnologia = tecnologias[numeroRandom(0, (tecnologias.length - 1))]

        e.stack.push(tecnologia.name)

      }
    }
  })

  for (let i = 0; i < users.length; i++) {
    await User.create(users[i])
  }

  for (let j = 0; j < projects.length; j++) {

    let project = await Project.create(projects[j])

    await project.set({
      scoreFunctionality: [...project.scoreFunctionality].concat((numeroRandom(1, 5))),
      scoreStyle: [...project.scoreStyle].concat((numeroRandom(1, 5))),
      scoreOriginality: [...project.scoreOriginality].concat((numeroRandom(1, 5))),
    })
    await project.set({
      scoreAverage: ((project.scoreStyle.reduce((e, a) => Number(e) + Number(a)) / project.scoreStyle.length) +
        (project.scoreFunctionality.reduce((e, a) => Number(e) + Number(a)) / project.scoreFunctionality.length) +
        (project.scoreOriginality.reduce((e, a) => Number(e) + Number(a)) / project.scoreOriginality.length)) / 3
    })

    await project.save()

    const user = await User.findByPk((numeroRandom(1, (users.length))).toString())
    await user.addProjects(project)
  }

  // let user = await User.create(users[i])

  // let valores = [5, 10, 1, 5]
  // let newContribution = {
  //   name: users[i].name,
  //   mail: users[i].mail,
  //   amount: valores[i]
  // }
  // let contribution = await Contributions.create(newContribution)
  // await user.addContributions(contribution)
}

module.exports = mokeando

