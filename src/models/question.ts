import mongoose, { Schema } from 'mongoose';

const QuestionSchema = new mongoose.Schema({
	id: { type: Schema.Types.ObjectId, required: true },
	text: { type: Schema.Types.String, required: true },
	options: { type: Schema.Types.Array, required: true },
	correctAnswerIndex: { type: Schema.Types.Number, required: true },
});

export const Question = mongoose.model('Question', QuestionSchema);
