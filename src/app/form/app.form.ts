import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './app.form.html',
  styleUrls: ['./app.form.scss']
})

export class AppForm {
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
    companionEmail: ['', Validators.email]
  });
  data = {};
  mobile = (window.screen.width < 960) ? true : false;

  constructor (
    public httpClient: HttpClient,
    private fb: FormBuilder
  ){}
  
  onSubmit() {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Basic #ASDFGW#ERWQERTRYT#%$%$@#$%==');

    const options = {headers: headers};

    // console.log(this.data);
    // console.log(this.form.value);

    this.httpClient.post('http://localhost/reserva', this.form.value, options).subscribe((res)=>{
    });
  }

  addressFeedback(response) {
    console.log('teste');
    // this.data = {...this.form.value, ...response.value};
  }
}
