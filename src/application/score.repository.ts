import { Score } from '@/domain/score';
import { User } from '@/domain/user';

export interface ScoreRepository {
    getGlobalUserScore(): Score;
    getMonthlyUserScore(): Score;
    getSubjectUserScore(): Score;

    getUsersDailyScore(): Promise<User[]>;
    getUsersMonthlyScore(): Promise<User[]>;
    getTopFiveDailyScore(): Promise<User[]>;
    getTopFiveMonthlyScore(): Promise<User[]>;
}
