import { Component, inject, signal } from '@angular/core';
import { Catalogo } from "../../shared/catalogo/catalogo";
import { PetService } from '../../services/pet-service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-mascotas-page',
  imports: [Catalogo],
  templateUrl: './mascotas-page.html',
  styleUrl: './mascotas-page.css',
})
export class MascotasPage {
  

}
