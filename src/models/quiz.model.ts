import mongoose, { Schema } from 'mongoose';
import { Question } from './question.model';

const QuizSchema = new mongoose.Schema({
	id: { type: Schema.Types.ObjectId, required: true },
	title: { type: Schema.Types.String, required: true },
	questions: { type: [Schema.Types.ObjectId], required: true, ref: Question },
});

export const Quiz = mongoose.model('Quiz', QuizSchema);
