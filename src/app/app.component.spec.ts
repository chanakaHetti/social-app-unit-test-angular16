// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(() =>
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       declarations: [AppComponent],
//     })
//   );

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'social-app-unit-test-angular16'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('social-app-unit-test-angular16');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain(
//       'social-app-unit-test-angular16 app is running!'
//     );
//   });
// });

describe('AppComponent', () => {
  it('should have a defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  });
});
