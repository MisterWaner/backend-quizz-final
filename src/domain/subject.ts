export class Subject {
    constructor(private readonly _id: number, private readonly _name: string) {}

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    createSubject(): Subject {
        const id = this.id;
        const name = this.name;
        return new Subject(id, name);
    }
}
