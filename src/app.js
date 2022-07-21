const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override')

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorRoutes = require('./routes/actorRoutes');

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorRoutes);


app.listen('3000', () => console.log('Servidor rodando na porta 3000'));
