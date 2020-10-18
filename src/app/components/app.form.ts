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

  constructor (
    public httpClient: HttpClient,
    private fb: FormBuilder
  ){}

  getCEP(cep) {
    this.httpClient.get('https://viacep.com.br/ws/' + cep + '/json/').subscribe((res)=>{
      console.log(res);
    });
  }

  sendCepRequest(e){
    if (this.form.get('cep').valid) {
      this.getCEP(e.target.value)
    }
  }

  onSubmit() {
    console.warn(this.form.value);
  }
}
