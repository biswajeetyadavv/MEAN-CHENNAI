import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoInterface } from '../todo-interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})



export class TodoService {

  private baseURL:string = "http://localhost:3000/Todo";

  constructor(private http:HttpClient){}

  getTodos(): Observable<TodoInterface[]>{
    return this.http.get<TodoInterface[]>(this.baseURL);
  }

}
