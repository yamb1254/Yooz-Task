import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { AuthService } from '../auth.service'; 
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const mockAuthService = {
    getCurrentUserEmail: jasmine.createSpy('getCurrentUserEmail').and.returnValue('test@email.com'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [MatCardModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the current user on init', () => {
    const testUser = 'test@email.com';
    mockAuthService.getCurrentUserEmail.and.returnValue(testUser);

    component.ngOnInit();

    expect(component.userEmail).toEqual(testUser);
  });

  it('should handle no user being logged in', () => {
    mockAuthService.getCurrentUserEmail.and.returnValue(null);

    component.ngOnInit();

    expect(component.userEmail).toBeNull();
  });
});
