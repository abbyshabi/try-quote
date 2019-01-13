import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {Quote} from '../quote'
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;

  @Output() isComplete= new EventEmitter<boolean>();
  @Output() toDelete = new EventEmitter<boolean>(); 

  likeCount:number = 0;
  dislikeCount :number =0;
  
  like(){
    this.likeCount=this.likeCount +1
  }
  dislike (){
    this.dislikeCount =this.dislikeCount +1
  }
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(remove:boolean){
    this.toDelete.emit(remove);
  }
  
  
  constructor() { }

  ngOnInit() {
  }
  
}

