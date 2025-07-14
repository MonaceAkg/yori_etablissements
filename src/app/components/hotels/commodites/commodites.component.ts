import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { StepFormInterface } from '../../../interfaces/step-form.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commodites',
  standalone: true,
  imports: [
    FormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './commodites.component.html',
  styleUrl: './commodites.component.css'
})
export class CommoditesComponent implements OnInit, StepFormInterface {
  typesOfShoes: string[] = [
    'Restaurant', 'Service d\'étage', 'Réception ouverte 24h/24', 'Sauna',
    'Centre de remise en forme', 'Jardin', 'Terrasse', 'Chambres non-fumeurs',
    'Chambres fumeurs', 'Navette aéroport', 'Chambres familiales', 'Spa et centre de bien-être',
    'Bain à remous/jacuzzi', 'Connexion Wi-Fi gratuite', 'Climatisation', 'Parc aquatique',
    'Borne de recharge pour les véhicules électriques', 'Piscine', 'Plage'
  ];

  filteredShoes: string[] = [];
  form!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filteredShoes = [...this.typesOfShoes];

    this.form = this.fb.group({
      searchTerm: [''], 
      selectedShoes: [[], Validators.required]  // tableau des options sélectionnées, obligatoire
    });
  }

  filterList() {
    const search = this.form.get('searchTerm')?.value?.toLowerCase() || '';
    if (!search) {
      this.filteredShoes = [...this.typesOfShoes];
      return;
    }
    this.filteredShoes = this.typesOfShoes.filter(item =>
      item.toLowerCase().includes(search)
    );
  }

  isValid(): boolean {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  getData() {
    return this.form.value;
  }
}


 