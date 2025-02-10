import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable, tap, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private http = inject(HttpClient);
  private BASE_URL = 'http://localhost:8000/api';  // URL du backend Laravel

  user = signal<User | undefined | null>(undefined);

  
  login(credentials: Credential): Observable<User | null | undefined> {
    return this.http.post(this.BASE_URL + '/login', credentials).pipe(  // URL Laravel
      tap((result: any) => {
        // Stockage du token reçu après le login
        localStorage.setItem('token', result['access_token']);
        const user = Object.assign(new User(), result['user']);
        this.user.set(user);  // Mise à jour de l'utilisateur
      }),
      map((result: any) => { return this.user(); })  // Renvoie de l'utilisateur connecté
    );
  }

getUser(): Observable<User | null | undefined> {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return of(null);  // Retourne null si aucun token n'est trouvé
  }

  return this.http.get(this.BASE_URL + '/user', {  // URL Laravel
    headers: {
      'Authorization': `Bearer ${token}`  // Ajout du token dans l'en-tête
    }
  }).pipe(
    tap((result: any) => {
      const user = Object.assign(new User(), result);
      this.user.set(user);  // Mise à jour de l'utilisateur
    }),
    map((result: any) => { return this.user(); })  // Renvoie de l'utilisateur
  );
}

logout(): Observable<any> {
  const token = localStorage.getItem('token');
  
  return this.http.post(this.BASE_URL + '/logout', {}, {  // URL Laravel
    headers: {
      'Authorization': `Bearer ${token}`  // Ajout du token dans l'en-tête
    }
  }).pipe(
    tap(() => {
      // Suppression du token du localStorage et mise à jour de l'état utilisateur
      localStorage.removeItem('token');
      this.user.set(null);
      console.log("User déconnecté")
    })
  );
}

}
 