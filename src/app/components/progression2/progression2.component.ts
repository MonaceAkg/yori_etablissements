import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { EquipementsComponent } from '../hotels/equipements/equipements.component';
import { EtapeEnregistrementComponent } from '../hotels/etape-enregistrement/etape-enregistrement.component';
import { PhotoCategorieComponent } from '../hotels/photo-categorie/photo-categorie.component';
import { SalleBainComponent } from '../hotels/salle-bain/salle-bain.component';
import { TarifHebergementComponent } from '../hotels/tarif-hebergement/tarif-hebergement.component';
import { TypeChambreComponent } from '../hotels/type-chambre/type-chambre.component';
import { StepFormInterface } from '../../interfaces/step-form.interface';


@Component({
  selector: 'app-progression2',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    EtapeEnregistrementComponent,
    TypeChambreComponent,
    SalleBainComponent,
    EquipementsComponent,
    TarifHebergementComponent,
    PhotoCategorieComponent,
],
  templateUrl: './progression2.component.html',
  styleUrl: './progression2.component.css'
})
export class Progression2Component implements AfterViewInit {
  @ViewChildren('stepForm') stepForms!: QueryList<StepFormInterface>;
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  activeTabIndex: number = 0;

  ngAfterViewInit(): void {
    // Charger l'index actif depuis localStorage, si disponible
    const savedIndex = localStorage.getItem('activeTabIndexProgression2');
    if (savedIndex !== null) {
      this.activeTabIndex = parseInt(savedIndex, 10);
      this.tabGroup.selectedIndex = this.activeTabIndex;
    }
    console.log('stepForms initialisés:', this.stepForms.toArray().map(c => c.constructor.name)); // Débogage
  }

  // Empêche le changement d'onglet par clic
  preventTabClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }

  // Gère le changement d'onglet
  onTabChange(event: MatTabChangeEvent): void {
    this.activeTabIndex = event.index;
    localStorage.setItem('activeTabIndexProgression2', this.activeTabIndex.toString());
  }

  // Vérifie si l'étape actuelle est valide
  isCurrentStepValid(): boolean {
    if (this.activeTabIndex >= 5) {
      return true; // Aucun onglet après le 5e
    }
    const currentForm = this.stepForms.toArray()[this.activeTabIndex] as StepFormInterface;
    if (!currentForm) {
      console.error(`Aucun formulaire trouvé pour l'onglet ${this.activeTabIndex}`);
      return false;
    }
    const isValid = currentForm.isValid();
    console.log(`Validité de l'onglet ${this.activeTabIndex}:`, isValid); // Débogage
    return isValid;
  }

  // Sélectionne un onglet programmatiquement
  selectTab(index: number): void {
    if (index >= 0 && index < 5) {
      this.activeTabIndex = index;
      localStorage.setItem('activeTabIndexProgression2', index.toString());
      this.tabGroup.selectedIndex = index;
    }
  }

  // Revient à l'onglet précédent
  previousTab(): void {
    if (this.activeTabIndex > 0) {
      this.selectTab(this.activeTabIndex - 1);
    }
  }

  // Passe à l'onglet suivant
  nextTab(): void {
    console.log('nextTab appelé, activeTabIndex:', this.activeTabIndex); // Débogage
    console.log('stepForms:', this.stepForms.toArray().map(c => c.constructor.name)); // Débogage
    if (this.activeTabIndex < 5) {
      const currentForm = this.stepForms.toArray()[this.activeTabIndex] as StepFormInterface;
      if (!currentForm) {
        console.error(`Aucun formulaire trouvé pour l'onglet ${this.activeTabIndex}`);
        alert('Erreur : composant de formulaire manquant.');
        return;
      }
      if (currentForm.isValid()) {
        if (this.activeTabIndex === 0) {
          // Si on est sur le 5e onglet (index 4), appeler submit()
          this.submit();
        } else {
          // Passe à l'onglet suivant
          this.selectTab(this.activeTabIndex + 1);
        }
      } else {
        alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
      }
    }
  }

  // Soumet les données des 5 onglets
  submit(): void {
    let allValid = true;
    const allData: any[] = [];

    // Vérifie la validité et collecte les données des 5 onglets
    this.stepForms.toArray().forEach((step: StepFormInterface, index: number) => {
      if (index < 5) {
        const isValid = step.isValid();
        console.log(`Onglet ${index + 1} (${step.constructor.name}): validité =`, isValid); // Débogage
        if (!isValid) {
          console.error(`Formulaire non valide à l'onglet ${index + 1}:`, step.getData());
          allValid = false;
        }
        allData.push({
          onglet: index + 1,
          composant: step.constructor.name,
          donnees: step.getData()
        });
      }
    });

    if (!allValid) {
      alert('Veuillez remplir tous les champs obligatoires dans tous les onglets.');
      return;
    }

    console.log('Données soumises pour tous les onglets:', JSON.stringify(allData, null, 2));
    // Ajoute ici la logique pour envoyer les données (ex. : appel API)
  }
}
