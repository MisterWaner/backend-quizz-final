import { User } from '@domain/user/user';
import { Subject, SubjectType } from '@domain/quizz/subject';

export class Score {
    constructor(
        public id: string,
        public value: number,
        public date: Date,
        public user: User,
        public subject: Subject,
        public type: SubjectType
    ) {
        this.id = id;
        this.value = value;
        this.date = date;
        this.user = user;
        this.subject = subject;
        this.type = type;
    }

    static getGlobalScore(user: User) {}

    static getMonthlyScore(user: User, month: number, year: number) {}

    static getSubjectScore(user: User, subject: Subject) {}
}
