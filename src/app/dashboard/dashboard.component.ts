import { Component, Input, OnInit } from '@angular/core';
import {AppService} from '../app.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:any =[];
  message:any =''
  public lviewMovie: any = [];
  deletedMovie :any =[]
  @Input() show:any;
  constructor( private service:AppService){}

ngOnInit(): void {
  this.getMovies()
  
}

  getMovies(){
    this.service.getAllData().subscribe(res=>{
    this.movies = res;
    this.message = 'Movies Data fetched succesfully';
    setTimeout(()=>{
      this.message = '';
    },1000)
      
    })
  }
 

  

  

delete(id: any){
  if(confirm("Are you sure?") == false){
    this.message = "Canceled....!";
    setTimeout(()=>{
      this.message = "";
    }, 2000);
    return;
  }
  this.service.deleteEmployee(id).subscribe(res=>{
    this.deletedMovie.push(res)
    this.movies = this.movies.filter((emp:any) => emp.id !== id);
    setTimeout(()=>{
      this.message = "";
    }, 2000);
    this.message = "Deleted.....! " + this.deletedMovie[0].name;
  })
}
}
