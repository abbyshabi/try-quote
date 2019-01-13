import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LittyQuotes';
  quotes =[
    new Quote (1,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,3,14)),
    new Quote (2,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,6,9) ),
    new Quote (3,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,7,12)),
    new Quote (4,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,4,18)),
    new Quote (5,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,2,14)),
    new Quote (6,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,11,14)),
    new Quote (7,'Life','My life is my message',' Mahatma Gandhi',new Date(2019,0,10)),
  ]


constructor(){

}

}

