import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-inventario',
  imports: [MatCardModule,
 MaterialModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    TablerIconsModule,
    MatIconModule,
    CommonModule,
MatPaginatorModule,
  ],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})


export class InventarioComponent {
 fechaActual: Date = new Date();

state: Food[] = [
    { value: '0', viewValue: 'Central' },
    { value: '1', viewValue: 'Djibouti' },
    { value: '2', viewValue: 'Bulgaria' },
    { value: '3', viewValue: 'Cabo Verde' },
  ];

  selectedState = this.state[3].value;


  displayedColumns: string[] = ['codigo', 'marca', 'descripcion', 'almacen','ciudad','stock','preciounitario','preciocantidad','preciomayor','estado'];
  dataSource = new MatTableDataSource<prodInvetario >(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface prodInvetario {
  codigo: string;
  marca: string;
  descripcion: string;
  almacen: string;
  ciudad: string;
  stock: number;
  preciounitario: number;
  preciocantidad: number;
  preciomayor: number;
  estado: string;
}

const ELEMENT_DATA: prodInvetario[] = [
  {
    codigo: 'TV001',
    marca: 'Samsung',
    descripcion: 'Televisor 50" 4K UHD',
    almacen: 'Central',
    ciudad: 'La Paz',
    stock: 15,
    preciounitario: 2800,
    preciocantidad: 2700,
    preciomayor: 2500,
    estado: 'Disponible'
  },
  {
    codigo: 'MIC002',
    marca: 'Shure',
    descripcion: 'Micrófono inalámbrico',
    almacen: 'Sucursal 1',
    ciudad: 'El Alto',
    stock: 8,
    preciounitario: 950,
    preciocantidad: 900,
    preciomayor: 850,
    estado: 'Disponible'
  },
  {
    codigo: 'AUD003',
    marca: 'Sony',
    descripcion: 'Audífonos',
    almacen: 'Central',
    ciudad: 'La Paz',
    stock: 20,
    preciounitario: 700,
    preciocantidad: 680,
    preciomayor: 650,
    estado: 'Disponible'
  },
  {
    codigo: 'SPK004',
    marca: 'JBL',
    descripcion: 'Parlante Bluetooth portátil',
    almacen: 'Sucursal 2',
    ciudad: 'La Paz',
    stock: 12,
    preciounitario: 400,
    preciocantidad: 380,
    preciomayor: 350,
    estado: 'Disponible'
  },
  {
    codigo: 'CAM005',
    marca: 'Logitech',
    descripcion: 'Cámara web HD',
    almacen: 'Central',
    ciudad: 'Sucursal 2',
    stock: 10,
    preciounitario: 320,
    preciocantidad: 310,
    preciomayor: 290,
    estado: 'Disponible'
  }
];


