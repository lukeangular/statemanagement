import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import { environment } from 'src/environments/environment.prod';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({books: booksReducer}),
    StoreDevtoolsModule.instrument({maxAge:25, logOnly: environment.production})
  ]
})
export class BooksModule { }
