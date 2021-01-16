import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetDashboardComponent } from './bet-dashboard/bet-dashboard.component';
import { BetPlaygroundComponent } from './bet-playground/bet-playground.component';


const routes: Routes = [
  {
    path: '',
    component: BetDashboardComponent,
  },
  {
    path: 'playground',
    component: BetPlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
