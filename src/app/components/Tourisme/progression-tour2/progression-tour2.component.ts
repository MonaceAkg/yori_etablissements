import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabsModule, MatTabChangeEvent } from '@angular/material/tabs';
import { FinEtape1Component } from '../progression-tour1/fin-etape1/fin-etape1.component';
import { ImagesEtablissementComponent } from './images-tourism/images-etablissement.component';

@Component({
  selector: 'app-progression-tour2',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    FinEtape1Component,
    ImagesEtablissementComponent
  ],
  templateUrl: './progression-tour2.component.html',
  styleUrl: './progression-tour2.component.css'
})
export class ProgressionTour2Component {

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
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
