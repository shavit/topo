import { Component, OnInit } from '@angular/core';
import { EventItem } from './event-item'
import { MOCK_EVENT_ITEMS } from './MockEventItems'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  selectedItem: EventItem = {
    id: 1,
    title: 'some item',
    picture: 'some picture',
    eventDate: 'some event date'
  }
  items = MOCK_EVENT_ITEMS

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: EventItem): void {
    console.debug('[EventList] onSelect', item);
    this.selectedItem = item
  }

}
