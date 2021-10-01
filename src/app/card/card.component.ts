import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardData = {
    cardName:"",
    price:"",
    user:"",
    storage:"",
    publicProject:true,
    community:true,
    privateProject:false,
    phone:false,
    subdomain:false,
    statusReport:false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
