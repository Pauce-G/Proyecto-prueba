import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-caja-card',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './caja-card.component.html',
  styleUrl: './caja-card.component.scss'
})
export class CajaCardComponent {
  onCardClick() {
  console.log('Card clickeado');
  // o navegar, emitir evento, etc.
}
}
