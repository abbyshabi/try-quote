import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =[
    new Quote (1,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,3,14)),
    new Quote (2,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,6,9) ),
    new Quote (3,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,7,12)),
    new Quote (4,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,4,18)),
    new Quote (5,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,2,14)),
    new Quote (6,'Life','My life is my message',' Mahatma Gandhi',new Date(2018,11,14)),
    new Quote (7,'Life','My life is my message',' Mahatma Gandhi',new Date(2019,0,10)),
  ]
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
completeQuote(isComplete,index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
     
      }
      deleteQuote(toDelete,index){
        if (toDelete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].title}`)
            
            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)

  }
  constructor() { }

  ngOnInit() {
  }

}
