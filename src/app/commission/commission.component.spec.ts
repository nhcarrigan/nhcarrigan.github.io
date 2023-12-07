import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionComponent } from './commission.component';

describe('CommissionComponent', () => {
  let component: CommissionComponent;
  let fixture: ComponentFixture<CommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
