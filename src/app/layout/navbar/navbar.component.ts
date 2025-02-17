import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  closeMenu() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
      navbar.classList.remove('show');
    }
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
