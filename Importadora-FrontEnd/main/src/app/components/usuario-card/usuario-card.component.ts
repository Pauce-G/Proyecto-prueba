import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-usuario-card',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.scss'
})
export class UsuarioCardComponent {
onCardClick() {
  console.log('Card clickeado');
  // o navegar, emitir evento, etc.
}
}
