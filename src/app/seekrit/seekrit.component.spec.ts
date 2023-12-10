import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { SeekritComponent } from "./seekrit.component";

describe("SeekritComponent", () => {
  let component: SeekritComponent;
  let fixture: ComponentFixture<SeekritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekritComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SeekritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
