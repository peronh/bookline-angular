import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/book.service';
import {Book} from '../../shared/book.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  list: Book[];
  constructor(private service: BookService,
              private  firestore: AngularFirestore,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getBooks().subscribe(actionArray => {
        this.list = actionArray.map(item => {
            return {
                id: item.payload.doc.id,
            ...item.payload.doc.data()} as Book;
        });
    });
  }

  onEdit(book: Book) {
      if (confirm("Biztosan szerkeszti tételt?")) {
      this.service.formData = Object.assign({}, book);
      }
    }

  onDelete(id: string) {
      if (confirm("Biztosan törli a tételt?")) {
          this.firestore.doc('books/' + id).delete();
          this.toastr.warning('tétel törölve',' Bookline ');
      }
  }

}
