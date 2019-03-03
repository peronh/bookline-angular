import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/book.service';
import {NgForm} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    constructor(private service: BookService,
        private firestore: AngularFirestore,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            writer: '',
            title: '',
            isbn: '',
            desc: '',
        };
    }

    onSubmit(form: NgForm) {
        let data = Object.assign({}, form.value);
        delete data.id;
        if (form.value.id == null)
            this.firestore.collection('books').add(data);
        else
            this.firestore.doc('books/' + form.value.id).update(data);
        this.resetForm(form);
        this.toastr.success('tétel felvitele sikeres',  'Bookline');
    }
}


