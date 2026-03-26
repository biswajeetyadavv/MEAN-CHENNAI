import { Component, signal } from '@angular/core';
import { Childone } from './childone/childone';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Childone, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angualr-project');

  name:string = "biswa"
  data:string = "NOT yet recieved"
  data1:string = "";

  getData(event:string){
    this.data = event;
  }
  
}
