import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CommissionComponent } from "./commission.component";

describe("CommissionComponent", () => {
  let component: CommissionComponent;
  let fixture: ComponentFixture<CommissionComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommissionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("Commission Us");
  });
});
