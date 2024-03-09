import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AreasComponent } from './areas/areas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EnsayosComponent } from './ensayos/ensayos.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,RouterLink,CommonModule,LandingComponent, NavbarComponent, AreasComponent, ServiciosComponent, EnsayosComponent, EquiposComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-labs';
}
