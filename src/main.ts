import express from 'express';
import cors from 'cors';
import { DEVELOPMENT, server } from './config/config';
import connectDb from './config/db';
import question from './routes/question.route';
import quiz from './routes/quiz.route';
import morgan from 'morgan';
import { setupSwagger } from './swagger/swagger';

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
app.use(morgan('dev'));

// Routes
app.use('/questions', question);
app.use('/quizzes', quiz);

// Swagger
setupSwagger(app);

app.listen(server.port, async () => {
	// Connect to MongoDB
	await connectDb();

	console.info(`Listening on PORT ${server.port}`);

	if (DEVELOPMENT) {
		console.info(
			`Swagger UI available at http://${server.host}:${server.port}/api-docs`,
		);
	}
});
