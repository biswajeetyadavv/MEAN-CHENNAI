import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-update',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update implements OnInit{
   constructor(private route: ActivatedRoute, private fb: FormBuilder, private auth: Auth, private router: Router){}
   empId: any;
   empDetails: any;
   updateForm: FormGroup = new FormGroup({});
   
   ngOnInit(): void {
      this.route.params.subscribe(res=>{
         this.empId = res['id'];
         console.log(this.empId);
      });
      if(this.empId !== ''){
         this.auth.getEmployeeById(this.empId)
         .toPromise()
         .then(res=>{
            this.empDetails = res;
            this.updateForm = this.fb.group({
               'name': new FormControl(this.empDetails.name),
               'email': new FormControl(this.empDetails.email),
               'mobile': new FormControl(this.empDetails.mobile),
               'department': new FormControl(this.empDetails.department)
            });
        });
      }
   }
   message: any;
   
   UpdateEmp(){
     this.auth.updateEmployee(this.empId, this.updateForm.value).subscribe(res=>{
        this.message = "Employee updated successfully..!";
        setTimeout(()=>{
            this.router.navigate(['/view/' + this.empId]);
        }, 1000);
     });
   }
}