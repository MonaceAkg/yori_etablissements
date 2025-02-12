import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
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
