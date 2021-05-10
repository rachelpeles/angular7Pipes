import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RundomColorsArrComponent } from './rundom-colors-arr/rundom-colors-arr.component';
import { ShowRandomColorsComponent } from './show-random-colors/show-random-colors.component';
import { GuessComponent } from './guess/guess.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    RundomColorsArrComponent,
    ShowRandomColorsComponent,
    GuessComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
