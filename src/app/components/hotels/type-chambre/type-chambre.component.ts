import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatCard, MatCardTitle, MatCardHeader, MatCardTitleGroup } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { StepFormInterface } from '../../../interfaces/step-form.interface';

@Component({
  selector: 'app-update-chambre',
  standalone: true,
  imports: [
    MatRadioGroup,
    MatRadioButton,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
],
  templateUrl: './type-chambre.component.html',
  styleUrl: './type-chambre.component.css'
})
export class TypeChambreComponent implements OnInit, StepFormInterface {
  form!: FormGroup;
  options = [
    { value: 'Simple', viewValue: 'Simple' },
    { value: 'Double', viewValue: 'Double' },
    { value: 'Jumeaux', viewValue: 'Lits Jumeaux' },
    { value: 'JumeauxDouble', viewValue: 'Lit(s) jumeaux/Double' },
    { value: 'Triple', viewValue: 'Triple' },
    { value: 'Quatriple', viewValue: 'Quatriple' },
    { value: 'Suite', viewValue: 'Suite' },
    { value: 'ChambreKing', viewValue: 'Chambre King' },
    { value: 'ChambreQueen', viewValue: 'Chambre Queen' },
    { value: 'ChambreStandard', viewValue: 'Chambre Standard' },
    { value: 'ChambreLuxe', viewValue: 'Chambre Luxe' },
    { value: 'LitDoctoire', viewValue: 'Lit en Dortoir' },
    { value: 'Familiale', viewValue: 'Familiale' },
    { value: 'Studio', viewValue: 'Studio' },
    { value: 'Appartement', viewValue: 'Appartement' },
    { value: 'Doctoir', viewValue: 'Dortoir' }
  ];
  lits = [
    { name: 'lit simple', size: '90-130 cm de large' },
    { name: 'lit double', size: '131-150 cm de large' },
    { name: 'lit King-Size', size: '151-180 cm' },
    { name: 'grand lit King-Size', size: '181-210 cm' },
    { name: 'lit superposé', size: 'Dimensions variables' },
    { name: 'canapé-lit', size: 'Dimensions variables' },
    { name: 'futon', size: 'Dimensions variables' }
  ];
  measureUnits = ['mètres carrés', 'pieds carrés'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      hebergement: ['', Validators.required],
      numberHebergements: ['', [Validators.required, Validators.min(1)]],
      litsQuantities: this.fb.array(
        this.lits.map(() => this.fb.control(0, [Validators.min(0)])),
        [this.atLeastOneLitValidator()]
      ),
      personnes: ['', [Validators.required, Validators.min(1)]],
      superficie: ['', [Validators.required, Validators.min(1)]],
      measureUnit: ['mètres carrés', Validators.required],
      smokingAllowed: ['', Validators.required]
    });

    console.log('Formulaire initialisé:', this.form); // Débogage

    // Validation conditionnelle
    this.form.get('hebergement')?.valueChanges.subscribe(value => {
      console.log('hebergement changé:', value); // Débogage
      const numberControl = this.form.get('numberHebergements');
      const litsArray = this.form.get('litsQuantities') as FormArray;
      const personnesControl = this.form.get('personnes');
      const superficieControl = this.form.get('superficie');
      const measureUnitControl = this.form.get('measureUnit');
      const smokingControl = this.form.get('smokingAllowed');

      if (value) {
        numberControl?.setValidators([Validators.required, Validators.min(1)]);
        litsArray.setValidators([this.atLeastOneLitValidator()]);
        personnesControl?.setValidators([Validators.required, Validators.min(1)]);
        superficieControl?.setValidators([Validators.required, Validators.min(1)]);
        measureUnitControl?.setValidators([Validators.required]);
        smokingControl?.setValidators([Validators.required]);
      } else {
        numberControl?.clearValidators();
        litsArray.clearValidators();
        personnesControl?.clearValidators();
        superficieControl?.clearValidators();
        measureUnitControl?.clearValidators();
        smokingControl?.clearValidators();
        this.form.patchValue({
          numberHebergements: '',
          litsQuantities: this.lits.map(() => 0),
          personnes: '',
          superficie: '',
          measureUnit: 'mètres carrés',
          smokingAllowed: ''
        });
      }

      numberControl?.updateValueAndValidity();
      litsArray?.updateValueAndValidity();
      personnesControl?.updateValueAndValidity();
      superficieControl?.updateValueAndValidity();
      measureUnitControl?.updateValueAndValidity();
      smokingControl?.updateValueAndValidity();
    });

    // Log des changements de formulaire pour débogage
    this.form.valueChanges.subscribe(value => {
      console.log('Valeurs du formulaire:', value);
    });
  }

  // Validateur personnalisé pour exiger au moins un lit
  atLeastOneLitValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!(control instanceof FormArray)) {
        return null;
      }
      const hasAtLeastOne = control.controls.some((ctrl: AbstractControl) => ctrl.value > 0);
      return hasAtLeastOne ? null : { required: true };
    };
  }

  get litsQuantitiesArray(): FormArray {
    return this.form.get('litsQuantities') as FormArray;
  }

  getLitsQuantityControl(index: number): FormControl {
    return this.litsQuantitiesArray.at(index) as FormControl;
  }

  incrementQuantity(index: number): void {
    const control = this.getLitsQuantityControl(index);
    control.setValue((control.value || 0) + 1);
  }

  decrementQuantity(index: number): void {
    const control = this.getLitsQuantityControl(index);
    if (control.value > 0) {
      control.setValue(control.value - 1);
    }
  }

  incrementPersonnes(): void {
    const control = this.form.get('personnes');
    control?.setValue((control.value || 0) + 1);
  }

  decrementPersonnes(): void {
    const control = this.form.get('personnes');
    if (control && control.value > 1) {
      control.setValue(control.value - 1);
    }
  }

  getSelectedLits(): { name: string, size: string, quantity: number }[] {
    return this.litsQuantitiesArray.controls
      .map((ctrl, i) => ({
        name: this.lits[i].name,
        size: this.lits[i].size,
        quantity: ctrl.value
      }))
      .filter(item => item.quantity > 0);
  }

  isValid(): boolean {
    if (!this.form) {
      console.error('Formulaire non initialisé');
      return false;
    }
    this.form.markAllAsTouched();
    console.log('Validité du formulaire:', this.form.valid, this.form.errors); // Débogage
    return this.form.valid;
  }

  getData() {
    const data = {
      hebergement: this.form.value.hebergement,
      numberHebergements: this.form.value.numberHebergements,
      lits: this.getSelectedLits(),
      personnes: this.form.value.personnes,
      superficie: this.form.value.superficie,
      measureUnit: this.form.value.measureUnit,
      smokingAllowed: this.form.value.smokingAllowed === 'Oui'
    };
    console.log('Données de TypeChambreComponent:', data); // Débogage
    return data;
  }
}

