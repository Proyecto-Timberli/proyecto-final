require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
      database: DB_NAME,
      dialect: "postgres",
      host: DB_HOST,
      port: 5432,
      username: DB_USER,
      password: DB_PASSWORD,
      pool: {
        max: 3,
        min: 1,
        idle: 10000,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
        keepAlive: true,
      },
      ssl: true,
    })
    : new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/proyectofinal`,
      { logging: false, native: false }
    );
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Project, User, Review, Contributions, Report,Favorites } = sequelize.models;


const common = (options) => ({
  ...options,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})
///////////////////////////////
Favorites.belongsTo(User)
User.hasMany(Favorites)
Project.belongsTo(Favorites)
Favorites.hasMany(Project)
////////////////////////////////////
User.hasMany(Contributions)
Contributions.belongsTo(User)
////////////////////////////////////
// Project.belongsToMany(User, { through: "Favorites", foreignKey: "project_id", otherKey: "user_id", });
// User.belongsToMany(Project, { through: "Favorites", foreignKey: "user_id", otherKey: "project_id", });
User.hasMany(Project)
Project.belongsTo(User) 

////////////////////////////////////
User.hasMany(Review)
Review.belongsTo(User)
////////////////////////////////////
Project.hasMany(Review)
Review.belongsTo(Project)
////////////////////////////////////
Project.hasMany(Report)
Report.belongsTo(Project)
User.hasMany(Report);
Report.belongsTo(User)
//////////////////seguir////////////////////////////
// User.belongsToMany(User, common({through: "users_followers",
// foreignKey: 'follower_id',otherKey:'following_id',as:'follower',}));
// User.belongsToMany(User, common({through: "users_followers",
// foreignKey: 'following_id',otherKey:'follower_id',as:'following',}));
////////////////////////////////////
////////////////////////////////////

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
