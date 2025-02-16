import { SubjectType } from './subject';

export class Question {
    constructor(
        public id: number,
        public type: SubjectType,
        public text: string
    ) {
        this.id = id;
        this.type = type;
        this.text = text;
    }
}

export class MultipleChoiceQuestion extends Question {
    constructor(
        id: number,
        text: string,
        type: SubjectType,
        public choices: string[]
    ) {
        super(id, type, text);
        this.choices = choices;
    }
}
