import { QuestionService } from '@/application/question/question.service';
import { Question } from '@domain/quizz/question';
import { SubjectType } from '@domain/quizz/subject';

export class MathQuestionService implements QuestionService {
    generateRandomQuestion(type: SubjectType): Question {
        const id = Math.floor(Math.random() * 1000);
        const text = '';
        return new Question(id, type, text);
    }
    getCorrectAnswer(question: Question): string {
        throw new Error('Method not implemented.');
    }
}
