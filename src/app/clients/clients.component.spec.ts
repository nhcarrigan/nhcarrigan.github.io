import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClientsComponent } from "./clients.component";

describe("ClientsComponent", () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("Contact Directory");
  });
});
