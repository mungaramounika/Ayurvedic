import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalresourcesComponent } from './educationalresources.component';

describe('EducationalresourcesComponent', () => {
  let component: EducationalresourcesComponent;
  let fixture: ComponentFixture<EducationalresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalresourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
