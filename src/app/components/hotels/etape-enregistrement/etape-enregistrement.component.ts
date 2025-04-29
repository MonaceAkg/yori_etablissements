import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-etape-enregistrement',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    RouterLink,
    CommonModule
  ], 
  templateUrl: './etape-enregistrement.component.html',
  styleUrl: './etape-enregistrement.component.css'
})
export class EtapeEnregistrementComponent implements OnInit{
  currentRoute: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.currentRoute = this.router.url; 
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }


}
