import { Component, SimpleChanges } from '@angular/core';
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
  address = {};
  mobile = (window.screen.width < 960) ? true : false;
  send = false;

  constructor (
    public httpClient: HttpClient,
    private fb: FormBuilder
  ){}
  
  onSubmit() {
    this.send = true;
    
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Basic #ASDFGW#ERWQERTRYT#%$%$@#$%==');

    const options = {headers: headers};

    console.log({...this.form.value, ...this.address});

    this.httpClient.post('http://localhost/reserva', {...this.form.value, ...this.address}, options).subscribe((res)=>{
    });
  }

  addressFeedback(response) {
    console.log(response);
    this.address = response;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
