import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { AreasComponent } from './areas/areas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EnsayosComponent } from './ensayos/ensayos.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,LandingComponent, AreasComponent, ServiciosComponent, EnsayosComponent, EquiposComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-labs';
}
