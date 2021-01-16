import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BetService } from '../service/bet.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
interface dataSource {
  'select': any;
  'playername': any;
}
@Component({
  selector: 'app-bet-dashboard',
  templateUrl: './bet-dashboard.component.html',
  styleUrls: ['./bet-dashboard.component.css']
})
export class BetDashboardComponent implements OnInit {
  displayedColumns: string[] = ['select', 'playerName', 'avatar', 'bet', 'wins', 'lost', 'price'];
  displayedColumnsSelected: string[] = ['playerName', 'avatar', 'bet'];
  allPlayersDataSource: any = new MatTableDataSource<any>();
  selectedPlayersDataSource: any = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  playerSearchInput: string;

  constructor(private router: Router, private http: HttpClient, private betService: BetService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.betService.getBetData().subscribe((playerData)=>{
      if(playerData){
        console.log(playerData);
        this.allPlayersDataSource.data = playerData;
        this.allPlayersDataSource.paginator = this.paginator;
        this.allPlayersDataSource.sort = this.sort;
        this.addRequiredFields();
      }
    })
  }

  searchSubmissions(){

  }

  addRequiredFields(){
    this.allPlayersDataSource.data.forEach(element => {
      element.checked = false;
      element.wins = 0;
      element.lost = 0;
    });
  }

  selectPlayer(element): void {
    console.log(element);
    element.checked = !element.checked;
    this.selectedPlayersDataSource.data.push(element)
    let playersSelected = [];
    this.allPlayersDataSource.data.forEach(player => {
      if(player.checked == true){
        playersSelected.push(player)
      }
    });
    this.selectedPlayersDataSource.data = playersSelected;
    this.selectedPlayersDataSource._updateChangeSubscription();
  }

  startGame(){
    window.localStorage.setItem('selectedPlayerData',JSON.stringify(this.selectedPlayersDataSource.data));
    this.router.navigate(['/playground']);
  }
}