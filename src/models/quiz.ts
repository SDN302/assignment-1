import mongoose, { Schema } from 'mongoose';
import { Question } from './question';

const QuizSchema = new mongoose.Schema({
	id: { type: Schema.Types.ObjectId, required: true },
	title: { type: Schema.Types.String, required: true },
	questions: { type: [Question], required: true },
});

export const Quiz = mongoose.model('Quiz', QuizSchema);
