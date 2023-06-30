import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseComponent],
    });
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.projects).toBeDefined();
  });

  it('should render as expected', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Featured Projects');
    const projects = compiled.querySelectorAll('.project');
    expect(projects.length).toBe(component.projects.length);
    for (let i = 0; i < component.projects.length; i++) {
      const projectAvatar = projects[i].querySelector('.avatar');
      expect(projectAvatar?.getAttribute('src')).toBe(
        component.projects[i].iconUrl
      );
      const projectLink = projects[i].querySelector('a');
      expect(projectLink?.getAttribute('href')).toBe(component.projects[i].url);
      expect(projectLink?.children[0].tagName).toBe('H2');
      const projectTitle = projects[i].querySelector('h2');
      expect(projectTitle?.textContent?.trim()).toBe(
        component.projects[i].name
      );
      const projectDescription = projects[i].querySelector('p');
      expect(projectDescription?.textContent?.trim()).toBe(
        component.projects[i].description
      );
    }
  });
});
