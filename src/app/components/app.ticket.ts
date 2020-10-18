import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './app.ticket.html',
  styleUrls: ['./app.ticket.scss']
})

export class AppTicket {
  title = 'Ingresso';
  api = 'https://developers.themoviedb.org/3/movies/get-upcoming';

  constructor(private httpClient: HttpClient){}

  options = {
    responseType: 'json',
    withCredentials: false,
    params: {
      api_key: '4a84a8b77f84df64cc6ec6a9a2335f0b',
      page: 1,
      region: 'ISO3166-2'
    }
  }

  ngOnInit() {
    this.httpClient.get(this.api).subscribe((res)=>{
      console.log(res);
    });
  }
}
