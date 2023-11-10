import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import petRoutes from './routes/petRoutes'; // Certifique-se de que o caminho esteja correto

const mongoDB = 'mongodb://localhost:27017/petDataBase';

// Conecte-se ao MongoDB (as opções useNewUrlParser e useUnifiedTopology são padrão agora)
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise; // Esta linha é desnecessária se você estiver usando Promises ES6 globalmente

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));
// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/pets', petRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
