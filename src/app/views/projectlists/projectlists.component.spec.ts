import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlistsComponent } from './projectlists.component';

describe('ProjectlistsComponent', () => {
  let component: ProjectlistsComponent;
  let fixture: ComponentFixture<ProjectlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectlistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
