import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

// send data using POST method
  postData(data:any){
    return this.http.post<any>("http://localhost:3000/comments",data).pipe(map((res:any)=>{
      return res;
    }))
  }

// get data using GET method
  getData(){
    return this.http.get<any>("http://localhost:3000/comments/").pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  // edit data 
  getCurrentData(id:number){
    return this.http.get<any>("http://localhost:3000/comments/"+id).pipe(map((res:any)=>{
      return res;
  }
    ))
  }
  
  // update data using UPDATE method
  updateData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/comments/"+id,data).pipe(map((res:any)=>{
      return res;
  }
  ))
}

// delete data using DELETE method
  deleteData(id:number){
    return this.http.delete<any>("http://localhost:3000/comments/"+id).pipe(map((res:any)=>{
      return res;
    }
    ))
  }
}
