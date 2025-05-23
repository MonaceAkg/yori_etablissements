import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

interface Category {
  key: string;
  label: string;
  hasAgeRange?: boolean;
  ageRanges?: string[];
  checked: boolean;
  amount: number | null;
  percentage: number;
  ageSelected?: string;
  handicapType?: string;  // <-- nouvelle propriété pour "handicape"
}


@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [
    MatIcon,
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


  categories: Category[] = [
    { key: 'adulte', label: 'Adulte', checked: false, amount: null, percentage: 0 },
    {
      key: 'enfant',
      label: 'Enfant',
      hasAgeRange: true,
      ageRanges: [/* ... */],
      checked: false,
      amount: null,
      percentage: 0,
      ageSelected: ''
    },
    { key: 'etudiant', label: 'Etudiant', checked: false, amount: null, percentage: 0 },
    { key: 'handicape', label: 'Handicape', checked: false, amount: null, percentage: 0, handicapType: '' }
  ];


  calculerPourcentage() {
    this.pourcentage = this.somme * 0.15; // 15% de la somme
    console.log(`Somme: ${this.somme}, Pourcentage: ${this.pourcentage} ${this.monnaie}`);
  }

  // Méthode appelée quand on coche/décoche une catégorie
  onCheckboxChange(key: string): void {
    const cat = this.categories.find(c => c.key === key);
    if (cat && !cat.checked) {
      cat.amount = null;
      cat.percentage = 0;
      if (cat.hasAgeRange) {
        cat.ageSelected = '';
      }
      if (cat.key === 'handicape') {
        cat.handicapType = '';
      }
    }
  }



  // Calcul du pourcentage (exemple simple)
  calculatePercentage(key: string): void {
    const cat = this.categories.find(c => c.key === key);
    if (cat && cat.amount !== null && cat.amount >= 0) {
      // Exemple: percentage = amount * pourcentage / 100
      cat.percentage = (cat.amount * this.pourcentage) / 100;
    } else if (cat) {
      cat.percentage = 0;
    }
  }

  onSubmit() {
    // Ici tu peux traiter les données du formulaire
    console.log('Formulaire soumis:', this.categories, 'Monnaie:', this.monnaie);
    alert('Formulaire soumis avec succès !');
  }


}
