import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
    ReactiveFormsModule,
  ],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css',
})
export class ParkingComponent implements OnInit, StepFormInterface {
  form!: FormGroup;
  lineBreakIndices: number[] = [2]; // Conservé, mais non utilisé dans ce contexte
  parkingCostUnits: string[] = ['heure', 'jour'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      parkingAccess: ['', Validators.required],
      reservationRequired: [''],
      parkingLocation: [''],
      parkingType: [''],
      parkingCost: [''],
      parkingCostUnit: ['heure', Validators.required] // Initialisé à 'jour' avec validation
    });

    console.log('Formulaire initialisé:', this.form); // Débogage

    // Validation conditionnelle
    this.form.get('parkingAccess')?.valueChanges.subscribe(value => {
      const reservationControl = this.form.get('reservationRequired');
      const locationControl = this.form.get('parkingLocation');
      const typeControl = this.form.get('parkingType');
      const costControl = this.form.get('parkingCost');
      const unitControl = this.form.get('parkingCostUnit');

      if (
        value === 'Oui, gratuitement' ||
        value === 'Oui, moyennant un supplément'
      ) {
        reservationControl?.setValidators([Validators.required]);
        locationControl?.setValidators([Validators.required]);
        typeControl?.setValidators([Validators.required]);
      } else {
        reservationControl?.clearValidators();
        locationControl?.clearValidators();
        typeControl?.clearValidators();
        costControl?.clearValidators();
        unitControl?.clearValidators();
        this.form.patchValue({
          reservationRequired: '',
          parkingLocation: '',
          parkingType: '',
          parkingCost: '',
          parkingCostUnit: 'jour'
        });
      }

      if (value === 'Oui, moyennant un supplément') {
        costControl?.setValidators([Validators.required, Validators.min(0)]);
        unitControl?.setValidators([Validators.required]);
      } else {
        costControl?.clearValidators();
        unitControl?.clearValidators();
        costControl?.setValue('');
        unitControl?.setValue('jour');
      }

      reservationControl?.updateValueAndValidity();
      locationControl?.updateValueAndValidity();
      typeControl?.updateValueAndValidity();
      costControl?.updateValueAndValidity();
      unitControl?.updateValueAndValidity();
    });
  }

  isValid(): boolean {
    if (!this.form) {
      console.error('Formulaire non initialisé');
      return false;
    }
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  getData() {
    return {
      parkingAccess: this.form.value.parkingAccess,
      reservationRequired: this.form.value.reservationRequired,
      parkingLocation: this.form.value.parkingLocation,
      parkingType: this.form.value.parkingType,
      parkingCost: this.form.value.parkingCost,
      parkingCostUnit: this.form.value.parkingCostUnit
    };
  }
}
