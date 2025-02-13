import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository()
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.getAll();
    }

    async getById(id: string): Promise<User> {
        return this.userRepository.getById(id);
    }

    async save(user: User): Promise<void> {
        return this.userRepository.save(user)
    }

    async update(id: string, user: User): Promise<void> {
        return this.userRepository.update(id, user)
    }

    async delete(id: string): Promise<void> {
        return this.userRepository.delete(id)
    }

}