import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childone',
  imports: [],
  templateUrl: './childone.html',
  styleUrl: './childone.css',
})
export class Childone {

  // interpolation
  val:string = "biswa"

  @Input() name:string = "";

  @Output() messagetosend = new EventEmitter<string>();

  sendData(){
    this.messagetosend.emit("hello from parent")
  }
}
