import { Quizz } from './quizz';
import { Question } from './question';
import { User } from '@domain/user/user';
import { Score } from '@domain/score/score';

export interface QuizzRepository {
    getQuestions(): Question[];
    getScore(user: User): Score,
}