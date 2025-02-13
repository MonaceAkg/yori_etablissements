import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-politique-rembourssement',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioButton,
    MatRadioGroup,
    MatRadioModule,
    FormsModule,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
],
  templateUrl: './politique-rembourssement.component.html',
  styleUrl: './politique-rembourssement.component.css'
})
export class PolitiqueRembourssementComponent {
  breakfastServed: string | undefined;
  breakfastServed2: string | undefined;

  options: string[] = ['Prise en charge dans les hotels', 'Accessible en fauteuil roulant', 'Accessible pour les enfants', 'Accesible pour les animaux', 'Meilleur moment pour la visite tôt le matin', 'Meilleur moment pour la visite en après-midi', 'Meilleur moment pour la visite en soirée', 'Possibilité de reserver 1 semaine en avance', 'Nombre maximun de personnes dans un groupe 10', 'Nombre maximun de personnes dans un groupe 5', 'Visite guidée', 'Audioguide', 'Imprimer les tickets', 'Pas besoin d\'imprimer'];

  selectedOptions: string[] = [];

  onSelect(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    }
  }

}
