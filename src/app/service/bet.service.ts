import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http: HttpClient) { }

  getBetData(): Observable<any>{
    return this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json");
  }
}
