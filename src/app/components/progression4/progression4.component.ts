import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { RouterLink, Router } from '@angular/router';
import { ASavoirComponent } from '../hotels/a-savoir/a-savoir.component';
import { EtapeEnregistrementComponent } from '../hotels/etape-enregistrement/etape-enregistrement.component';
import { PaiementComponent } from '../hotels/paiement/paiement.component';
import { ProprietaireComponent } from '../hotels/proprietaire/proprietaire.component';

@Component({
  selector: 'app-progression4',
  standalone: true, 
  imports: [
    MatTab,
    MatTabGroup,
    CommonModule,
    PaiementComponent,
    ASavoirComponent,
    EtapeEnregistrementComponent,
    ProprietaireComponent,
    MatTabsModule,
    RouterLink 
],
  templateUrl: './progression4.component.html',
  styleUrl: './progression4.component.css'
})
export class Progression4Component  {
  constructor(private router: Router) {}


  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0;


  onTabChange(event: any) {
    this.activeTabIndex = event.index;
    localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
    localStorage.setItem('activeTabIndex', index.toString());
  }

  previousTab(event?: Event) {
    if (this.activeTabIndex > 0) {
      this.activeTabIndex--;
    }

    if (event) {
      event.stopPropagation(); // Empêche le clic du bouton de remonter à la div
    }
  }

  nextTab(event?: Event) {
    if (this.activeTabIndex < 3) {
      this.activeTabIndex++;
    }

    if (event) {
      event.stopPropagation(); // Empêche le clic du bouton de remonter à la div
    }
  }
  

  handleDivClick(): void {
    switch (this.activeTabIndex) {
      case 0:
        this.nextTab();
        break;
      case 1:
        this.nextTab();
        break;
      case 2:
        this.nextTab();
        break;
      case 3:
        this.router.navigate(['/loading']);
        break;
      default:
        break;
    }
  }

  navigateToRoute(event?: Event): void {
    if (event) {
      event.stopPropagation(); // Empêche la propagation du clic vers la `div`
    }
    this.router.navigate(['/loading']);
  }

}
