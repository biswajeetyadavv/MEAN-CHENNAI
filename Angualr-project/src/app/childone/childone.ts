import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-childone',
  imports: [CommonModule],
  templateUrl: './childone.html',
  styleUrl: './childone.css',
})
export class Childone {
  // boolean
  isLogin:boolean = false

  // interpolation
  val:string = "biswa"

  @Input() name:string = "";

  @Output() messagetosend = new EventEmitter<string>();

  sendData(){
    this.messagetosend.emit("hello from parent")
  }
}
