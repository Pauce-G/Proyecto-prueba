import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportacionCardComponent } from './importacion-card.component';

describe('ImportacionCardComponent', () => {
  let component: ImportacionCardComponent;
  let fixture: ComponentFixture<ImportacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportacionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
