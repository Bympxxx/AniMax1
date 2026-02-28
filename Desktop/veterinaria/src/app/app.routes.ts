import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { Nosotros } from './features/nosotros/nosotros';
import { Consultas } from './features/consultas/consultas';
import { ServiciosPage } from './features/servicios-page/servicios-page';
import { MascotasPage } from './features/mascotas-page/mascotas-page';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';

export const routes: Routes = [
    //ruta inicial
    {path:'',component:HomePage},
    {path:'consultas',component:Consultas},
    {path:'servicios',component:ServiciosPage},
    {path:'mascotas',component:MascotasPage},
    {path: 'usuarios',component:Usuarios},
    {path:'login', component: Login}

    //Error 404
    //{path:'**', component:Pagina404}
];
