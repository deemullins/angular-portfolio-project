import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
    model: Book = new Book();
    
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit Successful! Thank you: ', this.model);
  }
}
