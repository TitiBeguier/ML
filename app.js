//dependencia
const express = require('express');
const app = express();
const path = require('path');

//numero de puerto
const port= process.env.PORT || 3001;
app.listen(port,console.log("http://localhost:"+port));
//archivos estaticos, culaquiera de los dos
//app.use(express.static(path.resolve(__dirname,'./public')))
app.use(express.static('public'));

//rutas

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
});
app.get('/registro',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/registro.html'))
});
app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
});
