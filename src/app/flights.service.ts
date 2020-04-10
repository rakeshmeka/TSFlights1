import { Injectable, OnInit } from '@angular/core';
import { Flight } from './flight.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { 
    this.backEndURL = this.getBackEndUrl();
  }

  backEndURL: string;

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/query/${orig}/${dest}`);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights`);
  }

  postFlight(flight: Flight) {
    return this.http.post(`${this.backEndURL}/flights`,flight).subscribe(data =>{
    })
  }

  deleteFlight(id: number) {
    
  }

  getBackEndUrl(): string {
    const segements = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segements[2]) ? 'http://localhost:3002' : 'https://nestjs-typeorm-postgres.herokuapp.com';
  }

}


