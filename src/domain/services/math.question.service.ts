import { QuestionService } from '@/application/question/question.service';
import { Question } from '@/domain/question';
import { Branch } from '@/domain/subject';

export class MathQuestionService implements QuestionService {
    generateRandomQuestion(type: Branch): Question {
        const id = Math.floor(Math.random() * 1000);
        const text = '';
        return new Question(id, type, text);
    }
    getCorrectAnswer(question: Question): string {
        throw new Error('Method not implemented.');
    }
}
