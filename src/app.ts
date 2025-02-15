//imports
import express, {Request, Response} from "express";
import { config } from "dotenv";


config();

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/', (req: Request, res: Response) => {
    res.send('API démarrée et fonctionnelle');
});

export default app;