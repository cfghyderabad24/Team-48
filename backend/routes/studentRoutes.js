const exp = require('express')
const {registerStudent,loginStudent, getInstructor, getStudent} = require('../controllers/studentController')

const studentApp = exp()

studentApp.post('/new-student',registerStudent)
studentApp.post('/login',loginStudent)
studentApp.get('/student/:username', getStudent)
studentApp.get('/instructor/:username',getInstructor)

module.exports=studentApp;