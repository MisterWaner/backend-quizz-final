import { User } from "@domain/user/user";

export interface UserRepository {
    findById(id: string): User;
    findByUsername(username: string): User;
    findAll(): User[];
    createAccount(user: User): void;
    deleteAccount(id: string): void;
    updateUsername(id: string, username: string): void;
    updatePassword(id: string, password: string): void;
    loggin(username: string, password: string): void;
    logout(id: string): void;
}