import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { EquipementsComponent } from '../hotels/equipements/equipements.component';
import { EtapeEnregistrementComponent } from '../hotels/etape-enregistrement/etape-enregistrement.component';
import { PhotoCategorieComponent } from '../hotels/photo-categorie/photo-categorie.component';
import { SalleBainComponent } from '../hotels/salle-bain/salle-bain.component';
import { TarifHebergementComponent } from '../hotels/tarif-hebergement/tarif-hebergement.component';
import { TypeChambreComponent } from '../hotels/type-chambre/type-chambre.component';


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
export class Progression2Component implements  AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
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


  previousTab() {
    if (this.activeTabIndex > 0) {
      this.activeTabIndex--;
    }
  }

  nextTab() {
    if (this.activeTabIndex < 5) {
      this.activeTabIndex++;
    }
  }


}
