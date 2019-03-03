import { Component, OnInit } from '@angular/core';
import {Book} from '../../shared/book.model';
import {BookService} from '../../shared/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-piece',
  templateUrl: './book-piece.component.html',
  styleUrls: ['./book-piece.component.css']
})
export class BookPeaceComponent implements OnInit {

    list: Book[];

    constructor(private service: BookService,
                private route: ActivatedRoute) { }

    public parseId;
    // public parseTitle;
    ngOnInit() {

        this.service.getBooks().subscribe(actionArray => {
            this.list = actionArray.map(item => {
                return {
                    id: item.payload.doc.id,
                    ...item.payload.doc.data()} as Book;
            });
        });

        let id = this.route.snapshot.paramMap.get('id');
        this.parseId = id;

        console.log(this.route.snapshot.paramMap.get('id'));
    }




}
