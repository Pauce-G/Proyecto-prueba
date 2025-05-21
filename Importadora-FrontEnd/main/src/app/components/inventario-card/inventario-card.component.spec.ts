import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioCardComponent } from './inventario-card.component';

describe('InventarioCardComponent', () => {
  let component: InventarioCardComponent;
  let fixture: ComponentFixture<InventarioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
