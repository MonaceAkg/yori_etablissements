import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-fin-etape1',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    RouterLink,
    CommonModule
  ],
  templateUrl: './fin-etape1.component.html', 
  styleUrl: './fin-etape1.component.css'
})
export class FinEtape1Component implements OnInit{
  currentRoute: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.currentRoute = this.router.url; // Récupère la route actuelle
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url; // Met à jour la route si elle change
    });
  }
}
