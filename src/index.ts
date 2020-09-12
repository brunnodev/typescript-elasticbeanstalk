import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(cors({ exposedHeaders: ['*', 'token'] }));
app.options('*', cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', async (req: Request, res: Response) => {
  return res.send({ error: false, message: 'Success' });
});

app.listen(process.env.PORT || 8080);
