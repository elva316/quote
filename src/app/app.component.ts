import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  addingQuote = new Quote();
  addingConfirm = [] ;
  onSubmit(reg){
    console.log(this.addingQuote)

    this.addingConfirm.push(this.addingQuote);
    console.log(this.addingConfirm)
    console.log(this.addingConfirm.length)
    this.addingQuote = new Quote();
    reg.resetForm();
  }
}
