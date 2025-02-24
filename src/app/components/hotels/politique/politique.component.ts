import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardContent } from '@angular/material/card';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-politique',
  standalone: true,
  imports: [
    MatCardContent,
    MatRadioGroup,
    MatRadioButton,
    CommonModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatHint
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
