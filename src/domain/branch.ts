import { Subject } from './subject';

export class Branch {
    constructor(
        private readonly _id: number,
        private readonly _name: string,
        private readonly _subject: Subject
    ) {}

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get subject(): Subject {
        return this._subject;
    }

    create(): Branch {
        const id = this.id;
        const name = this.name;
        const subject = this.subject;
        return new Branch(id, name, subject);
    }
}
