import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: MatSnackBar, useValue: mockSnackBar }]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message on failed login', () => {
    component.onLogin();
    expect(mockSnackBar.open).toHaveBeenCalledWith(
      'Login failed. Please check your credentials and try again.', 
      'Close', 
      jasmine.anything()
    );
  });

  it('form should be invalid with empty fields', () => {
    component.email = '';
    component.password = '';
    expect(component.loginForm.valid).toBeFalsy();
  });
  
  it('form should be valid with correct inputs', () => {
    component.email = 'test@email.com';
    component.password = 'Test123!';
    expect(component.loginForm.valid).toBeTruthy();
  });

  
});
