import { Component, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { StepFormInterface } from '../../../interfaces/step-form.interface';


@Component({
  selector: 'app-form-info-generales',
  standalone: true,
  imports: [
    MatSelectModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    GoogleMapComponent,
    ReactiveFormsModule
  ],
  templateUrl: './form-info-generales.component.html',
  styleUrl: './form-info-generales.component.css',
})
export class FormInfoGeneralesComponent implements OnInit, StepFormInterface  {
  form!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  currentRoute: string = '';
  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });

    this.form = this.fb.group({
      pays: ['', Validators.required],
      ville: ['', Validators.required],
      quartier: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]]
    });

  }

  // Méthode pour exposer la validité du formulaire
  isValid(): boolean {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  // Méthode pour récupérer les données
  getData() {
    return this.form.value;
  }

}
