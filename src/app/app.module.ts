import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppHeader } from './header/app.header';
import { AppFooter } from './footer/app.footer';
import { AppForm } from './form/app.form';
import { AppTicket } from './ticket/app.ticket';
import { AppAddress } from './address/app.address';

@NgModule({
  declarations: [
    AppHeader,
    AppFooter,
    AppForm,
    AppTicket,
    AppAddress
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppHeader, AppFooter, AppForm, AppTicket, AppAddress]
})
export class AppModule { }
