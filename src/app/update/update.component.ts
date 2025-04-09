import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Router,ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

   updateForm!: FormGroup;
    message:string ='';
    iD: any;
  empDetails:any;
  ID: number =0;
  isLoaded: boolean = false;

    constructor(private fb:FormBuilder,private service:AppService,private router:Router, private aRoute:ActivatedRoute){}
  
    ngOnInit(): void {
    
      this.aRoute.params.subscribe(res=>{
        this.iD = res['id'];
        console.log(this.iD);
      });
      if(this.iD !== ''){
        this.service.getDataById(this.iD)
        .toPromise()
        .then(res=>{
          this.empDetails = res;
          this.updateForm = this.fb.group({
            'name': new FormControl(this.empDetails.name),
            'language': new FormControl(this.empDetails.language),
            'version': new FormControl(this.empDetails.version)
          
          });
          this.isLoaded = true;
        });
      }
    }
    onUpdate(){
      this.service.updateData(this.iD, this.updateForm.value).subscribe(res=>{
        this.message = "Employee updated successfully..!";
        setTimeout(()=>{
          this.router.navigate(['/view'+'/'+this.iD]);
        }, 1000);
      });
    }
}
