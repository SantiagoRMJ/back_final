const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors')

const teacherRouter = require('./components/teacher/router');
const sheetRouter = require('./components/sheet/router');
const studentRouter = require('./components/student/router')

const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017/neoSchool'

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('proyecto final backend');
});
app.use('/', teacherRouter);
app.use('/', sheetRouter);
app.use('/', studentRouter);


mongoose.connect(MongoURI,{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
})
.then(()=> console.log('conectado a la base de datos: ' + MongoURI))
.catch( e => console.error('no estoy conectado'));


app.listen(PORT, ()=> console.log("servidor levantado en el puerto " + PORT))