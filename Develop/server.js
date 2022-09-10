// We bring in the necessary packages and dependencies
const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// We define a port, if running locally we use 3001, if running
// through a web service the port is dynamically assigned.
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({
  force: false,
})
.then(() => {
  app.listen(PORT, () => console.log(`Application listening on port: ${PORT}`))
});
