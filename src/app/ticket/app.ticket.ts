import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './app.ticket.html',
  styleUrls: ['./app.ticket.scss']
})

export class AppTicket {
  @Input() moreTickets: string;

  title = 'Ingresso';
  api_key = '4a84a8b77f84df64cc6ec6a9a2335f0b';
  page = 1;
  language = 'pt-BR';
  api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}&page=${this.page}&language=${this.language}`;
  movie = {};
  numberTickets = 1;
  ticketValue = 20;
  freight = 10;
  subTotal = this.ticketValue * this.numberTickets;
  total = this.subTotal + this.freight;

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get(this.api).subscribe((res)=>{
      const data = res['results'][0];
      this.movie = data;
    });
  }
  
  ngOnChanges() {
    this.numberTickets = this.moreTickets ? 2 : 1;
    this.subTotal = this.ticketValue * this.numberTickets;
    this.total = this.subTotal + this.freight;
    console.log('oi');
  }
}
