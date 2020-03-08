const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);

app.listen(port,  () => {
  console.log(`Server running on port: ${port}`);
});
