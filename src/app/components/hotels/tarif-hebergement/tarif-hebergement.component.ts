import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-tarif',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatDivider,
    FormsModule,
    CommonModule
  ],
  templateUrl: './tarif-hebergement.component.html',
  styleUrl: './tarif-hebergement.component.css'
})
export class TarifHebergementComponent {
  

  somme: number = 0;
  pourcentage: number = 0;
  monnaie: string = 'F CFA'; // Valeur par défaut
  calculerPourcentage() {
    this.pourcentage = this.somme * 0.15; // 15% de la somme
    console.log(`Somme: ${this.somme}, Pourcentage: ${this.pourcentage} ${this.monnaie}`);
  }
  
  
}
