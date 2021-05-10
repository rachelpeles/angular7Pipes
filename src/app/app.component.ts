import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeWork5';
  currentColors :string[] =["#123456","#123456","#123456","#123456"];
  guessesColors1 :string[]=[];
  bool:number=0;
  pgiaa:number=0;
  history:any =[];
  historyboolPgiaa:string[] =[];
  g:number=0;
  flag:number=0;
  ifCorrect(){
    let a=0,b=0;
    for (a = 0,this.bool=0,this.pgiaa=0; a < this.guessesColors1.length; a++) {
      if(this.guessesColors1[a]===this.currentColors[a])
      {
        this.bool++;
      }
      else
      {
        for (let j = 0; j < this.guessesColors1.length; j++) {
            if(a!==j&& this.guessesColors1[a]=== this.currentColors[j])
            {
              this.pgiaa++;
              j=this.guessesColors1.length;
            }
        }
      }
    }
    debugger;
    if(this.bool===4)
    {
      this.flag=1;
      console.log("כל הכבוד!");
      for (let k = 0; k < this.guessesColors.length; k++) {//להציג את הצבעים שנבחרו
        // this.backgroundColors[k]=this.correctColors[k];
      }
      alert("כל הכבוד! ניצחת!");
    }
    else {
      this.history.push(...this.guessesColors1);
      this.historyboolPgiaa.push(...("בול="+this.bool+" פגיעה="+this.pgiaa));
    }
  }
  
  guessesColors(colors:string[]){
    this.guessesColors1=colors;
    console.log(this.guessesColors1);
  }

  updatecurrentColors(colors:string[]){
    this.currentColors=colors;
    console.log(this.currentColors);
  }

}
