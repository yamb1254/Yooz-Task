import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';  // Adjust the path accordingly
import { Auth } from '@angular/fire/auth';



describe('AuthService', () => {
  let service: AuthService;

  

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
