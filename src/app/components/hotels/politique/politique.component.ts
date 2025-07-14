import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardContent } from '@angular/material/card';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { StepFormInterface } from '../../../interfaces/step-form.interface';

@Component({
  selector: 'app-politique',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
],
  templateUrl: './politique.component.html',
  styleUrl: './politique.component.css'
})
export class PolitiqueComponent implements OnInit, StepFormInterface {
  form!: FormGroup;

  minArrivalTime = '06:00';
  maxArrivalTime = '12:00';
  minDepartureTime = '18:00';
  maxDepartureTime = '23:00';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      cancellationPolicy: ['', Validators.required], // Oui (Remboursable) / Non (Non remboursable)
      cancellationCondition: [''], // Requis si cancellationPolicy === 'Oui'
      arrivalStart: ['', Validators.required],
      arrivalEnd: ['', Validators.required],
      departureStart: ['', Validators.required],
      departureEnd: ['', Validators.required],
      childrenAccepted: ['', Validators.required], // Oui/Non
      petsAccepted: ['', Validators.required] // Oui/Sur demande/Non
    });

    // Validation conditionnelle : cancellationCondition requis si cancellationPolicy === 'Oui'
    this.form.get('cancellationPolicy')!.valueChanges.subscribe(value => {
      const conditionControl = this.form.get('cancellationCondition');
      if (value === 'Oui') {
        conditionControl!.setValidators([Validators.required, Validators.maxLength(256)]);
      } else {
        conditionControl!.clearValidators();
        conditionControl!.setValue('');
      }
      conditionControl!.updateValueAndValidity();
    });
  }

  isValid(): boolean {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  getData() {
    return {
      cancellationPolicy: this.form.value.cancellationPolicy,
      cancellationCondition: this.form.value.cancellationCondition,
      arrivalStart: this.form.value.arrivalStart,
      arrivalEnd: this.form.value.arrivalEnd,
      departureStart: this.form.value.departureStart,
      departureEnd: this.form.value.departureEnd,
      childrenAccepted: this.form.value.childrenAccepted,
      petsAccepted: this.form.value.petsAccepted
    };
  }
}
