import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './app.form.html',
  styleUrls: ['./app.form.scss']
})

export class AppForm {
  title = 'form';
  hasCompanion = false;
  form = this.fb.group({
    firstName: [''],
    lastName: [''],
    cpf: [''],
    birthDate: [''],
    email: ['', Validators.email],
    companion: [''],
    companionFirstName: [''],
    companionLastName: [''],
    companionCpf: [''],
    companionBirthDate: [''],
    companionEmail: ['', Validators.email],
    cep: [''],
    address: [''],
    country: [''],
    state: [''],
    city: [''],
    phone: ['']
  });

  constructor(public httpClient: HttpClient, private fb: FormBuilder){}

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
