import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardContent, MatCardTitle, MatCardHeader } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatRadioModule,
    FormsModule,
    MatDivider,
    MatChipsModule,
    CommonModule,
    MatMenu,
    MatMenuTrigger,
    MatMenuModule
  ],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css' 
})
export class ParkingComponent {
  breakfastServed: string | undefined;
  breakfastIncluded: string | undefined;

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
