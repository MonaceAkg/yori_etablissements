import { CommonModule } from '@angular/common';
import { Component, ViewChild, QueryList, ViewChildren } from '@angular/core';
import {
  MatTab,
  MatTabChangeEvent,
  MatTabGroup,
  MatTabsModule,
} from '@angular/material/tabs';
import { FormInfoGeneralesComponent } from '../hotels/form-info-generales/form-info-generales.component';
import { NomStructureComponent } from '../hotels/nom-structure/nom-structure.component';
import { CommoditesComponent } from '../hotels/commodites/commodites.component';
import { PetitDejeunerComponent } from '../hotels/petit-dejeuner/petit-dejeuner.component';
import { ParkingComponent } from '../hotels/parking/parking.component';
import { LanguesComponent } from '../hotels/langues/langues.component';
import { PolitiqueComponent } from '../hotels/politique/politique.component';
import { EtapeEnregistrementComponent } from '../hotels/etape-enregistrement/etape-enregistrement.component';
import { StepFormInterface } from '../../interfaces/step-form.interface';

@Component({
  selector: 'app-progression1',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    FormInfoGeneralesComponent,
    NomStructureComponent,
    CommoditesComponent,
    PetitDejeunerComponent,
    ParkingComponent,
    LanguesComponent,
    PolitiqueComponent,
    EtapeEnregistrementComponent,
  ],
  templateUrl: './progression1.component.html',
  styleUrl: './progression1.component.css',
})


export class Progression1Component {
  @ViewChildren('stepForm') stepForms!: QueryList<StepFormInterface>;
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  activeTabIndex: number = 0;

  // Empêche le changement d'onglet par clic
  preventTabClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }

  // Gère le changement d'onglet
  onTabChange(event: MatTabChangeEvent): void {
    this.activeTabIndex = event.index;
    localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
  }

  // Vérifie si l'étape actuelle est valide
  isCurrentStepValid(): boolean {
    if (this.activeTabIndex >= 7) {
      return true; // Le 8e onglet n'a pas de formulaire à valider
    }
    const currentForm = this.stepForms.toArray()[this.activeTabIndex] as StepFormInterface;
    return currentForm ? currentForm.isValid() : false;
  }

  // Sélectionne un onglet programmatiquement
  selectTab(index: number): void { 
    this.activeTabIndex = index;
    localStorage.setItem('activeTabIndex', index.toString());
    this.tabGroup.selectedIndex = index;
  }

  // Revient à l'onglet précédent
  previousTab(): void {
    if (this.activeTabIndex > 0) {
      this.selectTab(this.activeTabIndex - 1);
    }
  }

  // Passe à l'onglet suivant
  nextTab(): void {
    if (this.activeTabIndex < 7) {
      const currentForm = this.stepForms.toArray()[this.activeTabIndex] as StepFormInterface;
      if (currentForm && currentForm.isValid()) {
        if (this.activeTabIndex === 6) {
          // Si on est sur le 7e onglet (index 6), appeler submit() et passer au 8e
          this.submit();
          this.selectTab(7); // Passe au 8e onglet
        } else {
          // Passe à l'onglet suivant
          this.selectTab(this.activeTabIndex + 1);
        }
      } else {
        alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
      }
    }
  }

  // Soumet les données des 7 premiers onglets
  submit(): void {
    let allValid = true;
    const allData: any[] = [];

    // Vérifie la validité et collecte les données des 7 premiers onglets
    this.stepForms.toArray().forEach((step: StepFormInterface, index: number) => {
      if (index < 7) {
        if (!step.isValid()) {
          allValid = false;
        }
        allData.push(step.getData());
      }
    });

    if (!allValid) {
      alert('Veuillez remplir tous les champs obligatoires dans tous les onglets.');
      return;
    }

    console.log('Données soumises:', allData);
    // Ajoute ici la logique pour envoyer les données (ex. : appel API)
  }
}
