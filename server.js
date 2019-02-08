const express = require('express');
const app = express();
const htmRoutes = require('./app/routing/htmlRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmRoutes);
   

  

app.listen(3000);