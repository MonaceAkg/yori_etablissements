import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabsModule, MatTabChangeEvent } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { FinEtape1Component } from '../progression-tour1/fin-etape1/fin-etape1.component';
import { ASavoirComponent } from './a-savoir/a-savoir.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';

@Component({
  selector: 'app-progression-tour3',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    CommonModule,
    PaiementComponent,
    ASavoirComponent,
    ProprietaireComponent,
    MatTabsModule,
    RouterLink,
    FinEtape1Component
  ],
  templateUrl: './progression-tour3.component.html',
  styleUrl: './progression-tour3.component.css'
})
export class ProgressionTour3Component {

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0;

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
     if (this.activeTabIndex < this.tabGroup._tabs.length - 1) {
       this.selectTab(this.activeTabIndex + 1);
     }
   }
}
