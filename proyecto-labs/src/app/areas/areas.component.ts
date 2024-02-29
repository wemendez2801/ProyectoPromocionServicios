import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {

}
