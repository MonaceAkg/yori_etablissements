import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainAccueilComponent } from './Layout/main-accueil/main-accueil.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MainEspaceComponent } from './Layout/main-espace/main-espace.component';
import { EspaceComponent } from './components/espace/espace.component';
import { MainChoixComponent } from './Layout/main-choix/main-choix.component';
import { ChoixEtablissementComponent } from './components/choix-etablissement/choix-etablissement.component';
import { Progression1Component } from './components/progression1/progression1.component';
import { AjoutEtablissementComponent } from './Layout/ajout-etablissement/ajout-etablissement.component';
import { Progression2Component } from './components/progression2/progression2.component';
import { Progression3Component } from './components/progression3/progression3.component';

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
    children: [{ path: 'espace', component: EspaceComponent }],
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
    component: AjoutEtablissementComponent,
    children: [
      { path: 'ajout-hotel', component: Progression1Component },
      { path: 'info-hotel', component: Progression2Component },
      { path: 'enregistrement-hotel', component: Progression3Component },
      { path: 'finalisation', component: Progression3Component },
    ],
  },
];
