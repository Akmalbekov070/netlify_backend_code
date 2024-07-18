const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

//intializing
app.engine('.hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', '.hbs');

app.listen(PORT, () => {
	console.log(`SERVER ${PORT}`);
});
