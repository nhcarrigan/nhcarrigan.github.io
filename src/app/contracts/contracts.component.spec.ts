import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContractsComponent } from "./contracts.component";

describe("ContractsComponent", () => {
  let component: ContractsComponent;
  let fixture: ComponentFixture<ContractsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("Completed Contracts");
  });
});
