const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../docs')))

app.listen(port, () => console.log(`Listening to ${port}`));