import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() id: Number
  @Input() title: String
  @Input() picture: String
  @Input() date: String

  constructor() {
    this.id = 9999
  }

  ngOnInit() {
    this.id = 7
  }

}
