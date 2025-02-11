import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-type-etablissement',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './nom-structure.component.html',
  styleUrl: './nom-structure.component.css'
})
export class NomStructureComponent { 

  favoriteSeason: string | undefined;
  seasons: string[] = ['N/A', '1 étoile', '2 étoiles', '3 étoiles', '4 étoiles', '5 étoiles'];
  breakfastServed: any;

  getStarArray(): number[] {
    if (!this.favoriteSeason || this.favoriteSeason === 'N/A') {
      return [];
    }
    const starCount = parseInt(this.favoriteSeason.split(' ')[0], 10);
    return Array(starCount).fill(0);
  }


}
