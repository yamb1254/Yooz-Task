import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSignup() {
    this.authService.signUp(this.email, this.password).then(res => {
      console.log('Successfully signed up!', res);
    }).catch(error => {
      console.error('Signup error', error);
    });
  }
}
