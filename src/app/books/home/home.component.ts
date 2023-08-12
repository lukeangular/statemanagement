import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BookService } from '../services/book.service';
import { getBooks, addBooks } from '../store/books.action';
import { Store } from '@ngrx/store'
import { BooksState } from '../store/books.reducer';
import { Books } from '../store/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _bookService: BookService,
    private _store: Store<BooksState>
  ) { }

  ngOnInit(): void {
    this.formBuilder();
    this.getData();
  }


  // form builder
  booksForm: FormGroup;
  formBuilder() {
    this.booksForm = this._fb.group({
      title: ["", [Validators.required]],
      author: ["", [Validators.required]],
      cost: ["", [Validators.required]],
    })
  }

  // get data
  bookData: any = [];
  bookList$: any = []
  getData() {
    this._store.dispatch(getBooks());
    this.bookList$ = this._store.select('books')
    // this._bookService.getBookList().subscribe((res) => {
    //   this.bookData = res;
    //   console.log(res)
    // })
  }

  // add form
  onSubmit() {
    if (this.booksForm.invalid) return;
    this._store.dispatch(addBooks(this.booksForm.value))
    // this._bookService.addBooks(this.booksForm.value).subscribe((res) => {
    //   
    //   this.getData();
    // })
    this.closeFormModal();
  }

  // close modal
  closeFormModal() {
    const modal = document.getElementById('closeModal');
    if (modal) {
      modal.click();
    }
  }



}
