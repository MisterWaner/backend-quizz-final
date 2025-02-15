export class Subject {
    constructor(public id: number, public name: string) {
        this.id = id;
        this.name = name;
    }

    getTypes(): string[] {
        return [];
    }
}

export class SubjectType {

    subject: Subject;
    constructor(public id: number, public name: string, subject: Subject) {
        this.id = id;
        this.name = name;
        this.subject = subject;
    }
    
}
