import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from '../store/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private _http: HttpClient
  ) { }

  //get books
  getBookList() {
    let url = 'http://localhost:3000/books'
    return this._http.get<any>(url)
  }

  //add books
  addBooks(body:Books) {
    let url = 'http://localhost:3000/books'
    return this._http.post<any>(url,body)
  }
}
