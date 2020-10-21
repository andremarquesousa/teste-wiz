import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './app.address.html',
  styleUrls: [
    '../form/app.form.scss',
    './app.address.scss'
  ]
})

export class AppAddress {
  @Output() resForm: EventEmitter<any> = new EventEmitter();
  @Input() sendValue: string;

  formGroup = this.fb.group({
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
      this.formGroup.get('address').setValue(`${res['logradouro']} ${res['bairro']}`);
      this.formGroup.get('city').setValue(res['localidade']);
      this.formGroup.get('state').setValue(res['uf']);
      this.formGroup.get('country').setValue('Brasil');
      this.formGroup.get('phone').setValue(res['ddd']);
      this.formGroup.markAllAsTouched();
    });
  }

  sendCepRequest(e){
    if (this.formGroup.get('cep').valid) {
      this.getCEP(e.target.value)
    }
  }

  ngOnChanges() {
    if(this.formGroup.valid) {
      this.resForm.emit(this.formGroup.value);
    }
  }

  ngOnInit() {
    // this.formGroup.valueChanges.subscribe(val => {
    //   if(this.formGroup.valid) {
    //     this.resForm.emit(this.formGroup.value);
    //   }
    // })
  }
}
