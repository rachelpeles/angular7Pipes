import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-random-colors',
  templateUrl: './show-random-colors.component.html',
  styleUrls: ['./show-random-colors.component.css']
})
export class ShowRandomColorsComponent implements OnInit {
  @Input () currentColors : string[] =["#123456","#987576","#123456","#987576"];
  
  @Input () flag: boolean=false;
  constructor() {
    
   }
 
  ngOnInit(): void {
  }

}
