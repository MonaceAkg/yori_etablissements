import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTabGroup, MatTabChangeEvent, MatTab, MatTabsModule } from '@angular/material/tabs';
import { FormInfoGeneralesComponent } from '../../hotels/form-info-generales/form-info-generales.component';
import { FinEtape1Component } from './fin-etape1/fin-etape1.component';
import { InclusComponent } from './inclus/inclus.component';
import { InfoComplementairesComponent } from './info-complementaires/info-complementaires.component';
import { InfoImportantesComponent } from './info-importantes/info-importantes.component';
import { PolitiqueRembourssementComponent } from './politique-rembourssement/politique-rembourssement.component';
import { PolitiqueComponent } from './politique/politique.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { NomStructureComponent } from './type-structure/nom-structure.component';

@Component({
  selector: 'app-progression-tour1',
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    FormInfoGeneralesComponent,
    PolitiqueComponent,
    NomStructureComponent,
    PolitiqueRembourssementComponent,
    InfoImportantesComponent,
    InfoComplementairesComponent,
    InclusComponent,
    TarifsComponent,
    FinEtape1Component
  ],
  templateUrl: './progression-tour1.component.html',
  styleUrl: './progression-tour1.component.css'
})
export class ProgressionTour1Component {

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
