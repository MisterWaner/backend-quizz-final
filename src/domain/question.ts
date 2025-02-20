import { Branch } from './branch';

export class Question {
    constructor(
        private readonly _id: number,
        private readonly _type: Branch,
        private readonly _text: string,
        private readonly _correctAnswer: string
    ) {}

    get id(): number {
        return this._id;
    }

    get type(): Branch {
        return this._type;
    }

    get text(): string {
        return this._text;
    }

    get correctAnswer(): string {
        return this._correctAnswer;
    }
}

export class MultipleChoiceQuestion extends Question {
    constructor(
        id: number,
        text: string,
        type: Branch,
        correctAnswer: string,
        private readonly _choices: string[]
    ) {
        super(id, type, text, correctAnswer);
    }

    get choices(): string[] {
        return this._choices;
    }
}

export class TrueFalseQuestion extends Question {
    constructor(
        id: number,
        text: string,
        type: Branch,
        correctAnswer: string,
        private readonly _choices: string[2]
    ) {
        super(id, type, text, correctAnswer);
    }

    get choices(): string[2] {
        return this._choices;
    }
}
