import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header2Component } from '../header2/header2.component';
import { Footer1Component } from '../footer1/footer1.component';

@Component({
  selector: 'app-main-espace',
  standalone: true,
  imports: [
    RouterOutlet,
    Header2Component,
    Footer1Component
  ],
  templateUrl: './main-espace.component.html',
  styleUrl: './main-espace.component.css'
})
export class MainEspaceComponent {

}
