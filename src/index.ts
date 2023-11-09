import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import petRoutes from './routes/petRoutes';

const mongoDB = 'mongodb://localhost:27017/petDataBase';

// Connect without useNewUrlParser and useUnifiedTopology
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/pets', petRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
