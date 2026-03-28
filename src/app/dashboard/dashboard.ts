import { ChangeDetectorRef, Component } from "@angular/core";
import { Employee } from "../employee";
import { CommonModule } from "@angular/common";
import { OnInit } from "@angular/core";
import { Auth } from "../services/auth";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";


@Component({
   selector:'app-dashboard',
   imports:[RouterModule, CommonModule],
   templateUrl: 'dashboard.html',
   styleUrl:'dashboard.css'
})

export class Dashboard implements OnInit{
   allEmployees:Employee[] = [];
   constructor(private auth: Auth, private route:ActivatedRoute, private cdr:ChangeDetectorRef){}
   message:string ="";
   
   ngOnInit():void{
      this.auth.getAllEmployees().subscribe(res =>{
         this.allEmployees = res;
         // console.log(res)
         console.log(this.allEmployees)
         this.cdr.detectChanges();  

      })
   }



   delete(id:any):void{
      this.auth.deleteEmployee(id).subscribe(res=>{
         console.log(res)
         console.log("work")
         this.cdr.detectChanges();
      })
   }
}