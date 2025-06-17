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
    EtapeEnregistrementComponent
  ],
  templateUrl: './progression1.component.html',
  styleUrl: './progression1.component.css',
})
export class Progression1Component {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  @ViewChildren(FormInfoGeneralesComponent) formSteps!: QueryList<FormInfoGeneralesComponent>;

  activeTabIndex: number = 0;
  tabsCount = 7;

  onTabChange(event: MatTabChangeEvent) {
    this.activeTabIndex = event.index;
    localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
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

  nextTab() {
    const currentForm = this.formSteps.toArray()[this.activeTabIndex];

    if (currentForm && currentForm.isValid()) {
      // Vérifie s'il reste encore des onglets après l'actuel
      if (this.activeTabIndex < this.tabGroup._tabs.length - 1) {
        this.activeTabIndex++;
        this.selectTab(this.activeTabIndex);
      }
    } else {
      alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
    }

    if (this.activeTabIndex === 1) {
      // Si on est sur le dernier onglet, on peut soumettre
      this.submit();
    }
  }

  submit() {
    // Valider tous les formulaires avant soumission
    let allValid = true;
    this.formSteps.forEach(step => {
      if (!step.isValid()) {
        allValid = false;
      }
    });

    if (!allValid) {
      alert('Veuillez remplir tous les champs obligatoires dans tous les onglets.');
      return;
    }

    // Récupérer les données
    const allData = this.formSteps.map(step => step.getData());
    console.log('Données soumises:', allData);

    // Ici tu peux faire ta requête HTTP ou autre traitement
  }

}
