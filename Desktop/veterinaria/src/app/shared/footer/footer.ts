import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

anio:number = new Date().getFullYear();

  enlaces=[
    {nombre:'Inicio',url:'#'},
    {nombre:'Consultas',url:'/consultas'},
    {nombre:'Servicios',url:'/servicios'}, 
    {nombre:'Mascotas',url:'#'},
    {nombre:'Contacto',url:'#'}, 
  ]


}
