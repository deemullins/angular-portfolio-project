import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  contacts: Contact[] = [
    {
      firstName: 'Bill',
      lastName: 'Murray',
      phoneNumber: '5555555555',
      email: 'billmurrayallday@yahoo.com'
    },
    {
      firstName: 'Rosa',
      lastName: 'Parks',
      phoneNumber: '7777777777',
      email: 'dontmesswithrosa@gmail.com'
    },
    {
      firstName: 'Michael',
      lastName: 'Jordan',
      phoneNumber: '2458645245',
      email: 'GOAT@michaeljordan.com'
    },
    {
      firstName: 'Jenny',
      lastName: 'Lewis',
      phoneNumber: '5622124575',
      email: 'indiechk@aol.com'
    }
  ];

  getContacts = (): Observable<Contact[]> => {
    return of(this.contacts);
  };
}
