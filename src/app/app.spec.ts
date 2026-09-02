import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the router outlet', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});