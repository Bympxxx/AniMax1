import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  subtitulo = "Cuidamos a los que mas quieres con servicis de alta calidad";

  servicios = [
    {
      id: 1,
      nombre: "Consulta General",
      descripcion: "Evaluacion completa del paciente y recomendaciones de cuidado",
      imagen: "https://www.clinicaveterinariamh.com/wp-content/uploads/2023/09/Varios-2-2.png",
      activo: true
    },
    {
      id: 2,
      nombre: "Peluqueria Canina",
      descripcion: "Corte de pelo, baño y cuidados especiales para tu mascota",
      imagen: "https://appointment-public.haulmer.com/templates/veterinaria/servicio-peluqueria-canina.jpeg",
      activo: true
    },
    {
      id: 3,
      nombre: "Cirugía",
      descripcion: "La salud de tu mascota en las mejores manos expertas",
      imagen: "https://www.clinicaveterinariaejea.com/wp-content/uploads/2014/05/clinica_veterinaria_ejea_132-1024x682.jpeg",
      activo: false
    }

  ]

  //Arrreglo para flitrar los servicios 
  serviciosFiltrados = this.servicios;

  servicioSeleccionado="Ninguno";

  seleccionar(nombre:string){
    this.servicioSeleccionado=nombre;
  }

  //funcion para buscar servicios
  busqueda(event: Event){
    const valor =(event.target as HTMLInputElement).value;
    this.subtitulo= `Resultado para "${valor}"`;
    this.serviciosFiltrados = this.servicios.filter(s =>{
      return s.nombre.toLowerCase().includes(valor.toLowerCase());
    });
  }


}
