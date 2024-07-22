import express from 'express'; //importong web server from express
// allows to simplify connection to mongo and use shorter syntax for queries
import mongoose from 'mongoose'; 
import bodyParser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';

const app = express(); //creating web server with the variable app
const PORT = 4000;
 
// mongo connection
//allow to use promise to connect mongo
//promise expects a response before it tells connexn was a success
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true })); // allow to pass the request and encode it properly
app.use(bodyParser.json());

//CORS setup
app.use(cors());

routes(app);

//CREATE OUR CODE
app.get('/',(req, res) =>
       res.send(`Our Soccer Application is running on ${PORT}`)
);

app.listen(PORT, ()=>
    console.log(`Your soccer server is running on port ${PORT}`)
);