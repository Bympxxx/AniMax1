import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-consulta',
  imports: [],
  templateUrl: './detalle-consulta.html',
  styleUrl: './detalle-consulta.css',
})
export class DetalleConsulta {
  ///componente hijo que muestra el detalle de la consulta, recibe la mascota seleccionada desde el padre
  @Input() mascota?: Mascota;

  //enviar un evento al componente padre
  @Output() notificarAccion = new EventEmitter<string>();

  //funcion lo que hace el evento
  avisarIngreso():void{
    if(this.mascota){
      this.notificarAccion.emit(
        `El Paciente ${this.mascota.nombre} ingresado a consulta`
      )
    }
  }
}
