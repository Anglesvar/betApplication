import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-playground',
  templateUrl: './bet-playground.component.html',
  styleUrls: ['./bet-playground.component.css']
})
export class BetPlaygroundComponent implements OnInit {

  data : any;
  checkRandom: boolean = false;
  winningBet: number;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.data = JSON.parse(window.localStorage.getItem('selectedPlayerData'));
    this.playGame();
  }
  playGame(): void{
    this.checkRandom = false;
    while(true){
      let winningBetNumber = Math.floor((Math.random()*9) + 1);
      this.data.forEach(player => {
        if(player['Bet'] == winningBetNumber){
          player['gameWon'] = true;
          player['wins']++;
          this.checkRandom = true;
          player['Price']*=2;
          this.winningBet = player['Bet'];
        }
        else{
          player['gameWon'] = false;
        }
      });
      if(this.checkRandom){
        this.updateWinner();  //Update in localstorage
        break;
      }
    }
  }

  updateWinner(){
    window.localStorage.setItem('selectedPlayerData', JSON.stringify(this.data));
  }


}
