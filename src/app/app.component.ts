import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule,FormControl,FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { ObserverService } from './observer.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit{

  title = 'reactiveFormsValidationFullPledged';

  reactiveForm!: FormGroup ;
  backColor: any;

  // City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  constructor(private fb:FormBuilder,private service:AppService,private obs:ObserverService){}

  ngOnInit(){
    this.reactiveForm = this.fb.group({
      userName:new FormControl('',[Validators.required,Validators.minLength(6)]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
      userMail:new FormControl('',[Validators.required,Validators.email]),
      age:new FormControl('',[Validators.required,Validators.min(18)]),
      number:new FormControl('',[Validators.required,Validators.pattern(/^\d{10}$/)]),
      date:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),

    })
    
  }
  

  onSubmit(){
    if(this.reactiveForm.valid){
      console.log(this.reactiveForm.value)
    }
  }

  colorChange() {
    this.obs.getColors().subscribe(color=>{
      this.backColor = color
    })
  }

  

  
  
}
