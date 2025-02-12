import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { EtapeEnregistrementComponent } from '../hotels/etape-enregistrement/etape-enregistrement.component';
import { ImagesEtablissementComponent } from '../hotels/images-etablissement/images-etablissement.component';

@Component({
  selector: 'app-progression3',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    ImagesEtablissementComponent,
    EtapeEnregistrementComponent
],
  templateUrl: './progression3.component.html',
  styleUrl: './progression3.component.css'
})
export class Progression3Component implements  AfterViewInit{
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
    if (this.activeTabIndex < 2) {
      this.activeTabIndex++;
    }
  }

}
