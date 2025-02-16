import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl=""  

  private isLoggedin:boolean=false;

  constructor(private router:Router){
  }
  login(username:string,password:string):Observable<boolean>
  {  
      if(username=="Admin"&&password=="123")
      {
        this.isLoggedin=true;
        return of(true) 
      }
       return of (false)
  }

  redirectToDashboard():void{
  this.router.navigate(['/admindashboard'])
  }

 logout():void{
  this.isLoggedin=false;
  this.router.navigate(['/']);
 }

  getIsLoggedIn():boolean{
    return this.isLoggedin;
  }
}
