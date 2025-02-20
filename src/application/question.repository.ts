import { Question } from '@/domain/question';
import { Branch } from '@/domain/branch';

export interface QuestionRepository {
    generateQuestion(type: Branch): Question;
    isCorrectAnswer(Question: Question): string;
}
