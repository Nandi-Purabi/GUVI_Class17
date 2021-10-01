import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pricing-Table';
  cards=[
    {
      cardName:"FREE",
      price:"$0",
      user:"Single User",
      storage:"5GB Storage",
      publicProject:true,
      community:true,
      privateProject:false,
      phone:false,
      subdomain:false,
      statusReport:false
    },
    
    {
      cardName:"PLUS",
      price:"$9",
      user:"5 Users",
      storage:"50GB Storage",
      publicProject:true,
      community:true,
      privateProject:true,
      phone:true,
      subdomain:true,
      statusReport:false
    },

    {
      cardName:"PRO",
      price:"$49",
      user:"Unlimited Users",
      storage:"150GB Storage",
      publicProject:true,
      community:true,
      privateProject:true,
      phone:true,
      subdomain:true,
      statusReport:true
    }  
  ]
}
