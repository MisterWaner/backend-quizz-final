import { Question } from '@/domain/question';

export interface QuizRepository {
    getQuestions(): Question[];
}
