import { Component } from '@angular/core';
import { HeroHome } from '../../shared/hero-home/hero-home';
import { Servicios } from "../../shared/servicios/servicios";
import { PanelPaciente } from "../../shared/panel-paciente/panel-paciente";


@Component({
  selector: 'app-home-page',
  imports: [HeroHome, Servicios, PanelPaciente],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
