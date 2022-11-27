import { express, json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from '../../routes/routes';

// construct express function
const app = express();

// connect ke database mongoDB
mongoose.connect('mongodb://localhost:27017/restful_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected'));

// midlleware
app.use(cors());
app.use(express, json());
app.use('/product', route);

// listening to port
app.listen('3000', () => {
  console.log('Server running at port: 3000');
});
