import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private map!: L.Map;

  ngAfterViewInit(): void {
    // Initialiser la carte avec un centre temporaire
    this.map = L.map('map').setView([0, 0], 13);

    // Ajouter des tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(this.map);

    // Vérifier si la géolocalisation est disponible
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Centrer la carte sur la position de l'utilisateur
          this.map.setView([latitude, longitude], 13);

          // Ajouter un marqueur à la position actuelle
          L.marker([latitude, longitude])
            .addTo(this.map)
            .bindPopup('Vous êtes ici !')
            .openPopup();
        },
        (error) => {
          console.error('Erreur de géolocalisation :', error);
        }
      );
    } else {
      console.warn("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove(); // Nettoyer la carte lorsque le composant est détruit
    }
  }
}
