import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { GoogleMapComponent } from '../google-map/google-map.component';


@Component({
  selector: 'app-form-info-generales',
  standalone: true,
  imports: [
    MatSelectModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    GoogleMapComponent
  ],
  templateUrl: './form-info-generales.component.html',
  styleUrl: './form-info-generales.component.css',
})
export class FormInfoGeneralesComponent {
  showMap: boolean = false;
  currentRoute: string = '';
  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  constructor(private router: Router) { }
}
