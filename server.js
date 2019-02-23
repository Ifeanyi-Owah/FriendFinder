const express = require('express');
const app = express();
const htmRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);
app.use(htmRoutes);
   

  

app.listen(3000);