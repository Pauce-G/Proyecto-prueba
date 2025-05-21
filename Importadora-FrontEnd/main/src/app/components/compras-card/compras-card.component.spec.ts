import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasCardComponent } from './compras-card.component';

describe('ComprasCardComponent', () => {
  let component: ComprasCardComponent;
  let fixture: ComponentFixture<ComprasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
