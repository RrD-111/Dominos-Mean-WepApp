import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/guards/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dominos';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }
}
