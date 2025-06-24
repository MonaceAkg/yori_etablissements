import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { StepFormInterface } from '../../../interfaces/step-form.interface';


@Component({
  selector: 'app-petit-dejeuner',
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    MatChipsModule,
    CommonModule,
    ReactiveFormsModule
],
  templateUrl: './petit-dejeuner.component.html',
  styleUrl: './petit-dejeuner.component.css'
})
export class PetitDejeunerComponent implements OnInit, StepFormInterface{
  form!: FormGroup;

  breakfastTypes: string[] = [
    'A la carte',
    'Africain',
    'Americain',
    'Asiatique',
    'Buffet',
    'Petit déjeuner à emporter',
    'Continental',
    'Végétalien',
    'Casher',
    'Végétarien',
    'Sans gluten',
    'Halal',
    'Anglais / irlandais complet'
  ];

  lineBreakIndices: number[] = [4, 8];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      breakfastServed: ['', Validators.required],
      breakfastIncluded: [''], // sera requis uniquement si breakfastServed === 'Oui'
      breakfastTypes: this.fb.array(
        this.breakfastTypes.map(() => false)
      )
    });

    // Validation conditionnelle : breakfastIncluded requis si breakfastServed === 'Oui'
    this.form.get('breakfastServed')!.valueChanges.subscribe(value => {
      const includedControl = this.form.get('breakfastIncluded');
      if (value === 'Oui') {
        includedControl!.setValidators([Validators.required]);
      } else {
        includedControl!.clearValidators();
        includedControl!.setValue('');
      }
      includedControl!.updateValueAndValidity();
    });
  }

  get breakfastTypesArray() {
    return this.form.get('breakfastTypes') as FormArray;
  }

  getBreakfastTypeControl(index: number): FormControl {
  return this.breakfastTypesArray.at(index) as FormControl;
}

  // Récupère les types sélectionnés sous forme de tableau de chaînes
  getSelectedBreakfastTypes(): string[] {
    return this.breakfastTypesArray.controls
      .map((ctrl, i) => ctrl.value ? this.breakfastTypes[i] : null)
      .filter(v => v !== null) as string[];
  }

  isValid(): boolean {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  getData() {
    return {
      breakfastServed: this.form.value.breakfastServed,
      breakfastIncluded: this.form.value.breakfastIncluded,
      breakfastTypes: this.getSelectedBreakfastTypes()
    };
  }
}