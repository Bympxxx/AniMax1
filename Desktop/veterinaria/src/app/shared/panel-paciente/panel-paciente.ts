import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-panel-paciente',
  imports: [CommonModule,FormsModule],
  templateUrl: './panel-paciente.html',
  styleUrl: './panel-paciente.css',
})
export class PanelPaciente {
  nombreFiltro = '';
  pacientes =[
    {
      nombre:'Ramon',especie:'Perro',urgencia:'Alta',recuperacion:85
    },
    {
      nombre:'Luna',especie:'Gato',urgencia:'Media',recuperacion:60
    },
    {
      nombre:'Milo',especie:'Conejo',urgencia:'Baja',recuperacion:30
    }
  ];

}
