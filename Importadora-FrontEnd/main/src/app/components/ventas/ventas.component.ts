import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-ventas',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})



export class VentasComponent {
onCardClick() {
  console.log('Card clickeado');
  // o navegar, emitir evento, etc.
}
}
