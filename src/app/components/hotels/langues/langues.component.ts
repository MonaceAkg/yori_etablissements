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
import { StepFormInterface } from '../../../interfaces/step-form.interface';
import {MatListModule,} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-langues',
  standalone: true,
  imports: [
    FormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './langues.component.html',
  styleUrl: './langues.component.css',
})
export class LanguesComponent implements OnInit, StepFormInterface {
  form!: FormGroup;

  languagedOptions: string[] = [
    'Français',
    'Anglais',
    'Espagnol',
    'Allemand',
    'Italien',
    'Portugais',
    'Chinois',
    'Arabe',
    'Russe',
    'Japonais',
    'Néerlandais',
    'Suédois',
    'Coréen',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      languagedOptions: this.fb.array(
        this.languagedOptions.map(() => false),
        // Validateur personnalisé pour s'assurer qu'au moins une langue est sélectionnée
        [Validators.required]
      ),
    });
  }

  get languagedOptionsArray(): FormArray {
    return this.form.get('languagedOptions') as FormArray;
  }

  getLanguageControl(index: number): FormControl {
    return this.languagedOptionsArray.at(index) as FormControl;
  }

  // Récupère les langues sélectionnées sous forme de tableau de chaînes
  getSelectedLanguages(): string[] {
    return this.languagedOptionsArray.controls
      .map((ctrl, i) => (ctrl.value ? this.languagedOptions[i] : null))
      .filter((v) => v !== null) as string[];
  }

  isValid(): boolean {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  getData() {
    return {
      languagedOptions: this.getSelectedLanguages(),
    };
  }
}
