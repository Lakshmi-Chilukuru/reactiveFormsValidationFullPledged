import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  public movies:any;
 
 public iD:any;
 empDetails:any =[];
    constructor(private service:AppService,private router:Router,private aRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.aRoute.params.subscribe(res=>{
            this.iD = res['id'];
            console.log(this.iD);
          });
          if(this.iD !== ''){
            this.service.getDataById(this.iD)
            .toPromise()
            .then(res=>{
              this.empDetails.push(res);
              console.log(this.empDetails)
            });
          }
  }

  
}
