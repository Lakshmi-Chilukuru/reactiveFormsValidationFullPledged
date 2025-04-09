import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  
  reactiveForm!: FormGroup;
  message:string ='';
  constructor(private fb:FormBuilder,private service:AppService,private router:Router){}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name:new FormControl(''),
      version:new FormControl(''),
      language:new FormControl('')

    })
  }

  onSubmit(){
    if(this.reactiveForm.valid){
      this.service.createData(this.reactiveForm.value).subscribe(res=>{
       
        setTimeout(()=>{
          this.message = "Data Created Successfully";
        },500)
        setTimeout(()=>{
          this.router.navigate(['/dashboard'])
        },2000)
      })
    }
    else{
      this.message ='Form is Invalid';

    }
    
  }
}
