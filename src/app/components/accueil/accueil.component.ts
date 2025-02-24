import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    RouterLink
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
