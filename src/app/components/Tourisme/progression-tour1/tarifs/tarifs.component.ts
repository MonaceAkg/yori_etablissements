import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [
    MatIcon,
    MatDivider,
    CommonModule,
    FormsModule
],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.css'
})
export class TarifsComponent {

  somme: number = 0;
  pourcentage: number = 0;
  monnaie: string = 'FCFA'; // Valeur par défaut
  age: string = "selectionnez une tranche d'âge"; // Valeur par défaut
form: any;
  calculerPourcentage() {
    this.pourcentage = this.somme * 0.15; // 15% de la somme
    console.log(`Somme: ${this.somme}, Pourcentage: ${this.pourcentage} ${this.monnaie}`);
  }

  adulteChecked = false;
  enfantChecked = false;
  etudiantChecked = false;
  handicapeChecked = false;

  adulteAmount: number | null = null;
  enfantAmount: number | null = null;
  etudiantAmount: number | null = null;
  handicapeAmount: number | null = null;

  adultePercentage: number | null = null;
  enfantPercentage: number | null = null;
  etudiantPercentage: number | null = null;
  handicapePercentage: number | null = null;

  onCheckboxChange(checkbox: string) {
    // console.log(`${checkbox} checkbox checked: ${this[`${checkbox}Checked`]}`);
  }

  calculatePercentage(type: string) {
    let amount: number | null = null;

    switch (type) {
      case 'adulte':
        amount = this.adulteAmount;
        this.adultePercentage = amount ? parseFloat((amount * 0.85).toFixed(2)) : null;
        break;
      case 'enfant':
        amount = this.enfantAmount;
        this.enfantPercentage = amount ? parseFloat((amount * 0.85).toFixed(2)) : null;
        break;
      case 'etudiant':
        amount = this.etudiantAmount;
        this.etudiantPercentage = amount ? parseFloat((amount * 0.85).toFixed(2)) : null;
        break;
      case 'handicape':
        amount = this.handicapeAmount;
        this.handicapePercentage = amount ? parseFloat((amount * 0.85).toFixed(2)) : null;
        break;
    }
  }

}
