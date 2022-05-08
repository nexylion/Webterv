import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Massage';
  page = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.default.User | null;
  constructor(private authService :AuthService,private router: Router){
  }
  ngOnInit() {
    // fat-arrow
    this.routes = this.router.config.map(conf => conf.path) as string[];

    // rxjs - reaktív programozás
    // subscribe
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });
    this.authService.isUserLoggedIn().subscribe(user =>{
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));

    });

  }
  changePage(selectedPage: string) {
    //this.page = selectedPage;
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
  if (event === true) {
      sidenav.close();
    
  }}
  logout(asd ?: boolean){
    this.authService.logout();
  }
 
}
