import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

//services
import { contactsService } from './services/contacts.service';

@NgModule({
  declarations: [AppComponent, ContactsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [contactsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
