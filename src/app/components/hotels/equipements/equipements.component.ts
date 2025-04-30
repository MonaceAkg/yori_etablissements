import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-equipements',
  standalone: true,
  imports: [
    MatCard,
    MatDivider,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption
],
  templateUrl: './equipements.component.html',
  styleUrl: './equipements.component.css'
})
export class EquipementsComponent implements OnInit {

  breakfastServed: string | undefined;
  breakfastIncluded: string | undefined;

  ngOnInit() {}


  selectedOptions: string[] = [];
  onSelect(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    }
  }


  options2: string[] = [
    'Terrasse',
    'Vue sur le terrain de sport',
    'Balcon',
  ];
  selectedOptions2: string[] = [];
  onSelect2(option2: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions2.push(option2);
    } else {
      this.selectedOptions2 = this.selectedOptions2.filter(o => o !== option2);
    }
  }
  isBalconSelected(): boolean {
    return this.selectedOptions.includes('Balcon');
  }


  options3: string[] = [
    'Bouilloire électrique',
    'Plateau / bouilloire',
    'Coin repas',
    'Petit-déjeuner continental',
    'Brunch',
    'Service de chambre',
  ];
  selectedOptions3: string[] = [];
  onSelect3(option3: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions3.push(option3);
    } else {
      this.selectedOptions3 = this.selectedOptions3.filter(o => o !== option3);
    }
  }


  options = [
    { value: 'Vue sur le jardin', viewValue: 'Vue sur le jardin' },
    { value: 'Vue sur la ville', viewValue: 'Vue sur la ville' },
    { value: 'Vue sur le lac', viewValue:'Lits Vue sur le lac'},
    { value: 'Vue sur un site d\'interet', viewValue:'Vue sur un site d\'interet'},
    { value: 'Vue sur un montagne', viewValue:'Vue sur un montagne'},
    { value: 'Vue sur une piscine', viewValue:'Vue sur une piscine '},
    { value: 'Vue sur la rivière ', viewValue:'Vue sur la rivière '},
    { value: 'Vue sur la mer', viewValue:'Vue sur la mer'},
    { value: 'Vue sur une cour intérieur', viewValue:'Vue sur une cour intérieur'},
    { value: 'Vue sur une rue calme', viewValue:'Vue sur une rue calme'},


  ];


  equipements = [
    { value: 'Télévision à écran plat', viewValue: 'Télévision à écran plat' },
    { value: 'Portant', viewValue: 'Portant' },
    { value: 'Climatisation', viewValue: 'Climatisation' },
    { value: 'Linge de maison', viewValue: 'Linge de maison' },
    { value: 'Bureau', viewValue: 'Bureau' },
    { value: 'Service de réveil', viewValue: 'Service de réveil' },
    { value: 'Serviettes', viewValue: 'Serviettes' },
    { value: 'Armoire ou penderie', viewValue: 'Armoire ou penderie' },
    { value: 'Chauffage', viewValue: 'Chauffage' },
    { value: 'Coffre-for', viewValue: 'Coffre-for' },
    { value: 'Serviettes / linge de lit (frais supplémentaires)', viewValue: 'Serviettes / linge de lit (frais supplémentaires)' },
    { value: 'Logement entièrement situé au rez-de-chaussée', viewValue: 'Logement entièrement situé au rez-de-chaussée' },
  ]

  selectedEquipements: string[] = [];
  onCheckboxChange(event: any): void {
    const value = event.target.value;
    if (event.target.checked) {
      this.selectedEquipements.push(value);
    } else {
      this.selectedEquipements = this.selectedEquipements.filter(val => val !== value);
    }
  }
  


}
