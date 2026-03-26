import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Auth } from '../services/auth';
import { Employee } from '../employee';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
   constructor(private auth: Auth, private router: ActivatedRoute){}
   allEmployees: Employee[] = [];
   message:string = '';

   ngOnInit(): void {
      this.auth.getAllEmployees().subscribe(res=>{
         this.allEmployees = res;
      });
   }
   
   delete(id: any){
     this.auth.deleteEmployee(id).subscribe(res=>{
        this.message = "Deleted";
        this.allEmployees = this.allEmployees.filter((emp: Employee) => emp.id !== id);
        setTimeout(()=>{
           this.message = "done del";
        }, 1000);
     })
  }
}