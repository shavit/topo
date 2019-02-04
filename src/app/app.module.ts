import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { EventListComponent } from './event-list/event-list.component';
import { FooterComponent } from './footer/footer.component';
import { EventTableComponent } from './event-table/event-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EventListComponent,
    CardComponent,
    FooterComponent,
    EventTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
