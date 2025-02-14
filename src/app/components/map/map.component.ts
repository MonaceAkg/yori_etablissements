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
  private markerClusterGroup!: L.MarkerClusterGroup;
  private markers: L.Marker[] = []; // Liste des marqueurs
  isLoading: boolean = true;

  ngAfterViewInit(): void {
    this.initializeMap([14.6928, -17.4467]); // Initialiser la carte avec Dakar

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                this.map.setView([latitude, longitude], 13); // Centrer sur la position de l'utilisateur
                this.addMarker(latitude, longitude); // Ajouter un marqueur
                this.isLoading = false;
            },
            (error) => {
                console.error('Erreur de géolocalisation :', error);
                this.isLoading = false;
            }
        );
    } else {
        console.warn("La géolocalisation n'est pas supportée par ce navigateur.");
        this.isLoading = false;
    }

    this.resizeMap();

    // Écouter les événements de redimensionnement
    window.addEventListener('resize', () => {
        this.resizeMap();
    });
}

private initializeMap(center: [number, number]): void {
    this.map = L.map('map').setView(center, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 19,
    }).addTo(this.map);

    this.markerClusterGroup = new (window as any).L.MarkerClusterGroup();
    this.map.addLayer(this.markerClusterGroup);
}

// private addMarker(latitude: number, longitude: number, popupText: string = ''): void {
//     const marker = L.marker([latitude, longitude]);

//     if (popupText) {
//         marker.bindPopup(popupText);
//     }

//     this.markerClusterGroup.addLayer(marker);
//     this.markers.push(marker); // Ajouter à la liste des marqueurs
// }
  


  // private initializeMap(center: [number, number]): void {
  //   this.map = L.map('map').setView(center, 13);
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  //     maxZoom: 19,
  //   }).addTo(this.map);
  // }
  

  private addMarker(latitude: number, longitude: number): void {
    const marker = L.marker([latitude, longitude]);
    this.markers.push(marker); // Ajouter à la liste des marqueurs
  }

  private resizeMap(): void {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.style.width = '30%'; // Ajuster à 100% de la largeur
        mapContainer.style.height = '200px'; // Définir une hauteur fixe
        this.map.invalidateSize(); // Informer Leaflet que la taille a changé
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}

