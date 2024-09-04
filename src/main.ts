import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Constants
const PORT: number = parseInt(process.env['PORT'] as string) || 3000;

// CORS Middleware
const corsOptions = {
	origin:
		process.env['APP_ENV'] == 'developement' ? '*' : process.env['ORIGIN'],
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

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});
