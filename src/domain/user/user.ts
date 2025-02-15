import { getNanoid } from "@/lib/helpers";

export class User {
    constructor(
        public id: string,
        public username: string,
        public password: string
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    static async createAccount(username: string, password: string) {
        const id = await getNanoid();

        return new User(id, username, password);
    }
}
