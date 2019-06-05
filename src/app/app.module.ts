import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { EventListComponent } from './event-list/event-list.component';
import { FooterComponent } from './footer/footer.component';
import { EventTableComponent } from './event-table/event-table.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { EventItemComponent } from './event-item/event-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AthletesComponent } from './athletes/athletes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RankingsComponent } from './rankings/rankings.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EventListComponent,
    CardComponent,
    FooterComponent,
    EventTableComponent,
    EventItemComponent,
    NavigationComponent,
    AthletesComponent,
    CalendarComponent,
    HomepageComponent,
    RankingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
