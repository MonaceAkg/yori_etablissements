import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-politique',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioButton,
    MatRadioGroup,
    MatRadioModule,
    CommonModule,
    FormsModule
],
  templateUrl: './politique.component.html',
  styleUrl: './politique.component.css'
})
export class PolitiqueComponent {
  breakfastServed: string | undefined;
  breakfastServed2: string | undefined;
  breakfastIncluded: string | undefined;

  daysOfWeek: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  hours: string[] = ['10h00', '12h00', '14h00', '16h00', '18h00'];
  selectedDays: string[] = [];
  selectedhours: string[] = [];

  // Ajout des nouvelles propriétés
  arrivalTime: string | undefined;
  departureTime: string | undefined;

  toggleDay(day: string): void {
    const index = this.selectedDays.indexOf(day);
    if (index >= 0) {
      this.selectedDays.splice(index, 1); // Désactive le jour si sélectionné
    } else {
      this.selectedDays.push(day); // Active le jour si non sélectionné
    }
  }

  togglehours(hours: string): void {
    const index = this.selectedhours.indexOf(hours);
    if (index >= 0) {
      this.selectedhours.splice(index, 1); // Désactive le jour si sélectionné
    } else {
      this.selectedhours.push(hours); // Active le jour si non sélectionné
    }
  }
  onSubmit(): void {
    console.log('Jours sélectionnés :', this.selectedDays);
  }

  propertyTypes: { value: string, label: string }[] = [
    { value: '', label: 'Selectionnez une durée' },
    { value: '1h', label: '1h' },
    { value: '2h', label: '2h' },
    { value: '3h', label: '3h' },
    { value: '4h', label: '4h' },
    { value: '5h', label: '5h' },
    { value: '6h', label: '6h' },
    { value: '7h', label: '7h' },
    { value: '8h', label: '8h' },
    { value: '9h', label: '9h' },
    { value: '10h', label: '10h' },
    { value: '11h', label: '11h' },
    { value: 'demi_journee', label: 'démi-journée' },
    { value: '13h', label: '13h' },
    { value: '14h', label: '14h' },
    { value: '15h', label: '15h' },
    { value: '16h', label: '16h' },
    { value: '17h', label: '17h' },
    { value: '18h', label: '18h' },
    { value: '19h', label: '19h' },
    { value: '20h', label: '20h' },
    { value: '21h', label: '21h' },
    { value: '22h', label: '22h' },
    { value: '23h', label: '23h' },
    { value: '1jour', label: '1jour' },
  ];



    // Liste des types de petit-déjeuner
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
  
    // Liste des indices où un retour à la ligne est souhaité
    lineBreakIndices: number[] = [4, 8]; // Les indices après "Buffet" et "Casher"

}
 