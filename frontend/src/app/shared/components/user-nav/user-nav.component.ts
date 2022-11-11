import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LocalStorageService, NavI } from '../..';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  @Input() set cart(data) {
    this.cartItems = this.localStorageService.get('cart');
  }

  get cartItemQuantity() {return this.cartItems.length}

  navigationItems: NavI[] = [
    {
      title: 'Pizza',
      path: '/user/items',
    },
    {
      title: 'My Profile',
      path: '/profile',
    },
  ];
  public cartItems: any[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.localStorageService.get('cart');
  }

  public logout(): void {
    this.localStorageService.clear();
    this.router.navigate(['/login'])
  }
}
