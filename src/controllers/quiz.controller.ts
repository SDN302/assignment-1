import { Quiz } from '../models/quiz.model';
import { Request, Response } from 'express';

export const getAllQuizzes = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const quizzes = await Quiz.find();

		return res.status(200).json(quizzes);
	} catch (error: any) {
		console.error(error);

		return res.status(500).json({ error: error.message });
	}
};

//------------------------------------------------------------

export const getQuizById = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const { quizId } = req.params;

		const quiz = await Quiz.findById(quizId);

		return res.status(200).json(quiz);
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};

//------------------------------------------------------------

export const createQuiz = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const quiz = new Quiz(req.body);

		const newQuiz = await quiz.save();

		return res.status(201).json(newQuiz);
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};

//------------------------------------------------------------

export const updateQuiz = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const { quizId } = req.params;
		const updatedQuiz = await Quiz.findByIdAndUpdate(quizId, req.body, {
			new: true,
		});

		if (!updatedQuiz) {
			return res.status(404).json({ message: 'Quiz not found' });
		}

		return res.status(200).json(updatedQuiz);
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};

//------------------------------------------------------------

export const deleteQuiz = async (req: Request, res: Response) => {
	try {
		console.info(`${req.method} ${req.baseUrl}`);

		const { quizId } = req.params;
		const deletedQuiz = await Quiz.findByIdAndDelete(quizId);

		if (!deletedQuiz) {
			return res.status(404).json({ message: 'Quiz not found' });
		}

		return res.status(200).json(deletedQuiz);
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};
