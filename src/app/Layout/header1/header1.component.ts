import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { LoginComponent } from '../../auth/login/login.component';



@Component({
  selector: 'app-header1',
  imports: [
    MatDialogModule,
    CommonModule,
    MatIcon,
    MatMenu,
    RouterLink,
    MatMenuTrigger
  ],
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.css'
})
export class Header1Component {
  showAddEstablishmentButton: boolean = false;
  showLoginButton: boolean = false;
  showLogoutButton: boolean = false;
  userName: string | null = null;
  private dialogRef: any;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    // public authService: AuthService,
    // public loginService: LoginService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.dialogRef) {
          this.dialogRef.close();
        }
      });
  }


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateButtonVisibility(event.urlAfterRedirects);
      }
    });
    // Initialisez les boutons en fonction de la route actuelle au chargement du composant
    this.updateButtonVisibility(this.router.url);

    // Obtenez le nom de l'utilisateur connecté
    // this.loginService.getUser().subscribe(user => {
    //     this.userName = user?.nom || 'Utilisateur';
    // });

  }

  updateButtonVisibility(url: string) {
    if (url === '/' || url === '') {
      this.showAddEstablishmentButton = true;
      this.showLoginButton = true;
      this.showLogoutButton = false;
    } else if (url === '/home') {
      this.showAddEstablishmentButton = true;
      this.showLoginButton = false;
      this.showLogoutButton = true;
    } else {
      this.showAddEstablishmentButton = true;
      this.showLoginButton = true;
      this.showLogoutButton = true;
    }
  }


  logout(){
    // this.loginService.logout();
    this.navigateHome();
  }

  navigateHome() {
		this.router.navigate(['/']);
	  }


    openLoginDialog(): void {
      this.dialogRef = this.dialog.open(LoginComponent, {
        width: '80%',
        maxWidth: '100%',
      });

      this.dialogRef.afterClosed().subscribe(() => {
        console.log('La fenêtre de connexion a été fermée');
        this.dialogRef = null; // Réinitialiser dialogRef
      });
    }
}
