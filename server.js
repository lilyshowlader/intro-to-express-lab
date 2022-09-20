// 1. import modules

import express from 'express'
import { students } from './data/students.js'

// 2. Create Express app

const app = express()

// 3. Configure the app (app.set)
app.set('view engine', 'ejs')


// 4. Mount Middleware (app.use)



// 5. Mount routes
app.get('/', function(req, res) {
  res.redirect('/home')
})
// The first argument provided to app.get, /, defines the path for the route. In this case, the root of the application (the root of the application is just the hostname like localhost:3000)

app.get('/home', function (req, res) {
  res.render('home')
})


app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
  })
})




// 6. Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})