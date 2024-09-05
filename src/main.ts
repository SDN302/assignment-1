import express from 'express';
import cors from 'cors';
import { server } from './config/config';
import connectDb from './config/db';
import question from './routes/question.router';

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

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/questions', question);

app.listen(server.port, async () => {
	// Connect to MongoDB
	await connectDb();

	console.info(`Listening on PORT ${server.port}`);
});
