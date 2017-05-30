var Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/veggietracker', {
  logging: false
})

db
  .authenticate()
  .then(() => {
    console.log('connection is established GREAT SUCCESS');
  })
  .catch(err => {
    console.error('NO! Unable to connect to db... :(');
  })
