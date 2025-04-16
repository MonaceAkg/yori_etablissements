import { Component,OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [
    RouterLink,
    MatMenuModule,
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


  userName = 'Juste Monace'; 
  info = "mes informations"

  logout() {
    console.log('Déconnexion');
  }

noms: string[] = ['HOTEL RENDAMA', 'HIBISCUS', 'LA COLOMBE', 'RADISSON BLU','SALI','MBOUR','SAINT LOUIS','DAKAR','KAYAR','THIES',];

  onButtonClick(nom: string) {
    alert(`Vous avez cliqué sur ${nom}`);
  }
}
