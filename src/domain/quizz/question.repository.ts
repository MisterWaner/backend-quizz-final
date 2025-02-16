import { Question } from './question';
import { SubjectType } from './subject';

export interface QuestionRepository {
    generateRandomQuestion(type: SubjectType): Question;
    getCorrectAnswer(question: Question): string;
}