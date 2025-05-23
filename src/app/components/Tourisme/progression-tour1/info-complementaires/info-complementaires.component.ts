import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-complementaires',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './info-complementaires.component.html',
  styleUrl: './info-complementaires.component.css'
})
export class InfoComplementairesComponent {
  inputs: { value: string; editable: boolean }[] = [
    { value: '', editable: true },
    { value: '', editable: true },
    { value: '', editable: true },
  ];

  addInput() {
    this.inputs.push({ value: '', editable: true });
  }

  updateInput(index: number, event: Event) {
    const target = event.target as HTMLDivElement; // Cast pour HTMLDivElement
    this.inputs[index].value = target.textContent || ''; // Met à jour la valeur
  }

}
