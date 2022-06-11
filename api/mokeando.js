const {User,Project} = require('./src/db.js');
const mokeando = async ()=>{

    const user_description_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const user_description_2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis odio. Mauris dapibus feugiat metus et venenatis. Sed in risus turpis. Praesent viverra commodo ipsum, et condimentum velit. Nulla condimentum nunc non vulputate scelerisque. Morbi dignissim ex et erat lacinia ornare. Nulla et quam quam. \n\nMorbi dictum, nulla lacinia vulputate hendrerit, purus felis accumsan nisi, vel vehicula neque nisl ac lectus. Sed egestas velit non convallis imperdiet. Quisque ante eros, sodales vel ligula vel, ornare fermentum erat. Fusce viverra vehicula imperdiet. Morbi nec erat nisl. Cras sed velit ac leo dapibus mollis a a dolor. Maecenas molestie mattis ligula, non vestibulum urna volutpat sed. Ut in convallis velit, sit amet pretium risus. Praesent massa mauris, ullamcorper eu finibus placerat, congue nec magna. Pellentesque posuere, risus nec suscipit rutrum, ligula dolor pretium elit, a iaculis ex ex a est."
    const user_description_3 = "Nullam dapibus egestas nibh, at molestie neque pharetra eu. Etiam eget metus a nisi vulputate posuere. Suspendisse scelerisque lorem et urna hendrerit mattis. Aliquam cursus, libero dapibus ultricies vestibulum, augue ipsum tristique orci, sit amet feugiat purus nisi ac purus. Donec eu tincidunt ex. Duis semper erat quis sagittis ultrices. Nullam ut tristique nisl. Nunc venenatis dolor eu justo molestie, et sodales nulla aliquet. Donec pharetra libero lorem, at finibus libero iaculis vulputate. Duis pharetra non velit eget maximus. Quisque tristique ligula non ligula sagittis, ut vehicula lorem tristique. Aenean vel laoreet eros, nec mattis dolor. Sed et scelerisque eros. Nullam faucibus sit amet nibh ac tempor.\n\n In ut leo tortor. Nunc et ex vitae magna vulputate suscipit. Integer consectetur felis sit amet diam finibus, ut porttitor sem fermentum. Nulla eleifend quam vel sagittis tempus. Mauris consectetur facilisis ipsum porta hendrerit. Cras mauris est, fermentum et lobortis quis, fermentum in nunc. Sed viverra quam id ullamcorper faucibus. Fusce sed urna tincidunt massa posuere viverra."
    const user_description_4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. \n\n Nullam dapibus egestas nibh, at molestie neque pharetra eu. Etiam eget metus a nisi vulputate posuere. Suspendisse scelerisque lorem et urna hendrerit"
    const user_description_5 = "Nullam dapibus egestas nibh, at molestie neque pharetra eu. Etiam eget metus a nisi vulputate posuere. \n\n Suspendisse scelerisque lorem et urna hendrerit mattis. Aliquam cursus, libero dapibus ultricies vestibulum, augue ipsum tristique orci, sit amet feugiat purus nisi ac purus. Donec eu tincidunt ex. Duis semper erat quis sagittis ultrices. Nullam ut tristique nisl. Nunc venenatis dolor eu justo molestie, et sodales nulla aliquet. Donec pharetra libero lorem, at finibus libero iaculis vulputate. Duis pharetra non velit eget maximus. Quisque tristique ligula non ligula sagittis, ut vehicula lorem tristique. Aenean vel laoreet eros, nec mattis dolor. Sed et scelerisque eros. Nullam faucibus sit amet nibh ac tempor.\n\n In ut leo tortor. Nunc et ex vitae magna vulputate suscipit. Integer consectetur felis sit amet diam finibus, ut porttitor sem fermentum. Nulla eleifend quam vel sagittis tempus. Mauris consectetur facilisis ipsum porta hendrerit. Cras mauris est, fermentum et lobortis quis, fermentum in nunc. Sed viverra quam id ullamcorper faucibus. Fusce sed urna tincidunt massa posuere viverra."


    const users = [
      {
        name: "Luciano",
        userName: "luciano",
        mail: "luciano@mail.com",
        password: "password",
        linkedin: "none",
        github: "none",
        stack: "Javascript, HTML y CSS",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
        description: user_description_1,
      },
      {
        name:"Cristobal",
        userName:"Saposan",
        mail:"cristobal.herreros@gmail.com",
        password:"aVerySecurePassword",
        linkedin: "https://www.linkedin.com/in/crist%C3%B3bal-herreros-viviani-50122b1b7/",
        github:"https://github.com/Sapo-san",
        stack:"Javascript, HTML y CSS. Me manejo con React, Redux, Node.js, Express.js y Sequelize (PostgreSQL). También he trabajado con Ruby on Rails",
        image:"https://avatars.githubusercontent.com/u/35698291?s=400&u=07f6bc6d8944fb3fe1363dd49357bebb0b11732b&v=4",
        description: user_description_2,
      },
      {
        name: "Lucas",
        userName: "soylucas",
        mail: "soylucas@hotmail.com",
        password: "contraseña",
        linkedin: "none",
        github: "none",
        stack: "Ruby on Rails y Vue3",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
        description: user_description_3,
      },
      {
        name: "María",
        userName: "soymaria",
        mail: "soymaría@gmail.com",
        password: "password",
        linkedin: "none",
        github: "none",
        stack: "Javascript y React",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
        description: user_description_4,
      },
      {
        name: "Roberto",
        userName: "RRobert",
        mail: "roberto123@hotmail.com",
        password: "papasword",
        linkedin: "none",
        github: "none",
        stack: "Python",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
        description: user_description_5,
      },
      {
        name: "Anita",
        userName: "An1",
        mail: "an1t4@gmail.com",
        password: "simplePassword",
        linkedin: "none",
        github: "none",
        stack: "Javascript, Python",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
        description: user_description_1,
      },
      {
        name: "Consuelo",
        userName: "Coni",
        mail: "conilalaurita@hotmail.com",
        password: "averysimplepassword",
        linkedin: "none",
        github: "none",
        stack: "Javascript, HTML y CSS",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
        description: user_description_2,
      },
      {
        name: "Julio",
        userName: "JuliusCaesar",
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
        userName: "AlexanderTheGreat",
        mail: "alexander33@gmail.com",
        password: "simplepassword",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      },
      {
        name: "Cleopatra",
        userName: "c1eopatra",
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
        userName: "NotBillGates",
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
        userName: "bastyJr",
        mail: "bastianprogrammer@gmail.com",
        password: "randomHashMadeByPasswordManager",
        linkedin: "none",
        github: "none",
        stack: "Python y Javascript",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"
      }
    
      
    ]
    const projects= [
      {
        name: "Henry Food",
        tecnology: "React, Redux, Express.js",
        description: "Proyecto Henry Foods para mostrar como ejemplo en clases",
        repository: "none",
        score: "[1,2,3]",
        deploying: "none"
      },
      {
        name: "E-commerce genérico",
        tecnology: "React, Redux, Express.js",
        description: "E-commerce genérico, clon de mercado libre :)",
        repository: "none",
        score: "[1,1,2]",
        deploying: "none"
      },
      {
        name: "E-commerce genérico 2",
        tecnology: "Ruby on Rails",
        description: "E-commerce genérico, clon de Amazon",
        repository: "none",
        score: "[1,2,3]",
        deploying: "none"
      },
      {
        name: "ProfileLibrary",
        tecnology: "React, Redux, Express.js",
        description: "Red Social genérica, clon de Facebook/Linked-in",
        repository: "none",
        score: "[1,2,3]",
        deploying: "none"
      },
      {
        name: "React project",
        tecnology: "React",
        description: "Proyecto creado con create-react-app",
        repository: "none",
        score: "[1,2,3]",
        deploying: "none"
      },
      {
        name: "Hello World.js",
        tecnology: "React, Redux, Express.js",
        description: "Proyecto para aprender a programar con Javascript",
        repository: "none",
        score: "[1,2,3]",
        deploying: "none"
      },
      {
        name: "BlueBird",
        tecnology: "Ruby on Rails",
        description: "Clon de twitter pero mejor (?)",
        repository: "none",
        score: "[1,2,3]",
        deploying: "none"
      }
    ]
    for (let i = 0; i < users.length; i++) {
      let arrayProjects =[] 
      for (let j = 0; j < projects.length; j++) {
        arrayProjects.push(await Project.create(projects[j]))
      }
      let user = await User.create(users[i])
      await user.addProjects(arrayProjects)
    }
}
module.exports = mokeando

