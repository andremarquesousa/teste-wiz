import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppHeader } from './general/app.header';
import { AppFooter } from './general/app.footer';
import { AppForm } from './components/app.form';
import { AppTicket } from './components/app.ticket';

@NgModule({
  declarations: [
    AppHeader,
    AppFooter,
    AppForm,
    AppTicket
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppHeader, AppFooter, AppForm, AppTicket]
})
export class AppModule { }
