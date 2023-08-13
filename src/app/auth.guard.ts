import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';  // Adjust the path accordingly

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {  // Assuming you have an isLoggedIn() method in AuthService
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
