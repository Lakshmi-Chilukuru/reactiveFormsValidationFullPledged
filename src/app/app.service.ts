import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {
private url ="http://localhost:3000/movies"
  constructor( private http:HttpClient) { }

  getAllData(){
    return this.http.get(this.url);
  }

  getDataById(id:number){
    return this.http.get(this.url+ '/' + id);
  }

  createData(obj:any){
    return this.http.post(this.url,obj);
  }

  updateData(id:number,obj:any){
    return this.http.put(this.url+ '/' + id,obj)
  }

  deleteEmployee(id: any){
    return this.http.delete(this.url + "/" + id);
 }
}
