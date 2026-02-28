import { Component, inject, signal } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet-service';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

  private servicioPet = inject(PetService);

  //SIGNAL INDICA QUE ES UNA VARIABLE REACTIVA ES DECIR ANGULAR PUEDE VIGILAR DE MANERA AUTOMATICA
  mascotas = signal<Pet[]>([]);

  ngOnInit(): void {
    this.leerMascotas();
  }

  leerMascotas() {
    this.servicioPet.getPets().subscribe(datos => {
      this.mascotas.set(datos.data);
    })
  }

  mensaje(){
    alert("Gracias por adoptarme, me alegra mucho ser parte de tu familia");
  }

}
