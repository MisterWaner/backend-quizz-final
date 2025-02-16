import { User } from './user';

export interface UserRepository {
    findById(id: string): Promise<User>;
    findByUsername(username: string): User;
    findAll(): User[];
    createAccount(user: User): Promise<void>;
    deleteAccount(id: string): Promise<void>;
    updateUsername(id: string, username: string): Promise<void>;
    updatePassword(id: string, password: string): Promise<void>;
    loggin(username: string, password: string): Promise<void>;
    logout(id: string): Promise<void>;
}
