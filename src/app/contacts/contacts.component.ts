import { Component, OnInit } from '@angular/core';
import { myContacts, contactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: myContacts[];
  constructor(private contactsservice: contactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactsservice.getContacts();
  }
}
