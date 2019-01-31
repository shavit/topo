import { Component, OnInit } from '@angular/core';

import { MOCK_EVENT_ITEMS, EventItem } from './MockEventItems';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})

export class EventListComponent implements OnInit {

  title : String
  items : Array<EventItem>

  constructor() {
    this.title =  'Event List'
    this.items = MOCK_EVENT_ITEMS
  }

  ngOnInit() {
  }

}
