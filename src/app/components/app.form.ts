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
    const CEP = cep.split('.').join("").split('-').join("")
    this.httpClient.get<any>(`https://viacep.com.br/ws/${CEP}/json`).subscribe((res)=>{
      console.log(res);
      this.form.get('address').setValue(`${res['logradouro']} ${res['bairro']}`);
      this.form.get('city').setValue(res['localidade']);
      this.form.get('state').setValue(res['uf']);
      this.form.get('country').setValue('Brasil');
      this.form.get('phone').setValue(res['ddd']);
      this.form.markAllAsTouched();
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
