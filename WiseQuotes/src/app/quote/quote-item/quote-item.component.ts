import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  public tip!: string;
  public book!: string;
  constructor() { }

  ngOnInit() {
    this.tip ="Use Many Different Learning Strategies";
    this.book="Make it Stick";
  }

}
