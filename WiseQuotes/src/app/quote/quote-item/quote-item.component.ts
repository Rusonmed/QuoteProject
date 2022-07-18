import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  public tip!: string;
  public book!: string;
  public tipcode!: string
  public tipauthor!:string
  public favorite!: boolean;
  constructor() { }

  ngOnInit() {
    this.tip ="Use Many Different Learning Strategies";
    this.book="Make it Stick";
    this.tipcode ="Learning Tips";
    this.tipauthor ="Aristotile";
    this.favorite = false;
  }

  toggleFavorite(){
    console.log('We are toggling the favorite state for this quote');
    this.favorite = !this.favorite;
  }

}
