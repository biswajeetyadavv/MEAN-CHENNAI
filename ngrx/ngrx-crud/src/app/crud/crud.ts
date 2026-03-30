import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-crud',
  imports: [FormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD implements OnInit{
  private store = inject(Store)
  newData='';
  // constructor(private store:Store){}

  todosData$ = this.store.select(selectTodos)

  ngOnInit(): void {
      this
  }

  addData(data:any){

  }

  createData(){

  }

  UpdateData(){

  }

  DeleteData(){

  }
}
