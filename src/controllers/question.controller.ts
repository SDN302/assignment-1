import { Question } from '../models/question.model';
import { Request, Response } from 'express';

export const getAllQuestions = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const questions = await Question.find();

		return res.status(200).json(questions);
	} catch (error: any) {
		console.error(error);

		return res.status(500).json({ error: error.message });
	}
};

//------------------------------------------------------------

export const getQuestionById = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const { questionId } = req.params;

		const question = await Question.findById(questionId);

		return res.status(200).json(question);
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};

//------------------------------------------------------------

export const createQuestion = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const question = new Question(req.body);

		const newQuestion = await question.save();

		return res.status(201).json(newQuestion);
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};

//------------------------------------------------------------

export const updateQuestion = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const { questionId } = req.params;
		const updatedQuestion = await Question.findByIdAndUpdate(
			questionId,
			req.body,
			{ new: true },
		);

		if (!updatedQuestion) {
			return res.status(404).json({ message: 'Question not found' });
		}

		return res.status(200).json(updatedQuestion);
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};

//------------------------------------------------------------

export const deleteQuestion = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const { questionId } = req.params;
		const deletedQuestion = await Question.findByIdAndDelete(questionId);

		if (!deletedQuestion) {
			return res.status(404).json({ message: 'Question not found' });
		}

		return res.status(200).json(deletedQuestion);
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};
