import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { SeekritComponent } from "./seekrit.component";

describe("SeekritComponent", () => {
  let component: SeekritComponent;
  let fixture: ComponentFixture<SeekritComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekritComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SeekritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("div");
    expect(header?.innerText.trim()).toBe("Nothing to see here...");
  });
});
