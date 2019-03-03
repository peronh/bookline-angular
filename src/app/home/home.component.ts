import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/book.model';
import {BookService} from '../shared/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    list: Book[];

    constructor(private service: BookService,
                private router: Router) {  }

    ngOnInit() {
      this.service.getBooks().subscribe(actionArray => {
          this.list = actionArray.map(item => {
              return {
                  id: item.payload.doc.id,
                  ...item.payload.doc.data()} as Book;
          });
      });
  }

    onClick(bookId: number) {
        this.router.navigate(['/konyvek', bookId]);
    }
}
