import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-importacion-card',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './importacion-card.component.html',
  styleUrl: './importacion-card.component.scss'
})
export class ImportacionCardComponent {
   onCardClick() {
  console.log('Card clickeado');
  // o navegar, emitir evento, etc.
}
}
