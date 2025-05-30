import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-proprietaire',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './proprietaire.component.html',
  styleUrl: './proprietaire.component.css'
})
export class ProprietaireComponent implements OnInit {
  options: string[] = ["Je certifie que l'activité d'hébergement est légale et détient toutes les autorisations requises, pouvant être présentées sur demande. Mbolo.com B.V. se réserve le droit de vérifier toutes les informations fournies lors de cette inscription.", "J'ai lu et j'accepte les Conditions Génerales de Prestation."];

  selectedOptions: string[] = [];

  onSelect(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    }
  }

  ngOnInit(): void { }



}
