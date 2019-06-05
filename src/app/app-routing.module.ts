import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventItemComponent } from './event-item/event-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AthletesComponent } from './athletes/athletes.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'calendar', pathMatch: 'prefix', component: CalendarComponent },
  { path: 'calendar/:slug', pathMatch: 'prefix', component: EventItemComponent },
  { path: 'athletes', pathMatch: 'prefix', component: AthletesComponent },
  { path: 'rankings', pathMatch: 'prefix', component: RankingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
