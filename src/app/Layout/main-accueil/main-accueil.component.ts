import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header1Component } from '../header1/header1.component';
import { Footer1Component } from '../footer1/footer1.component';

@Component({
  selector: 'app-main-accueil',
  imports: [
    RouterOutlet,
    Header1Component,
    Footer1Component
  ],
  templateUrl: './main-accueil.component.html',
  styleUrl: './main-accueil.component.css'
})
export class MainAccueilComponent {

}
