import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { VentasComponent } from 'src/app/components/ventas/ventas.component';
import { InventarioCardComponent } from 'src/app/components/inventario-card/inventario-card.component';
import { AlmacenCardComponent } from 'src/app/components/almacen-card/almacen-card.component';
import { ClienteCardComponent } from 'src/app/components/cliente-card/cliente-card.component';
import { CajaCardComponent } from 'src/app/components/caja-card/caja-card.component';
import { ImportacionCardComponent } from 'src/app/components/importacion-card/importacion-card.component';
import { ComprasCardComponent } from 'src/app/components/compras-card/compras-card.component';
import { UsuarioCardComponent } from 'src/app/components/usuario-card/usuario-card.component';

@Component({
  selector: 'app-starter',
  imports: [
    MaterialModule,
    VentasComponent,
    InventarioCardComponent,
    AlmacenCardComponent,
    ClienteCardComponent,
    CajaCardComponent,
    ImportacionCardComponent,
    ComprasCardComponent,
    UsuarioCardComponent
  ],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent { }