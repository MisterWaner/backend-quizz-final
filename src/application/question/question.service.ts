import { SubjectType } from '@/domain/quizz/subject';
import { Question } from '@domain/quizz/question';
import { QuestionRepository } from '@domain/quizz/question.repository';

export class QuestionService implements QuestionRepository {
    generateRandomQuestion(type: SubjectType): Question {
        return this.generateRandomQuestion(type);
    }
    getCorrectAnswer(question: Question): string {
        return this.getCorrectAnswer(question);
    }
}