const {User,Project} = require('./src/db.js');
const mokeando = async ()=>{
    const users = [
      {
        name: "Luciano",
        userName: "luciano",
        mail: "luciano@mail.com",
        password: "password",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      },
      {
        name:"Cristobal",
        userName:"Saposan",
        mail:"cristobal.herreros@gmail.com",
        password:"aVerySecurePassword",
        linkedin: "https://www.linkedin.com/in/crist%C3%B3bal-herreros-viviani-50122b1b7/",
        github:"https://github.com/Sapo-san",
        stack:"none",
        image:"https://avatars.githubusercontent.com/u/35698291?s=400&u=07f6bc6d8944fb3fe1363dd49357bebb0b11732b&v=4",
      },
      {
        name: "Lucas",
        userName: "soylucas",
        mail: "soylucas@hotmail.com",
        password: "contraseña",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      },
      {
        name: "María",
        userName: "soymaria",
        mail: "soymaría@gmail.com",
        password: "password",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      },
      {
        name: "Roberto",
        userName: "RRobert",
        mail: "roberto123@hotmail.com",
        password: "papasword",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      },
      {
        name: "Anita",
        userName: "An1",
        mail: "an1t4@gmail.com",
        password: "simplePassword",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      },
      {
        name: "Consuelo",
        userName: "Coni",
        mail: "conilalaurita@hotmail.com",
        password: "averysimplepassword",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
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
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      },
      {
        name: "notBill",
        userName: "NotBillGates",
        mail: "iamnotbillgates@microsoft.com",
        password: "i-lied",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
      },
      {
        name: "Bastián",
        userName: "bastyJr",
        mail: "bastianprogrammer@gmail.com",
        password: "randomHashMadeByPasswordManager",
        linkedin: "none",
        github: "none",
        stack: "none",
        image: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
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

