import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BetService } from '../service/bet.service';

@Component({
  selector: 'app-bet-dashboard',
  templateUrl: './bet-dashboard.component.html',
  styleUrls: ['./bet-dashboard.component.css']
})
export class BetDashboardComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private betService: BetService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.betService.getBetData().subscribe((data)=>{
      console.log(data);
    })
  }

}
