import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header3',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    RouterLink
  ],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.css',
})
export class Header3Component {
  userName = 'Monace';

  logout() {
    console.log('function logout called');
  }
}
 