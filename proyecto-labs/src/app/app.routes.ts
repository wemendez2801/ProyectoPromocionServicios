import { Routes, RouterLink, RouterLinkActive } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AreasComponent } from './areas/areas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EnsayosComponent } from './ensayos/ensayos.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
   {path: '', component: LandingComponent},
   {path: 'areas', component: AreasComponent},
   {path: 'servicios', component: ServiciosComponent},
   {path: 'ensayos', component: EnsayosComponent},
   {path: 'equipos', component: EquiposComponent},
   {path: 'contacto', component: ContactoComponent}
];
