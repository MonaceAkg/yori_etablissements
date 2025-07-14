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
  // tabsCount = 7;

    // Empêche le changement d'onglet par clic
  preventTabClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }

  onTabChange(event: MatTabChangeEvent) {
    this.activeTabIndex = event.index;
    localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
  }

    // Vérifie si l'étape actuelle est valide
  isCurrentStepValid(): boolean {
    const currentForm = this.stepForms.toArray()[this.activeTabIndex] as StepFormInterface;
    return currentForm ? currentForm.isValid() : false;
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
    localStorage.setItem('activeTabIndex', index.toString());
    this.tabGroup.selectedIndex = index;
  }

  previousTab() {
    if (this.activeTabIndex > 0) {
      this.selectTab(this.activeTabIndex - 1);
    }
  }

  // nextTab() {
  //   const currentForm = this.stepForms.toArray()[this.activeTabIndex];
  //   if (currentForm && currentForm.isValid()) {
  //     if (this.activeTabIndex < this.tabGroup._tabs.length - 1) {
  //       this.activeTabIndex++;
  //     }
  //   } else {
  //     alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
  //   }
  // }

  nextTab() {
    const currentForm = this.stepForms.toArray()[this.activeTabIndex];
    if (currentForm && currentForm.isValid()) {
      if (this.activeTabIndex < 6) {
        // Limite aux deux premiers onglets (index 0 et 1)
        this.activeTabIndex++;
      } else {
        // Après le deuxième onglet, appelle submit pour voir les données
        this.submit();
      }
    } else {
      alert(
        'Veuillez remplir tous les champs obligatoires avant de continuer.'
      );
    }

    if (this.isCurrentStepValid()) {
      this.activeTabIndex = Math.min(this.activeTabIndex + 1, this.stepForms.length - 1);
    }
  }

  submit() {
    let allValid = true;
    this.stepForms.forEach((step) => {
      if (!step.isValid()) allValid = false;
    });

    if (!allValid) {
      alert(
        'Veuillez remplir tous les champs obligatoires dans tous les onglets.'
      );
      return;
    }

    const allData = this.stepForms.map((step) => step.getData());
    console.log('Données soumises:', allData);
  }
}
