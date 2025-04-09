import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  constructor() { }
 
  getColors(): Observable<string>{
    return new Observable<string>(obs=>{
      let colors = ['red','black','green','yellow']
      let rand = Math.floor(Math.random()* colors.length);
      console.log(rand)
      obs.next(colors[rand]);
      obs.complete();
    })
  }
}
