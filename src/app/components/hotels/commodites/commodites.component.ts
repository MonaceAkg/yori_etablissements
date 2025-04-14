import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-commodites',
  standalone: true,
  imports: [
    FormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './commodites.component.html',
  styleUrl: './commodites.component.css'
})
export class CommoditesComponent {
  typesOfShoes: string[] = ['Restaurant', 'Service d\'étage', 'Réception ouverte 24h/24', 'Sauna', 'Centre de remise en forme', 'Jardin','Terrasse', 'Chambres non-fumeurs', 'Chambres fumeurs', 'Navette aéroport', 'Chambres familiales', 'Spa et centre de bien-être', 'Bain à remous/jacuzzi', 'Connexion Wi-Fi gratuite', 'Climatisation', 'Parc aquatique', 'Borne de recharge pour les véhicules électriques', 'Piscine', 'Plage'];



  filteredShoes: string[] = [...this.typesOfShoes];
  searchTerm: string = '';

  filterList() {
    if (!this.searchTerm) {
      this.filteredShoes = [...this.typesOfShoes];
      return;
    }
    
    this.filteredShoes = this.typesOfShoes.filter(item =>
      item.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
 