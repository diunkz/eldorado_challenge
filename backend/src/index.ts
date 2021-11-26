import express, { json } from 'express';
import cors from 'cors';
import { db } from './database/config';
import { router } from './routes';
const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(3030, async () => {
    await db.sync();
});