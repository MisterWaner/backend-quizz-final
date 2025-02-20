import { User } from '@/domain/user';

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    createAccount(user: User): Promise<void>;
    deleteAccount(id: string): Promise<void>;
    updateUsername(id: string, username: string): Promise<void>;
    updatePassword(id: string, password: string): Promise<void>;
    loggin(username: string, password: string): Promise<User | null>;
    logout(id: string): Promise<void>;
}
