import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsService } from './services/skills.service';
import { ContactFormService } from './services/contact-form.service';
import { PhoneBookService } from './services/phone-book.service';

import { ContactsComponent } from './contacts/contacts.component';

import { ContactsService } from './services/contacts.service';
import { GreetingComponent } from './greeting/greeting.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent,
    GreetingComponent,
    ContactFormComponent,
    PhoneBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PhoneBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
