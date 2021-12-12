import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any ;

  constructor(private authservice: AuthService, private router: Router) { }
  
  ngOnit(){


  }
  logout() {
    this.authservice.clearLogin();
    this.router.navigate([''])
  }
  isLoggedIn() {
  
    
    return this.authservice.isLoggedIn();
  }
}
