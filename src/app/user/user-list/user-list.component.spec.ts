import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(
      of([
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'test 2' },
      ])
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from the UserService onInit', () => {
    // This refresh our component, then it execute the ngOnInit()
    fixture.detectChanges();

    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should retrieve users from UserService when the refresh button is clicked', () => {
    // This refresh our component, then it execute the ngOnInit()
    fixture.detectChanges();

    // Then no information about the prior call - remove prior actions
    userServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled();
  });
});
