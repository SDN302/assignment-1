import express from 'express';
import cors from 'cors';
import { server } from './config/config';

// CORS Middleware
const corsOptions = {
	origin: server.origin,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	optionsSuccessStatus: 204,
};

//------------------------------------------------------------

// Express App
const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

app.listen(server.port, () => {
	console.log(`Listening on PORT ${server.port}`);
});
