import { Question } from './question';
import { Branch } from './branch';

export class Quiz {
    constructor(
        private readonly _id: number,
        private readonly _length: number,
        private readonly _questions: Question[],
        private readonly _type: Branch
    ) {}

    get id() {
        return this._id;
    }

    get length(): number {
        return this._length;
    }

    get questions(): Question[] {
        return this._questions;
    }

    get type(): Branch {
        return this._type;
    }

    createQuiz(): Quiz {
        const id = Math.floor(Math.random() * 1000);
        const length = 10;
        const questions = this.questions;
        const type = this.type;

        return new Quiz(id, length, questions, type);
    }
}
