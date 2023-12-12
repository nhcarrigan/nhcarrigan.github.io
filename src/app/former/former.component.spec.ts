import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormerComponent } from "./former.component";

describe("FormerComponent", () => {
  let component: FormerComponent;
  let fixture: ComponentFixture<FormerComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("Archived Contacts");
  });
});
