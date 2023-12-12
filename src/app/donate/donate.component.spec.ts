import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DonateComponent } from "./donate.component";

describe("DonateComponent", () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("Support our Work");
  });
});
