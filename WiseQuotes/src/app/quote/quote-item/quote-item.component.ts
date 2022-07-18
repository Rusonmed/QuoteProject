import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
public quote!: Quote
public favorite!:boolean
constructor() { }

  ngOnInit() {
this.quote = new Quote('Use Many Different Learning Strategies','Maki it Stick');  }

  toggleFavorite(){
    console.log('We are toggling the favorite state for this quote');
    this.favorite = !this.favorite;
  }

}
