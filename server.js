const express = require("express")

const app = express()
const auth = require("./auth")

app.use(auth)

app.set('view engine', 'pug')
app.set('views','./views')


app.get('/',(req, res) => {
    res.status(200).send("hello home server ")
console.table({method: req.method, path: req.path})
})


app.get('/contact', (req, res) =>{
    res.render('contact');
  })
  
  app.get('/home', (req, res) =>{
    res.render('home');
 })

  
app.get('/services', (req, res) =>{
    res.render('services');
})

const port = 7002
app.listen(port, error =>
    error? console.log('created server failed'):
    console.log(`Server is running on port ${port}`)
    )