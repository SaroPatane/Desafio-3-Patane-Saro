const {request, response} = require('express')
const express = require('express')
const Productos = require(`./productos.js`)


const app = express();
const productes = new Productos('./productos.js')

app.get('/productos', (request, response)=>{
    // response.send('servidor iniciado con express')
    response.send(productes.nuevosProductos())
});

app.get('/productoRandom', (request, response)=>{
    response.send(nuevosProductos(Math.floor(Math.random() * Productos.length)));
});



app.get('/probando', (request, response)=>{
    response.send('holaa, probando servidoorr')
});

app.get('/*', (request, response)=>{
    response.send('pagina sin funcionar pa')
});

const server = app.listen (8080, ()=>{
    console.log(`Servidor http escuchando en http://localhost:8080/`)
});