require('dotenv').config()
const express = require('express')
require("./authentication/auth")
const blogRouter = require('./route/blogRoute')
const authRouter = require('./route/auth')
const bodyParser =require('body-parser')
PORT = process.env.PORT  || 3000
const app = express()

const {connectToMongoDB} = require('./db')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

connectToMongoDB()
app.use('/', authRouter)
app.use('/api/blog', passport.authenticate('jwt', {session:false}),blogRouter)


app.get('/testing', function(req, res, next) {
    return res.send("Test Route, Server is working!")
});

//home 
app.get('/',(req,res) =>{
    return res.json({ message: 'Welcome to My Blog!', statues:true})
})

//Error
app.use('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' })
})

app.listen(PORT , () =>{
    console.log(`Server listening  on port http://localhost:${PORT}`)
})


module.exports = app
