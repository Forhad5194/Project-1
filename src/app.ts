import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRouter } from './app/modules/student/student.router';
const app: Application = express();

app.use(express.json());
app.use(cors());






app.use('/api/v1/students', StudentRouter)

const getContoller = (req: Request, res: Response) => {
  res.send('Hello World!');
}
app.get('/', getContoller );

export default app;
