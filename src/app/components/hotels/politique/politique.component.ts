import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-politique',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatRadioGroup,
    MatRadioButton,
    CommonModule,
    FormsModule,
    MatDivider,
    MatFormField,
    MatLabel,
    MatHint,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './politique.component.html',
  styleUrl: './politique.component.css'
})
export class PolitiqueComponent {
  breakfastServed: string | undefined;
  breakfastIncluded: string | undefined;

  minArrivalTime = '06:00';
  maxArrivalTime = '12:00';
  minDepartureTime = '18:00';
  maxDepartureTime = '23:00';

  // Ajout des nouvelles propriétés
  childrenAccepted: string | undefined;
  petsAccepted: string | undefined;
}
