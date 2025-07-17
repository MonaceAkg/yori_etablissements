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
export class NomStructureComponent implements OnInit, StepFormInterface {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      type_propriete: ['', Validators.required],
      etablissement_name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      stars: ['', Validators.required]
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
