import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private map!: L.Map;
  private librevilleLatLng: [number, number] = [0.39, 9.45]; // Coordonnées de Libreville
  private dakarLatLng: [number, number] = [14.7167, -17.4677]; // Coordonnées de Dakar

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('L\'élément de la carte n\'est pas trouvé.');
      return;
    }

    this.map = L.map(mapElement, {
      center: this.librevilleLatLng, // Centre sur Libreville par défaut
      zoom: 6, // Zoom plus petit pour voir les deux marqueurs
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '© OpenStreetMap contributors',
    });

    tiles.addTo(this.map);

    // Ajouter un marqueur pour Libreville
    L.marker(this.librevilleLatLng).addTo(this.map)
      .bindPopup('Bienvenue à Libreville!')
      .openPopup();

    // Utiliser la géolocalisation pour centrer la carte sur la position de l'utilisateur
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatLng: [number, number] = [position.coords.latitude, position.coords.longitude];
          // Ajouter un marqueur à la position de l'utilisateur
          L.marker(userLatLng).addTo(this.map)
            .bindPopup('Vous êtes ici à Dakar!')
            .openPopup();
           this.map.setView(userLatLng, 6); // Centrer la carte sur la position de l'utilisateur
        },
        (error) => {
          console.error('Erreur de géolocalisation :', error);
          // Si la géolocalisation échoue, centrer sur Libreville
          this.map.setView(this.librevilleLatLng, 6);
        }
      );
    } else {
      console.error('La géolocalisation n\'est pas supportée par ce navigateur.');
      // Si la géolocalisation n'est pas supportée, centrer sur Libreville
      this.map.setView(this.librevilleLatLng, 6);
    }

    // Invalider la taille de la carte après l'initialisation
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.off(); // Désinscrire tous les événements
      this.map.remove(); // Supprimer la carte
    }
  }
}

