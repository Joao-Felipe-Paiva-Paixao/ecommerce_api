import { NotFoundError } from "../errors/not-found.error";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "./auth.service";

export class UserService {

    private userRepository: UserRepository;
    private authService: AuthService

    constructor() {
        this.userRepository = new UserRepository()
        this.authService = new AuthService();
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.getAll();
    }

    async getById(id: string): Promise<User> {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new NotFoundError("Usuário não encontrado!")
        }
        return user;
    }

    async save(user: User) {
        const userAuth = await this.authService.create(user);
        user.id = userAuth.uid;
        await this.userRepository.update(user)
    }

    async update(id: string, user: User) {
        const _user = await this.userRepository.getById(id);
        if (!_user) {
            throw new NotFoundError("Usuário não encontrado!")
        }

        _user.nome = user.nome
        _user.email = user.email

        this.userRepository.update(_user);
    }

    async delete(id: string): Promise<void> {
        return this.userRepository.delete(id)
    }

}