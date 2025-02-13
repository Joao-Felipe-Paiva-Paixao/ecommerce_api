import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";
import { NotFoundError } from "../errors/not-found.error";



export class UserRepository {
    
    private collection: CollectionReference;

    constructor() {
        this.collection = getFirestore().collection("users");
    }

    async getAll(): Promise<User[]> {
        const snapshot = await this.collection.get();
        return snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        }) as User[];
    }

    async getById(id: string): Promise<User> {
        const doc = await this.collection.doc(id).get();
        if (doc.exists) {
            return {
                id: doc.id,
                ...doc.data()
            } as User;
        } else {
            throw new NotFoundError("Usuário não encontrado!")
        }
    }

    async save(user: User): Promise<void> {
        await this.collection.add(user);
    }

    async update(id: string, user: User): Promise<void> {
        let docRef = this.collection.doc(id);

        if ((await (docRef.get())).exists) {
            await docRef.set({
                nome: user.nome,
                email: user.email
            });

        } else {
            throw new NotFoundError("Usuário não encontrado!")
        }
    }

    async delete(id: string): Promise<void> {
        await this.collection.doc(id).delete();
    }
}