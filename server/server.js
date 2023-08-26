const path = require('path');
const express = require('express');

const routes = require('./routes');
// const helpers = require('./utils/helpers');
const Sequelize = require('sequelize');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 5000;




// Create a Sequelize instance with the development configuration
const sequelize = new Sequelize(config.development);

// Test the database connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Test the database connection when the app starts
testConnection();

//routes and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Start the server

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
}).catch(err=>console.error(err));
