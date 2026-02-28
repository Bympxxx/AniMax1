import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { PanelPaciente } from "../../shared/panel-paciente/panel-paciente";
import { DetalleConsulta } from "../../shared/detalle-consulta/detalle-consulta";
import { HeroHome } from '../../shared/hero-home/hero-home';

@Component({
  selector: 'app-consultas',
  imports: [ DetalleConsulta,HeroHome],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

  mascotas: Mascota[]=[
    {id:1,nombre:'Ramon',especie:'Perro',historial:'Vacunas al día'},
    {id:2,nombre:'Luna',especie:'Gato',historial:'Alergia alimentaria'},
    {id:3,nombre:'Milo',especie:'Conejo',historial:'Problemas dentales'},
  ];

 mascotaSeleccionada: Mascota | null = null;

//Mensaje aviso para gestionar el evento que envia el hijo al padre
mensajeAviso:String='';

//funcion que maneja el evento click sobre la lista de mascotas --ver fichas
  verDetalles(mascotas:Mascota){
    this.mascotaSeleccionada=mascotas;
  }

  //funcion que maneje el evento enviando desde el componente hijo 
  procesarAviso(mensaje:string){
    this.mensajeAviso=mensaje;
  }


}
