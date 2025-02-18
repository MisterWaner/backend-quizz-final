import { getNanoid } from "@/lib/helpers";
import { IUser } from "@domain/types";

export class User implements IUser {
    constructor(
        public id: string,
        public username: string,
        public password: string
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    static async createAccount(username: string, password: string): Promise<User> {
        const id = await getNanoid();

        return new User(id, username, password);
    }
}
