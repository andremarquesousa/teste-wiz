import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './app.ticket.html',
  styleUrls: ['./app.ticket.scss']
})

export class AppTicket {
  title = 'Ingresso';

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get('https://developers.themoviedb.org/3/movies/get-upcoming?api_key=4a84a8b77f84df64cc6ec6a9a2335f0b&page=1&region=ISO3166-2:BR', { withCredentials: true }).subscribe((res)=>{
      console.log(res);
    });
  }
}
