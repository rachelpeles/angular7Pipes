import { EventEmitter,Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rundom-colors-arr',
  templateUrl: './rundom-colors-arr.component.html',
  styleUrls: ['./rundom-colors-arr.component.css']
})
export class RundomColorsArrComponent implements OnInit {
  colors:string[] =["red","green","yellow","purple","blue","pink","orange"];
  constructor() { }
  @Input ()currentColors : string[] =[];
  @Output() currentColors1: EventEmitter<string[]>=new EventEmitter<string[]>();
  ngOnInit(): void {
  }
  rundomColor(){
    for(let i=0;i<4;i++){
        this.currentColors[i]=this.colors[Math.floor(Math.random()*this.colors.length)];
    }
    this.currentColors1.emit(this.currentColors);
    console.log(this.currentColors);
  }
}
