import { Injectable } from '@angular/core';
import { Book} from './book.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    formData: Book;

    constructor(private firestore: AngularFirestore) {  }

    getBooks() {
        return this.firestore.collection('books').snapshotChanges();
    }
}