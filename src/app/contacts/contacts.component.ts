import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  dataService: ContactsService;

  constructor(private contactsService: ContactsService) { 
    this.dataService = this.contactsService;
  }

  ngOnInit() {
    this.dataService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  getContacts = (): Observable<Contact[]> => {
    return of(this.contacts);
  };

}
