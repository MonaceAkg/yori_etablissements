import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-petit-dejeuner',
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
  ],
  templateUrl: './petit-dejeuner.component.html',
  styleUrl: './petit-dejeuner.component.css'
})
export class PetitDejeunerComponent {
  breakfastServed: string | undefined;
  breakfastIncluded: string | undefined;
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
}
