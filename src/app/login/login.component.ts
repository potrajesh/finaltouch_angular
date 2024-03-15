import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private authService:AuthService) {}

  onSubmit(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigateByUrl('/home');
      console.log(`Welcome, ${this.username}!`);
    } else {
      // Handle login failure
      console.log('Login failed');
    }
  }
}
