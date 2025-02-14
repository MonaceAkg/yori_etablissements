import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainAccueilComponent } from './Layout/main-accueil/main-accueil.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MainEspaceComponent } from './Layout/main-espace/main-espace.component';
import { EspaceComponent } from './components/espace/espace.component';
import { MainChoixComponent } from './Layout/main-choix/main-choix.component';
import { ChoixEtablissementComponent } from './components/choix-etablissement/choix-etablissement.component';
import { Progression1Component } from './components/progression1/progression1.component';
import { AjoutHotelComponent } from './Layout/ajout-hotel/ajout-hotel.component';
import { Progression2Component } from './components/progression2/progression2.component';
import { Progression3Component } from './components/progression3/progression3.component';
import { Progression4Component } from './components/progression4/progression4.component';
import { LoadingComponent } from './components/hotels/loading/loading.component';
import { AjoutTourismeComponent } from './Layout/ajout-tourisme/ajout-tourisme.component';
import { ProgressionTour1Component } from './components/Tourisme/progression-tour1/progression-tour1.component';
import { ProgressionTour2Component } from './components/Tourisme/progression-tour2/progression-tour2.component';
import { ProgressionTour3Component } from './components/Tourisme/progression-tour3/progression-tour3.component';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainAccueilComponent,
    children: [{ path: '', component: AccueilComponent }],
  },
  {
    path: '',
    component: MainEspaceComponent,
    children: [
      { path: 'espace', component: EspaceComponent },
      { path: 'list-etablissements', component: EspaceComponent },

    ],
  },
  {
    path: '',
    component: MainChoixComponent,
    children: [
      { path: 'choix-etablissement', component: ChoixEtablissementComponent },
    ],
  },

  {
    path: '',
    component: AjoutHotelComponent,
    children: [
      { path: 'ajout-hotel', component: Progression1Component },
      { path: 'info-hotel', component: Progression2Component },
      { path: 'enregistrement-hotel', component: Progression3Component },
      { path: 'finalisation', component: Progression4Component },
    ],
  },


  {
    path: '',
    component: AjoutTourismeComponent,
    children:[
      {path:'ajout-tourisme', component:ProgressionTour1Component},
      {path: 'photo-tourisme', component:ProgressionTour2Component},
      {path: 'complement-tourisme', component:ProgressionTour3Component},
    ]
  },


  {
    path:'carte', component:MapComponent
  },

  { path: 'loading', component: LoadingComponent },
];
