import { User } from '@domain/user/user';
import { UserRepository } from '@application/user.repository';
import { comparePassword, hashPassword } from '@/lib/helpers';

import { db } from './database/sqlite';

export class SQLiteUserRepository implements UserRepository {
    async createAccount(user: User): Promise<void> {
        const hashedPassword = await hashPassword(user.password);
        user.password = hashedPassword;

        db.prepare(
            'INSERT INTO users (id, username, password) VALUES (?, ?, ?)'
        ).run(user.id, user.username, user.password);
    }

    async findById(id: string): Promise<User | null> {
        const user = db
            .prepare('SELECT * FROM users WHERE id = ?')
            .get(id) as User;
        if (!user) return null;

        return new User(user.id, user.username, user.password);
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = db
            .prepare('SELECT * FROM users WHERE username = ?')
            .get(username) as User;
        if (!user) return null;

        return new User(user.id, user.username, user.password);
    }

    async findAll(): Promise<User[]> {
        const users = db.prepare('SELECT * FROM users').all() as User[];
        return users;
    }

    async updateUsername(id: string, username: string): Promise<void> {
        const user = await this.findById(id);
        if (!user) throw new Error('User not found');

        const userExists = db
            .prepare('SELECT * FROM users WHERE username = ?')
            .get(username) as User;

        if (userExists) throw new Error('Username already exists');

        db.prepare('UPDATE users SET username = ? WHERE id = ?').run(
            username,
            id
        );
    }

    async updatePassword(id: string, password: string): Promise<void> {
        const user = await this.findById(id);
        if (!user) throw new Error('User not found');

        const hashedPassword = await hashPassword(password);
        db.prepare('UPDATE users SET password = ? WHERE id = ?').run(
            hashedPassword,
            id
        );
    }

    async loggin(username: string, password: string): Promise<User | null> {
        const user = await this.findByUsername(username);

        if (!user) throw new Error('User not found');

        const isPasswordCorrect = await comparePassword(
            password,
            user.password
        );
        if (!isPasswordCorrect) throw new Error('Wrong password');

        return user;
    }
    logout(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async deleteAccount(id: string): Promise<void> {
        const user = await this.findById(id);
        if (!user) throw new Error('User not found');

        db.prepare('DELETE * FROM users WHERE id = ?').run(id);
    }
}
