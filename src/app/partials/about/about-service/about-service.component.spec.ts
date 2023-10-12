import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServiceComponent } from './about-service.component';

describe('AboutServiceComponent', () => {
  let component: AboutServiceComponent;
  let fixture: ComponentFixture<AboutServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
