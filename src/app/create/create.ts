import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-create',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrls: ['./create.css']
})
export class Create implements OnInit {
  createForm: FormGroup = new FormGroup({});
  message: string = '';

  constructor(private auth: Auth, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      department: new FormControl('')
    });
  }

  createEmp(): void {
    const name = this.createForm.get('name')?.value;
    if (name.trim().length == 0) {
      alert("Name can't be empty");
    } else {
      this.auth.createEmployee(this.createForm.value).subscribe(res => {
        this.message = "Employee created successfully";
        setTimeout(()=>{
          this.router.navigate(['/dashboard']);
        }, 1000);
      });
    }
  }
}