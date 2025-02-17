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
export class MapComponent implements AfterViewInit{
    private map!: L.Map; 
  
    ngAfterViewInit(): void {
      this.initMap();
    }
  
    private initMap(): void {
      this.map = L.map('map', {
        center: [46.879966, -121.726909],
        zoom: 12
      });
  
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: 'OpenStreetMap'
      });
  
      tiles.addTo(this.map);
  
      // Invalider la taille de la carte après l'initialisation
      setTimeout(() => {
        this.map.invalidateSize();
      }, 0); // Utilise setTimeout pour exécuter après le rendu
    }
}

