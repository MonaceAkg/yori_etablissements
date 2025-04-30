import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-photo-categorie',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    CommonModule
],
  templateUrl: './photo-categorie.component.html',
  styleUrl: './photo-categorie.component.css'
})
export class PhotoCategorieComponent {

  images: string[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.images.push(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  onUploadClick(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.images.push(e.target.result);
        };

        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(image: string): void {
    this.images = this.images.filter(img => img !== image);
  }

}
