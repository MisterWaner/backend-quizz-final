export class User {
    constructor(
        private readonly _id: string,
        private readonly _username: string,
        private readonly _password: string
    ) {}

    get id(): string {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    get password(): string {
        return this._password;
    }

    createUser(): User {
        const id = this.id;
        const username = this.username;
        const password = this.password;
        return new User(id, username, password);
    }
}
