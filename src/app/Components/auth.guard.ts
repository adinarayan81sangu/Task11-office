import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    
  constructor(private login:AuthService,private router:Router){}
  canActivate():boolean
  {
    if(this.login.isLoggedIn())
    {
      
      return true
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  
  }
  }
  

