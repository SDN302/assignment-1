import express from 'express';
import {
	createQuiz,
	deleteQuiz,
	getAllQuizzes,
	getQuizById,
	updateQuiz,
} from '../controllers/quiz.controller';

const router = express.Router();

router.get('/', getAllQuizzes);
router.get('/:quizId', getQuizById);

router.post('/', createQuiz);

router.put('/:quizId', updateQuiz);

router.delete('/:quizId', deleteQuiz);

export default router;
