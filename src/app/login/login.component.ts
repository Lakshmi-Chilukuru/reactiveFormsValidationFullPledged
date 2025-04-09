import { Component } from '@angular/core';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  userName: string ='';
   password: string ='';
  show: boolean = false;
  visible:boolean = true
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    console.log(this.show)
    this.loginForm = this.fb.group({
      name:new FormControl(''),
      password:new FormControl('')

    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.userName = this.loginForm.value.name;
      this.password = this.loginForm.value.password;

    }
    this.authService.login(this.loginForm.value)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
            this.visible = false
          this.show = true
    console.log(this.show)

           if(data) this.router.navigate(['/dashboard']); 
      });
  }
}
