import { Injectable } from '@angular/core';
import { delay, Observable, of,tap} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  login(form:any) {
     console.log(form.name);
     console.log(form.password);
     this.isUserLoggedIn = form.userName == 'admin' && form.password == 'admin';
     localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

  return of(this.isUserLoggedIn).pipe(
     delay(1000),
     tap(val => { 
        console.log("Is User Authentication is successful: " + val); 
     })
  );
  }

  logout(): void {
  this.isUserLoggedIn = false;
     localStorage.removeItem('isUserLoggedIn'); 
  }
  constructor() { }



  
}
