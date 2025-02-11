import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-commodites',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatIcon,
  ],
  templateUrl: './commodites.component.html',
  styleUrl: './commodites.component.css'
})
export class CommoditesComponent {
  typesOfShoes: string[] = ['Restaurant', 'Service d\'étage', 'Réception ouverte 24h/24', 'Sauna', 'Centre de remise en forme', 'Jardin','Terrasse', 'Chambres non-fumeurs', 'Chambres fumeurs', 'Navette aéroport', 'Chambres familiales', 'Spa et centre de bien-être', 'Bain à remous/jacuzzi', 'Connexion Wi-Fi gratuite', 'Climatisation', 'Parc aquatique', 'Borne de recharge pour les véhicules électriques', 'Piscine', 'Plage'];
}
 