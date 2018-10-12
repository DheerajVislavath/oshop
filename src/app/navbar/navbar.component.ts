import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart-service.service';
import { AppPage } from './../../../e2e/app.po';
import { AppUser } from './../models/app-user';
import { AdminAuthGuard } from './../admin-auth.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  cart$;
  totalQuantity: number;

  constructor(
    private auth: AuthService, 
  private cartService: ShoppingCartService) {   
     }

 async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = await this.cartService.getCart();
  }

  getTotalQuantity(cart: ShoppingCart){
    let count = 0;      
    for(let key in cart.items) {
       count = count + cart.items[key].quantity;
    }
    return count;
  }

  logout() {
    this.auth.logout();
  }
}