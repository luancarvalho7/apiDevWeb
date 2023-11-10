"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const petRoutes_1 = __importDefault(require("./routes/petRoutes")); // Certifique-se de que o caminho esteja correto
const mongoDB = 'mongodb://localhost:27017/petDataBase';
// Conecte-se ao MongoDB (as opções useNewUrlParser e useUnifiedTopology são padrão agora)
mongoose_1.default.connect(mongoDB);
mongoose_1.default.Promise = global.Promise; // Esta linha é desnecessária se você estiver usando Promises ES6 globalmente
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
// Body parsing middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/pets', petRoutes_1.default);
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
