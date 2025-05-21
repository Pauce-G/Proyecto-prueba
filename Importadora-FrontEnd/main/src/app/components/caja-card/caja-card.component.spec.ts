import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaCardComponent } from './caja-card.component';

describe('CajaCardComponent', () => {
  let component: CajaCardComponent;
  let fixture: ComponentFixture<CajaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
