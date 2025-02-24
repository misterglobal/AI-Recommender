import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api';
import { config } from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

const port = config.port;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;