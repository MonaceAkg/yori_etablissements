import { Component } from '@angular/core';
import { Header3Component } from '../header3/header3.component';
import { RouterOutlet } from '@angular/router';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-main-choix',
  imports: [
    Header3Component,
    RouterOutlet,
    Footer2Component
  ],
  templateUrl: './main-choix.component.html',
  styleUrl: './main-choix.component.css'
})
export class MainChoixComponent {

}
