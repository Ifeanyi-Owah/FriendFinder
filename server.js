const express = require('express');
const app = express();
const htmRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;

app.use(apiRoutes);
app.use(htmRoutes);
   
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });