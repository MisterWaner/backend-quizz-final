import { Score } from './score';
import { User } from '@domain/user/user';
import { Subject } from '@domain/quizz/subject';

export interface ScoreRepository {
    getGlobalScore(user: User): Score;
    getMonthlyScore(user: User, month: number, year: number): Score;
    getSubjectScore(user: User, subject: Subject): Score;

    getUsersDailyScore(): Promise<User[]>;
    getUsersMonthlyScore(): Promise<User[]>;
    getTopFiveDailyScore(): Promise<User[]>;
    getTopFiveMonthlyScore(): Promise<User[]>;
}