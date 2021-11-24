import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualExampleOFRxjsWithHttpComponent } from './actual-example-of-rxjs-with-http.component';

describe('ActualExampleOFRxjsWithHttpComponent', () => {
  let component: ActualExampleOFRxjsWithHttpComponent;
  let fixture: ComponentFixture<ActualExampleOFRxjsWithHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualExampleOFRxjsWithHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualExampleOFRxjsWithHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
