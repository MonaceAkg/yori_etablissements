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

  lineBreakIndices: number[] = [2]; // Pour organiser l'affichage en groupes

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      parkingAccess: ['', Validators.required], // Oui, gratuitement / Oui, moyennant un supplément / Non
      reservationRequired: [''], // Requis si parkingAccess !== 'Non'
      parkingLocation: [''], // Requis si parkingAccess !== 'Non'
      parkingType: [''], // Requis si parkingAccess !== 'Non'
      parkingCost: [''], // Requis si parkingAccess === 'Oui, moyennant un supplément'
      parkingCostUnit: ['jour'], // Unité de coût
    });

    // Validation conditionnelle basée sur parkingAccess
    this.form.get('parkingAccess')!.valueChanges.subscribe((value) => {
      const reservationControl = this.form.get('reservationRequired');
      const locationControl = this.form.get('parkingLocation');
      const typeControl = this.form.get('parkingType');
      const costControl = this.form.get('parkingCost');
      const typesArray = this.form.get('parkingTypes') as FormArray;

      if (
        value === 'Oui, gratuitement' ||
        value === 'Oui, moyennant un supplément'
      ) {
        reservationControl!.setValidators([Validators.required]);
        locationControl!.setValidators([Validators.required]);
        typeControl!.setValidators([Validators.required]);
        typesArray.controls.forEach((control) =>
          control.setValidators([Validators.requiredTrue])
        );
      } else {
        reservationControl!.clearValidators();
        locationControl!.clearValidators();
        typeControl!.clearValidators();
        costControl!.clearValidators();
        typesArray.controls.forEach((control) => control.clearValidators());
        this.form.patchValue({
          reservationRequired: '',
          parkingLocation: '',
          parkingType: '',
          parkingCost: '',
        });
      }

      if (value === 'Oui, moyennant un supplément') {
        costControl!.setValidators([Validators.required, Validators.min(0)]);
      } else {
        costControl!.clearValidators();
        costControl!.setValue('');
      }

      reservationControl!.updateValueAndValidity();
      locationControl!.updateValueAndValidity();
      typeControl!.updateValueAndValidity();
      costControl!.updateValueAndValidity();
      typesArray.updateValueAndValidity();
    });
  }

  get parkingTypesArray(): FormArray {
    return this.form.get('parkingTypes') as FormArray;
  }

  getParkingTypeControl(index: number): FormControl {
    return this.parkingTypesArray.at(index) as FormControl;
  }

  isValid(): boolean {
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
      parkingCostUnit: this.form.value.parkingCostUnit,
    };
  }
}
