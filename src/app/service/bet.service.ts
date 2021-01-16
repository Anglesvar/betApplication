import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getBetData(): Observable<any>{
    return this.http.get("https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json");
  }
  sanitize(imgURL) {
    return this.sanitizer.bypassSecurityTrustUrl(imgURL);
  }
}
