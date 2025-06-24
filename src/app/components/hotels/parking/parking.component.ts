import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { StepFormInterface } from '../../../interfaces/step-form.interface';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    CommonModule,
    MatMenuModule,
    ReactiveFormsModule
],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css' 
})


export class ParkingComponent implements OnInit, StepFormInterface {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      parkingAccess: ['', Validators.required],          // Equivalent à breakfastServed
      reservationRequired: [''],                          // Réservation parking (conditionnel)
      parkingLocation: [''],                              // Emplacement parking (conditionnel)
      parkingType: [''],                                  // Type de parking (conditionnel)
      parkingCost: [''],                                  // Coût parking (si moyennant)
      parkingCostUnit: ['heure']                          // Unité coût (ex: par heure)
    });

    // Reset des champs conditionnels selon parkingAccess
    this.form.get('parkingAccess')!.valueChanges.subscribe(value => {
      if (value !== 'Oui' && value !== 'Moyennant') {
        this.form.patchValue({
          reservationRequired: '',
          parkingLocation: '',
          parkingType: '',
          parkingCost: ''
        });
      }
      if (value !== 'Moyennant') {
        this.form.patchValue({ parkingCost: '' });
      }
    });
  }

  isValid(): boolean {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  getData() {
    return this.form.value;
  }
}
 