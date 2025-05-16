import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-politique',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './politique.component.html',
  styleUrl: './politique.component.css'
})
export class PolitiqueComponent {
  daysOfWeek: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  selectedDays: string[] = [];
  // Horaires par jour sélectionné
  hoursByDay: { [day: string]: { opening: string; closing: string } } = {};
  selectedHoursByDay: { [day: string]: string[] } = {};


  // Gestion des heures disponibles pour créneaux
  hours: string[] = ['8h00', '10h00', '12h00', '14h00', '16h00', '18h00'];

  selectedhours: string[] = [];

  // Gestion de la sélection du mode de visite
  breakfastServed: 'heures' | 'jours' | null = null;
  breakfastServed2: 'illimitee' | 'limitee' | null = null;

  propertyTypes: { value: string; label: string }[] = [
    { value: '', label: 'Sélectionnez une durée' },
    { value: '1h', label: '1h' },
    { value: '2h', label: '2h' },
    { value: '3h', label: '3h' },
    { value: '4h', label: '4h' },
    { value: '5h', label: '5h' },
    { value: '6h', label: '6h' },
    { value: '7h', label: '7h' },
    { value: '8h', label: '8h' },
    { value: '9h', label: '9h' },
    { value: '10h', label: '10h' },
    { value: '11h', label: '11h' },
    { value: 'demi_journee', label: 'Demi-journée' },
    { value: '13h', label: '13h' },
    { value: '14h', label: '14h' },
    { value: '15h', label: '15h' },
    { value: '16h', label: '16h' },
    { value: '17h', label: '17h' },
    { value: '18h', label: '18h' },
    { value: '19h', label: '19h' },
    { value: '20h', label: '20h' },
    { value: '21h', label: '21h' },
    { value: '22h', label: '22h' },
    { value: '23h', label: '23h' },
    { value: '1jour', label: '1 jour' },
  ];





  // Options pour la durée limitée (jours, semaines, mois)
  durationOptions: { value: string; label: string }[] = [
    { value: '1j', label: '1 jour' },
    { value: '2j', label: '2 jours' },
    { value: '3j', label: '3 jours' },
    { value: '4j', label: '4 jours' },
    { value: '5j', label: '5 jours' },
    { value: '1s', label: '1 semaine' },
    { value: '2s', label: '2 semaines' },
    { value: '3s', label: '3 semaines' },
    { value: '1m', label: '1 mois' },
    { value: '2m', label: '2 mois' },
    { value: '3m', label: '3 mois' },
  ];

  selectedDurationHeures: string = '';
  selectedDurationJours: string = '';

  toggleDay(day: string): void {
    const index = this.selectedDays.indexOf(day);
    if (index >= 0) {
      this.selectedDays = this.selectedDays.filter(d => d !== day);
      delete this.hoursByDay[day];
      delete this.selectedHoursByDay[day];
    } else {
      this.selectedDays = [...this.selectedDays, day];
      this.hoursByDay[day] = { opening: '', closing: '' };
      this.selectedHoursByDay[day] = []; // Initialisation cruciale !
    }
  }

  updateHour(day: string, type: 'opening' | 'closing', value: string): void {
    if (!this.hoursByDay[day]) {
      this.hoursByDay[day] = { opening: '', closing: '' };
    }
    this.hoursByDay[day][type] = value;
  }

  toggleHour(day: string, hour: string): void {
    if (!this.selectedHoursByDay[day]) {
      this.selectedHoursByDay[day] = [];
    }
    const index = this.selectedHoursByDay[day].indexOf(hour);
    if (index >= 0) {
      this.selectedHoursByDay[day] = this.selectedHoursByDay[day].filter(h => h !== hour);
    } else {
      this.selectedHoursByDay[day] = [...this.selectedHoursByDay[day], hour];
    }
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Tu peux accéder à toutes tes données ici
    console.log('Jours sélectionnés:', this.selectedDays);
    console.log('Horaires par jour:', this.hoursByDay);
    console.log('Mode visite:', this.breakfastServed);

    if (this.breakfastServed === 'heures') {
      console.log('Durée heures:', this.selectedDurationHeures);
      console.log('Créneaux horaires par jour:', this.selectedHoursByDay);
    } else if (this.breakfastServed === 'jours') {
      console.log('Durée jours:', this.selectedDurationJours);
    }

    alert('Formulaire soumis avec succès !');
  }


}
