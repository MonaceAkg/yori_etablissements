import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { StepFormInterface } from '../../../interfaces/step-form.interface';

@Component({
  selector: 'app-type-etablissement',
  standalone: true,
  imports: [MatSelectModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './nom-structure.component.html',
  styleUrl: './nom-structure.component.css',
})
export class NomStructureComponent implements OnInit, StepFormInterface  {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      type_propriete: ['', Validators.required],
      etablissement_name: ['', Validators.required],
      description: ['', Validators.required],
      stars: ['', Validators.required],
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
