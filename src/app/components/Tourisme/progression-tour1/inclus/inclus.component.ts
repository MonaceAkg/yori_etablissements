import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardHeader, MatCardContent, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-inclus',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    CommonModule
],
  templateUrl: './inclus.component.html',
  styleUrl: './inclus.component.css'
})
export class InclusComponent {
  inputs: { value: string; editable: boolean }[] = [
    { value: '', editable: true },
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
