import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-cliente-card',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './cliente-card.component.html',
  styleUrl: './cliente-card.component.scss'
})
export class ClienteCardComponent {
  onCardClick() {
  console.log('Card clickeado');
  // o navegar, emitir evento, etc.
}
}
