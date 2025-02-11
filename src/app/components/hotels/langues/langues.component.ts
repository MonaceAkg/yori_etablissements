import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-langues',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    CommonModule
],
  templateUrl: './langues.component.html',
  styleUrl: './langues.component.css'
})
export class LanguesComponent {

  options: string[] = ['Français', 'Anglais', 'Espagnol', 'Italien', 'Portugais', 'Deutsh'];

  selectedOptions: string[] = [];

  onSelect(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    }
  }
}
