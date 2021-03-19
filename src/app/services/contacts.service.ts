import { Injectable } from '@angular/core';

export class myContacts {
  firstname: string;
  lastname: string;
  number: string;
  frequent: boolean;
}

@Injectable()
export class contactsService {
  private contacts: myContacts[] = [
    {
      firstname: 'Amit',
      lastname: 'Jain',
      number: '9657262180',
      frequent: true,
    },
    {
      firstname: 'durvesh',
      lastname: 'ramane',
      number: '7040774046',
      frequent: true,
    },
    {
      firstname: 'kalpesh',
      lastname: 'mehta',
      number: '9096680151',
      frequent: false,
    },
    {
      firstname: 'bhaghyesh',
      lastname: 'shah',
      number: '9850168601',
      frequent: false,
    },
  ];

  getContacts(): myContacts[] {
    return this.contacts;
  }

  getFrequentContacts(): myContacts[] {
    return this.contacts.filter((contact: myContacts) => {
      return contact.frequent === true;
    });
  }
}
