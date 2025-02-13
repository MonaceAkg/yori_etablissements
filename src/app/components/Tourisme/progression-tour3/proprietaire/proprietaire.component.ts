import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import intlTelInput from 'intl-tel-input';
// import intlTelInput from 'intl-tel-input';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-proprietaire',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule

  ],
  templateUrl: './proprietaire.component.html',
  styleUrl: './proprietaire.component.css'
})
export class ProprietaireComponent implements OnInit{
  @ViewChild('phoneInput', { static: false }) phoneInputElement!: ElementRef; // Utilisation de ViewChild
  options: string[] = ["Je certifie que l'activité d'hébergement est légale et détient toutes les autorisations requises, pouvant être présentées sur demande. Mbolo.com B.V. se réserve le droit de vérifier toutes les informations fournies lors de cette inscription.", "J'ai lu et j'accepte les Conditions Génerales de Prestation."];

  selectedOptions: string[] = [];

  onSelect(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    }
  }

  ngOnInit(): void {}
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  // ngAfterViewInit(): void {
  //   if (this.phoneInputElement) {
  //     intlTelInput(this.phoneInputElement.nativeElement, {
  //       initialCountry: 'GA',
  //       separateDialCode: true,
  //       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/24.5.0/build/js/utils.js'
  //     });
  //   }
  // }

}
