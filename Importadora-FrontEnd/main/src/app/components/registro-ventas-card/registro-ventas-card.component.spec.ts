import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVentasCardComponent } from './registro-ventas-card.component';

describe('RegistroVentasCardComponent', () => {
  let component: RegistroVentasCardComponent;
  let fixture: ComponentFixture<RegistroVentasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroVentasCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVentasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
