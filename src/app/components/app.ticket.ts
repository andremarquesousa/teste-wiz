import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './app.ticket.html',
  styleUrls: ['./app.ticket.scss']
})

export class AppTicket {
  title = 'Ingresso';
  api_key = '4a84a8b77f84df64cc6ec6a9a2335f0b';
  page = 1;
  language = 'pt-BR';
  api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}&page=${this.page}&language=${this.language}`;
  movie = {};

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    return this.httpClient.get(this.api).subscribe((res)=>{
      const data = res['results'][0];
      console.log(data);
      this.movie = data;
    });
  }
}
