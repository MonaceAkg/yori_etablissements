import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header3Component } from '../header3/header3.component';

@Component({
  selector: 'app-ajout-tourisme',
  imports: [RouterOutlet, Header3Component],
  templateUrl: './ajout-tourisme.component.html',
  styleUrl: './ajout-tourisme.component.css'
})
export class AjoutTourismeComponent {

}
