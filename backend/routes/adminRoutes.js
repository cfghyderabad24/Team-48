const exp = require('express')
const {registerAdmin,loginAdmin,uploadData,getAllTableData} = require('../controllers/adminController')

const adminApp = exp()

adminApp.post('/new-admin',registerAdmin)
adminApp.post('/login',loginAdmin)
adminApp.post('/upload-data',uploadData)
adminApp.get('/get-all-data',getAllTableData)

module.exports=adminApp;