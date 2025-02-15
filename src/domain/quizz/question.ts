export class Question {
    constructor(public id: number, public type: string, public text: string) {
        this.id = id;
        this.type = type;
        this.text = text;
    }

    static generateRandomQuestion() {
    }

    static getCorrectAnswer() {}
}

export class MultipleChoiceQuestion extends Question {
    constructor(
        id: number,
        text: string,
        type: string,
        public choices: string[]
    ) {
        super(
            id, type, text
        );
        this.choices = choices;
    }
}