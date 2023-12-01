import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.orgs).toContain('naomi-lgbt');
    expect(component.orgs).toContain('nhcarrigan');
    expect(component.projects).toBeDefined();
    expect(component.descriptions).toBeDefined();
    expect(component.avatars).toBeDefined();
  });

  it('should render as expected', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Top Projects');
    const orgs = compiled.querySelectorAll('.container');
    expect(orgs.length).toBe(component.orgs.length);
    for (let i = 0; i < component.orgs.length; i++) {
      const org = component.orgs[i];
      const header = orgs[i].querySelector('.header');
      expect(header).toBeDefined();
      const avatar = header?.querySelector('.avatar');
      expect(avatar?.getAttribute('src')).toBe(component.avatars[org]);
      const name = header?.querySelector('h2');
      expect(name?.textContent?.trim()).toBe(org);
      const description = header?.querySelector('p');
      expect(description?.textContent?.trim()).toBe(
        component.descriptions[org]
      );
    }
  });

  it('should show and hide the project list', () => {
    const naomi = compiled.querySelector('.container');
    const defaultPs = naomi?.querySelectorAll('p');
    expect(defaultPs?.length).toBe(1);
    component.toggleList('naomi-lgbt');
    fixture.detectChanges();
    const toggledPs = naomi?.querySelectorAll('p');
    expect(toggledPs?.length).toBe(2);
    expect(toggledPs?.[1].textContent?.trim()).toBe('Loading...');
    component.toggleList('naomi-lgbt');
    fixture.detectChanges();
    const untoggledPs = naomi?.querySelectorAll('p');
    expect(untoggledPs?.length).toBe(1);
  });
});
