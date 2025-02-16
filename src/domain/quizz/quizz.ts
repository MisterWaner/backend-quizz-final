import { Question } from './question';
import { SubjectType } from './subject';

export class Quizz {
    constructor(
        public id: number,
        public length: number,
        public questions: Question[],
        public type: SubjectType
    ) {
        this.id = id;
        this.length = 10;
        this.questions = questions;
        this.type = type;
    }

    static getQuestions(): Question[] {
        return [];
    }
}
