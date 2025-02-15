import { Question } from "./question";

export class Quizz {
    constructor(
        public id: number,
        public length: number,
        public questions: Question[],
        public type: string,
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