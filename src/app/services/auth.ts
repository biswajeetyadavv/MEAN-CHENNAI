import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private baseURL: string = "http://localhost:3000/employee";
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseURL);
  }


  getEmployeeById(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.baseURL + "/" + id);
  }


  createEmployee(obj: Employee){
    return this.http.post(this.baseURL + "/", obj);
  }

  updateEmployee(id: string, obj: Employee) {
    return this.http.put(this.baseURL + '/' + id , obj);
}

  deleteEmployee(id: string){
    return this.http.delete(this.baseURL + "/" + id);
  }
}