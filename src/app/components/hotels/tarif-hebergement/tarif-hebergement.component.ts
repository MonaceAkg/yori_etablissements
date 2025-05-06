import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-tarif',
  standalone: true,
  imports: [
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
