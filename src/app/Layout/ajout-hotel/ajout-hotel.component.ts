import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header3Component } from '../header3/header3.component';

@Component({
  selector: 'app-ajout-hotel',
  standalone: true,
  imports: [RouterOutlet, Header3Component],
  templateUrl: './ajout-hotel.component.html',
  styleUrl: './ajout-hotel.component.css',
})
export class AjoutHotelComponent {}
