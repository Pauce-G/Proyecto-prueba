import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenCardComponent } from './almacen-card.component';

describe('AlmacenCardComponent', () => {
  let component: AlmacenCardComponent;
  let fixture: ComponentFixture<AlmacenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlmacenCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmacenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
