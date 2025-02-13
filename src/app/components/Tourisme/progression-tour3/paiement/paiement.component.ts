import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
],
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})
export class PaiementComponent implements OnInit{

  ngOnInit() {}

  items = [
    { label: 'Carte de crédit/débit', checked: false, images: ['assets/img/visa.png', 'assets/img/visa-yellow.png', 'assets/img/GB-card.png'] },
    { label: 'Paiement digital', checked: false, images: ['assets/img/paypal.png'] },
    { label: 'Paysing', checked: false, images: ['assets/img/GB-card.png'] }, // pas d'image
    { label: 'Ebilling', checked: false, images: ['assets/img/last-card.png'] },
  ];

  get checkedCount(): number {
    return this.items.filter(item => item.checked).length;
  }

}
