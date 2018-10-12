import { AuthService } from './../auth.service';
import { Order } from './../models/order';
import { ShoppingCart } from './../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { OrderService } from './../order.service';
import { ShoppingCartService } from './../shopping-cart-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  cart$;
  cart: ShoppingCart;

  shipping: {};
  userId: string;

  subscription: Subscription;

  
  constructor(private authService: AuthService, private cartService: ShoppingCartService, private orderService: OrderService, private router: Router) { }

  async ngOnInit() {
    let cart = await this.cartService.getCart();
    this.subscription = cart.subscribe(cart => {
      this.cart = cart;
    });
    this.authService.user$.subscribe(user => this.userId = user.uid)

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.cart, this.shipping);
    this.orderService.storeOrder(order);
    let resultKey = await this.orderService.placeOrder(order, this.cart);  
  } 
}