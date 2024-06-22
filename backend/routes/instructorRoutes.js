const exp = require('express')
const {registerInstructor,loginInstructor,updateAttendance,updateAcademicMarks,updateTherapyMarks} = require('../controllers/instructorController')

const instructorApp = exp()

instructorApp.post('/new-instructor',registerInstructor)
instructorApp.post('/login',loginInstructor)
instructorApp.post('/update-attendance',updateAttendance)
instructorApp.post('/update-academic-marks/:username',updateAcademicMarks)
instructorApp.post('/update-therapy-marks/:username',updateTherapyMarks)

module.exports=instructorApp;