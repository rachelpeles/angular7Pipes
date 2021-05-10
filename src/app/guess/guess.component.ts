import { EventEmitter,Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  @Output() guessesColorsOut: EventEmitter<string[]>=new EventEmitter<string[]>();
  colors:string[] =["red","green","yellow","purple","blue","pink","orange"];
  guessColors :string[] =["gray","gray","gray","gray"];
  i:number =0;
  constructor() { 
    
  }
  selectColor(co:string ){
    if(this.i<4){
        this.guessColors[this.i]=co;
        this.i++; 
      }
  }
  ngOnInit(): void {
  }
  guess(){
    this.guessesColorsOut.emit(this.guessColors); 
    this.guessColors=["gray","gray","gray","gray"] ;
    this.i=0; 
  }
}
