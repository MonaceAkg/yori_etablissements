import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatIcon
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit{
  showFirstParagraph = true;
  showSecondParagraph = false;
  showPopup = false;

  ngOnInit() {
    // Afficher le premier paragraphe pendant 3 secondes
    setTimeout(() => {
      this.showFirstParagraph = false;
      this.showSecondParagraph = true;

      // Afficher le deuxième paragraphe pendant 3 secondes
      setTimeout(() => {
        this.showSecondParagraph = false;
        this.showPopup = true;
      }, 5000);
    }, 5000);
  }


  isLoading: boolean = true;

loadData() {
    this.isLoading = true;
    // Simuler un chargement avec setTimeout
    setTimeout(() => {
        // Charger les données ici
        this.isLoading = false; // Lorsque le chargement est terminé
    }, 2000);
}


}
