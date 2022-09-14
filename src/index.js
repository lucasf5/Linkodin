import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import rotas from './app/routes/index.js';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert {type: "json"};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api-docs', serve, setup(swaggerDocument));

rotas(app);

export default app;