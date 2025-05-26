import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-images-etablissement',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './images-etablissement.component.html',
  styleUrl: './images-etablissement.component.css'
})
export class ImagesEtablissementComponent {
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
