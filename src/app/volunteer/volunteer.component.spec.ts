import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VolunteerComponent } from "./volunteer.component";
describe("VolunteerComponent", () => {
  let component: VolunteerComponent;
  let fixture: ComponentFixture<VolunteerComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("Pro-Bono Work");
  });
});
