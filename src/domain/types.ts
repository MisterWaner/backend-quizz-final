export interface IUser {
    id: string;
    username: string;
    password: string;
}

export interface ISubject {
    id: number;
    name: string;
}

export interface IBranch {
    id: number;
    name: string;
    subject: ISubject;
}

export interface IQuiz {
    id: string;
    length: number;
    type: IBranch;
    questions: IQuestion[];
}

export interface IQuestion {
    id: number;
    text: string;
    correctAnswer: string;
}

export interface IScore {
    id: string;
    value: number;
    date: Date;
    user: IUser;
    about: IBranch;
}
