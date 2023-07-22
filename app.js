//dependencia
const express = require('express');
const app = express();
const path = require('path');

//numero de puerto
const PORT=2000
app.listen(PORT,console.log(PORT));
//archivos estaticos, culaquiera de los dos
//app.use(express.static(path.resolve(__dirname,'./public')))
app.use(express.static('public'));

//rutas

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
});
