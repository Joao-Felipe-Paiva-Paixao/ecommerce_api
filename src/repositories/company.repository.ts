import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { Company } from "../models/company.model.js";

export class CompanyRepository {

    private collection: CollectionReference;

    constructor() {
        this.collection = getFirestore().collection("companies");
    }

    async getAll(): Promise<Company[]> {
        const snapshot = await this.collection.get();
        return snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        }) as Company[];
    }

    async getById(id: string): Promise<Company | null> {
        const doc = await this.collection.doc(id).get();
        if (doc.exists) {
            return {
                id: doc.id,
                ...doc.data()
            } as Company;
        } else {
            return null
        }
    }

    async save(company: Company): Promise<void> {
        await this.collection.add(company);
    }

    async update(company: Company): Promise<void> {
        let docRef = this.collection.doc(company.id!);
        delete company.id;
        await docRef.set(company);
    }
}