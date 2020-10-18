import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './app.form.html',
  styleUrls: ['./app.form.scss']
})

export class AppForm {
  title = 'form';
  hasCompanion = false;
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    cpf: new FormControl(''),
    birthDate: new FormControl(''),
    email: new FormControl(''),
    companion: new FormControl(''),
    cep: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(public httpClient: HttpClient){}

  sendCepRequest(){
    this.httpClient.get('https://correiosapi.apphb.com/').subscribe((res)=>{
        console.log(res);
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }
}
