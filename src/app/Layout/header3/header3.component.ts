import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header3',
  imports: [MatIcon, CommonModule],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.css',
})
export class Header3Component {
  userName = 'Monace';

  logout() {
    console.log('function logout called');
  }
}
