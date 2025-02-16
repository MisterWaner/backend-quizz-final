import { User } from '@domain/user/user';
import { UserRepository } from '@domain/user/user.repository';

export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createAccount(username: string, password: string): Promise<User> {
        const user = await User.createAccount(username, password);
        await this.userRepository.createAccount(user);

        return user;
    }

    async findById(id: string): Promise<User> {
        return this.userRepository.findById(id);
    }

    async findByUsername(username: string): Promise<User> {
        return this.userRepository.findByUsername(username);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async updateUsername(id: string, username: string): Promise<void> {
        await this.userRepository.updateUsername(id, username);
    }

    async updatePassword(id: string, password: string): Promise<void> {
        await this.userRepository.updatePassword(id, password);
    }

    async loggin(username: string, password: string): Promise<void> {
        await this.userRepository.loggin(username, password);
    }

    async logout(id: string): Promise<void> {
        await this.userRepository.logout(id);
    }

    async deleteAccount(id: string): Promise<void> {
        await this.userRepository.deleteAccount(id);
    }
}
