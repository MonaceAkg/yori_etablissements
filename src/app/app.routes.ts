import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainAccueilComponent } from './Layout/main-accueil/main-accueil.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MainEspaceComponent } from './Layout/main-espace/main-espace.component';
import { EspaceComponent } from './components/espace/espace.component';
import { MainChoixComponent } from './Layout/main-choix/main-choix.component';
import { ChoixEtablissementComponent } from './components/choix-etablissement/choix-etablissement.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:MainAccueilComponent,
        children:[
            {path:'', component:AccueilComponent}
        ]
    },
    {
        path:"",
        component:MainEspaceComponent,
        children:[
            {path:'espace', component:EspaceComponent}
        ]
    },
    {
        path:"",
        component:MainChoixComponent,
        children:[
            {path:'choix-etablissement', component:ChoixEtablissementComponent}
        ]
    },
];
