import { Component , ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  @ViewChild('loginForm') loginForm!: NgForm;

  email: string = '';
  password: string = '';
  


  constructor(private authService: AuthService,private router: Router,private snackBar: MatSnackBar) {}
  

  onLogin() {
    this.authService.login(this.email, this.password).then(res => {
      console.log('Logged in!', res);
      this.router.navigate(['/profile']);
    }).catch(error => {
      this.snackBar.open('Login failed. Please check your Email/Password and try again.', 'Close', {
        duration: 5000,  // Message will disappear after 5 seconds
        panelClass: ['error-snackbar'] });
      console.error('Login error', error);
    });
  }
}
