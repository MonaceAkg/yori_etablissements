import { Component,OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header2',
  imports: [
    RouterLink,
    MatCard,
    MatMenuItem,
    MatCardContent,
    MatCardTitle,
    MatMenu,
    MatMenuModule,
    MatMenuItem,
    MatDivider,
    MatTableModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component implements OnInit{
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url; // Récupère la route actuelle
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url; // Met à jour la route si elle change
    });
  }

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger | undefined;  // Indique que cela peut être undefined au départ

  openMenu() {
    if (this.menuTrigger) {
      this.menuTrigger.openMenu();
    }
  }

  closeMenu() {
    if (this.menuTrigger) {
      this.menuTrigger.closeMenu();
    }
  }


  userName = 'Juste Monace'; // Remplacez par le nom réel de l'utilisateur
  info = "mes informations"

  logout() {
    // Logique de déconnexion ici
    console.log('Déconnexion');
  }

  noms: string[] = ['HOTEL RENDAMA', 'HIBISCUS', 'LA COLOMBE', 'RADISSON BLU'];

  onButtonClick(nom: string) {
    alert(`Vous avez cliqué sur ${nom}`);
  }
}
