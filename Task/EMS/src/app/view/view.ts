import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class View {
  id:string = ""
  name:string = ""
  email:string = ""
  moblie:string = ""
  Dept:string = ""
  itemDetails:any

  constructor(private cdr: ChangeDetectorRef,private auth: Auth, private route: ActivatedRoute){

  }

  ngOnInit():void{
    this.route.params.subscribe(res=>{
      this.id = res["id"]
      console.log(this.id);
    })

    this.auth.getEmployeeById(this.id).subscribe(res=>{
      this.itemDetails = res;
      this.name = this.itemDetails.name;
      this.email = this.itemDetails.email;
      this.moblie = this.itemDetails.mobile;
      this.Dept = this.itemDetails.department;
      this.cdr.detectChanges();
    })
  }

  

  




}
